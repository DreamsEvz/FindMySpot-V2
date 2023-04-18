
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

Route::get('/login', [App\Http\Controllers\AuthController::class, 'indexLogin']);
Route::get('/register', [App\Http\Controllers\AuthController::class, 'indexRegister']);
Route::get('/markers', [App\Http\Controllers\MarkersController::class, 'index'])->name('markers');
Route::get('/map', [App\Http\Controllers\MapController::class, 'index'])->name('map');
Route::get('/friends', [App\Http\Controllers\FriendsController::class, 'index']);
Route::get('/profil', [App\Http\Controllers\ProfilController::class, 'index']);

Route::post('/login', [App\Http\Controllers\AuthController::class, 'register']);
Route::post('/login', [App\Http\Controllers\AuthController::class, 'login']);