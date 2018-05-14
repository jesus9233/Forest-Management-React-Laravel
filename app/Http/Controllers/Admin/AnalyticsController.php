<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Traits\Responds;
use App\Observation;
use App\Services\Analytics\UserStatistics;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class AnalyticsController extends Controller
{
    use Responds;

    /**
     * Count the number of registered users.
     *
     * @return mixed
     */
    public function usersCount()
    {
        return $this->success(User::count());
    }

    /**
     * Count the number of trained Users.
     *
     * @return mixed
     */
    public function usersTrainedCount()
    {
        return $this->success(User::where('class', 'Trained')->count());
    }

    /**
     * Count the number of trained Users.
     *
     * @return mixed
     */
    public function usersTrainedPercentage()
    {
        $all = User::count();
        $trained = User::where('class', 'Trained')->count();

        if ($all === 0) {
            return $this->success("0%");
        }

        return $this->success(number_format(($trained / $all) * 100, 0)."%");
    }

    /**
     * Count the number of observations.
     *
     * @return mixed
     */
    public function observationsCount()
    {
        return $this->success(Observation::count());
    }

    /**
     * Get the count for each available category.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function observationsDistribution()
    {
        $observations = Observation::select([
            'observation_category',
            DB::raw('COUNT(*) as count'),
        ])->groupBy('observation_category')->orderBy('observation_category')->get();

        $data = [
            'labels' => [],
            'dataset' => [],
        ];

        foreach ($observations as $observation) {
            $data['labels'][] = $observation->observation_category;
            $data['dataset'][] = $observation->count;
        }

        return $this->success($data);
    }

    /**
     * Get observations count per state.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function observationsCountByState()
    {
        $observations = Observation::select('address')->get();

        $states = [
            'Tennessee' => 1,
        ];

        foreach ($observations as $observation) {
            if (empty($observation->address)) {
                continue;
            }

            foreach ($observation->address['components'] as $component) {
                if (in_array('administrative_area_level_1', $component['types'])) {
                    if (isset($states[$component['long_name']])) {
                        $states[$component['long_name']]++;
                    } else {
                        $states[$component['long_name']] = 1;
                    }
                }
            }
        }

        arsort($states);

        return $this->success($states);
    }

    /**
     * Create data for users over time chart
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function usersOverTime()
    {
        $stats = new UserStatistics();
        $users = $stats->aggregateUsersCountByMonth(6);
        $trained_users = $stats->aggregateUsersCountByMonth(6, true);

        $data = [];
        for ($i = 5; $i >= 0; $i--) {
            $date = Carbon::now()->firstOfMonth()->subMonths($i);
            $formatted = $date->format('M, Y');
            $datum = [
                'date' => $formatted,
                'users_count' => 0,
                'trained_count' => 0,
            ];

            if (isset($users[$formatted])) {
                $datum['users_count'] = $users[$formatted]['users_count'];
            }

            if (isset($trained_users[$formatted])) {
                $datum['trained_count'] = $users[$formatted]['users_count'];
            }

            $data[] = $datum;
        }

        return $this->success($data);
    }
}
