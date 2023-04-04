<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index () {
        return Inertia::render('Home', [
            'name' => 'John Doe'
        ]);
    }

    public function demo () {
        return Inertia::render('Demo');
    }
}
