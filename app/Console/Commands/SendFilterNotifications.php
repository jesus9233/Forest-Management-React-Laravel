<?php

namespace App\Console\Commands;

use App\Filter;
use App\Mail\FilterNotification;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Mail;

class SendFilterNotifications extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'notify:filters';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Notify users of new observations that match their filters';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function handle()
    {
        // Get all filters that are notifiable and last notified was 3 days ago.
        Filter::notifiable()->chunk(200, function ($filters) {
            foreach ($filters as $filter) {
                if (empty($filter->notifications_sent_at)) {
                    $filter->notifications_sent_at = Carbon::now();
                    $filter->save();
                }

                // make sure we didn't recently notify the user
                // of new observations (once every 2 days)
                if ($filter->notifications_sent_at->addDays(2)->lessThan(Carbon::now())) {
                    continue;
                }

                $this->send($filter);
            }
        });
    }

    /**
     * Send the notifications.
     *
     * @param \App\Filter $filter
     */
    protected function send(Filter $filter)
    {
        $user = $filter->user;
        $observations = Filter::apply($filter->rules)->where('observations.created_at', '>', $filter->notifications_sent_at)->paginate(4);
        $total = $observations->total();
        if ($total === 0) {
            return;
        }

        Mail::send(new FilterNotification($user, $observations, $total, $filter));

        $filter->notifications_sent_at = Carbon::now();
        $filter->save();
    }
}
