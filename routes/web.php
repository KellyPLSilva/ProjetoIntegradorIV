<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/',[App\Http\Controllers\HomeController::class,'index']);

Route::get('/profissionais-data',[App\Http\Controllers\ProfissionaisController::class,'profissionais']);

Route::get('/por-uf',[App\Http\Controllers\FCAController::class,'qtde_uf']);