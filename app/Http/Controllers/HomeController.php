<?php

namespace App\Http\Controllers;

use App\Services\Geocoder;
use Faker\Generator;
use Illuminate\Http\Request;
use App\User;

class HomeController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = auth()->check() ? auth()->user() : false;

        $TreeSnap = [
            'csrfToken' => csrf_token(),
            'loggedIn' => $user ? true : false,
            'role' => auth()->user() ? auth()->user()->role->name : null,
            'user' => false,
        ];

        if ($user) {
            $TreeSnap['user'] = [
                'name' => $user->name,
                'id' => $user->id,
            ];
        }

        return view('home')->with(compact('TreeSnap'));
    }
}
