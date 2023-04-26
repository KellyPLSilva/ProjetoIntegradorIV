<?php

namespace App\Http\Controllers;

use App\Models\f_c_a;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $companhia_mais_antiga = f_c_a::orderBy('data_constituicao','ASC')->get();
        $data = date_create($companhia_mais_antiga[0]->data_constituicao);
        $companhia_mais_antiga[0]->data_constituicao = date_format($data,"d/m/Y");
        $qtde = count($companhia_mais_antiga);
        return view('home',['companhia_mais_antiga' => $companhia_mais_antiga[0],'qtde' => $qtde]);
    }
}
