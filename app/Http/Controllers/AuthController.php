<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use App\Models\User;

class AuthController extends Controller
{
    public function login () {
        $user =  User::create([
            'name' => 'Samuel',
            'email' => 'samuel.jaquemoud@gmail.com',
            'password' => Hash::make('12345678')
        ]);

        return Inertia::render('Login', [
            'user' => $user
        ]);
    }

    public function register() {
        return Inertia::render('Auth', [
            'name' => 'John Doe'
        ]);
    }
}
