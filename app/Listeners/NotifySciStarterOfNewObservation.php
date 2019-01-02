<?php

namespace App\Listeners;

use App\Http\Resources\SciStarterResource;
use App\User;
use Carbon\Carbon;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Exception;

class NotifySciStarterOfNewObservation implements ShouldQueue
{
    use InteractsWithQueue;

    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  \App\Events\ObservationCreated $event
     * @return void
     */
    public function handle($event)
    {
        $observation = $event->observation;
        info('Triggered!!!!!');
        $sci_starter = new SciStarterResource();
        $profile_id = $sci_starter->profile($observation->user);
        info('PROFILE ID: '.$profile_id);
        if($profile_id) {
            try {
                $response = $sci_starter->event($profile_id, 'collection', [
                    'when' => $observation->collection_date->format('Y-MM-DD\THH:mm:ss'),
                    'extra' => json_encode([
                        'title' => $observation->observation_category === 'Other' ? $observation->data['otherLabel'] : $observation->observation_category
                    ])
                ]);
                $message = json_encode($response, JSON_PRETTY_PRINT);
                info($message);
            } catch (Exception $exception) {
                // Ignore for now. nothing to report to.
            }
        }
    }
}