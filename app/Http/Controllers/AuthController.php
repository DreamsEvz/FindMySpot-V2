<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use App\Models\User;
use Symfony\Component\HttpFoundation\RedirectResponse;

class AuthController extends Controller
{
    public function indexLogin () {
        return Inertia::render('Login');
    }

    public function indexRegister() {
        return Inertia::render('Register');
    }

    public function logout(Request $request) {

        
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Auth::logout();
    }

    public function register() {
        $data = request()->validate([
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $user =  User::create([
            'name' => $data['name'],
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


        if(Auth::attempt($data)) {
            request()->session()->regenerate();
            return redirect()->route('map');
        }
    }
}
