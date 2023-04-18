<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use App\Models\User;

class AuthController extends Controller
{
    public function index () {
        return Inertia::render('Login');
    }

    public function register() {
        $data = request()->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $user =  User::create([
            'name' => 'samuel',
            'email' => $data['email'],
            'password' => Hash::make($data['password'])
        ]);

        $user->save();

        return redirect()->route('map');
    }

    public function login() {
        $data = request()->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $user =  User::create([
            'name' => 'samuel',
            'email' => $data['email'],
            'password' => Hash::make($data['password'])
        ]);

        $user->save();

        return to_route('map');
        
    }
}
