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
Route::get('/home', function (){ return redirect('/');});
Route::get('/uf-mun',[App\Http\Controllers\HomeController::class,'uf_mun']);

Route::get('/profissionais-data',[App\Http\Controllers\ProfissionaisController::class,'profissionais']);

Route::get('/por-uf',[App\Http\Controllers\FCAController::class,'qtde_uf']);
Route::get('/setor-atividade',[App\Http\Controllers\FCAController::class,'setor_atividade']);
Route::get('/controle-acionario',[App\Http\Controllers\FCAController::class,'controle_acionario']);
Route::get('/qtde-companhias',[App\Http\Controllers\FCAController::class,'qtde']);
Route::get('/mais-antiga',[App\Http\Controllers\FCAController::class,'mais_antiga']);