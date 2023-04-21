<?php

namespace App\Http\Controllers;

use App\Models\Marker;
use Illuminate\Http\Request;
use Inertia\Inertia;
class MarkersController extends Controller
{
    public function index() {
        return Inertia::render('Markers');
    }
}
