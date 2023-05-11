<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Marker;

class MapController extends Controller
{
    public function index() {
        return Inertia::render('Map');
    }

    public function create() {

        $data = request()->validate([
            'name' => 'required',
            'description' => 'required',
            'lat' => 'required',
            'lng' => 'required',
            'type' => ''
        ]);

        $marker = Marker::create([
            'name' => $data['name'],
            'description' => $data['description'],
            'lat' => $data['lat'],
            'lng' => $data['lng'],
            'type' => $data['type'],
            'user_id' => Auth::user()->id
        ]);

        $marker->save();
    }
}
