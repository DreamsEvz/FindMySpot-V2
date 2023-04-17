
<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/' , [App\Http\Controllers\HomeController::class, 'index']);

Route::get('/markers', [App\Http\Controllers\MarkersController::class, 'index']);

Route::get('/map', [App\Http\Controllers\MapController::class, 'index']);

Route::get('/friends', [App\Http\Controllers\FriendsController::class, 'index']);

Route::get('/profil', [App\Http\Controllers\ProfilController::class, 'index']);