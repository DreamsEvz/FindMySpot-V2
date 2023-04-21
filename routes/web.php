
<?php

use App\Http\Controllers\AuthController;
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






Route::group([
    'controller' => AuthController::class,
], function () {
    Route::get('/login', 'indexLogin')->name('login');
    Route::get('/register' ,'indexRegister');
    Route::post('/register','register');
    Route::post('/login', 'login');
    Route::delete('/logout', 'logout');
});


Route::get('/' , [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::group([
    'middleware' => 'auth',
], function () {
    Route::get('/dashboard', [App\Http\Controllers\DashboardController::class, 'index'])->name('dashboard');
    Route::get('/markers', [App\Http\Controllers\MarkersController::class, 'index'])->name('markers.index');

    Route::get('/map', [App\Http\Controllers\MapController::class, 'index'])->name('map');
    Route::post('/map', [App\Http\Controllers\MapController::class, 'create'])->name('map.create'); 

    Route::get('/friends', [App\Http\Controllers\FriendsController::class, 'index']);
    Route::get('/profil', [App\Http\Controllers\ProfilController::class, 'index']);
});


