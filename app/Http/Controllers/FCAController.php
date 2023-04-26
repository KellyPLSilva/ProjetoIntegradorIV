<?php

namespace App\Http\Controllers;

use App\Models\f_c_a;
use Illuminate\Http\Request;

class FCAController extends Controller
{
    public function qtde()
    {
        $dados = f_c_a::all();

        $qtde_companhias = count($dados);

        return $qtde_companhias;
    }
    public function qtde_uf()
    {
        $por_uf = f_c_a::select('sigla_uf as uf',f_c_a::raw('count(sigla_uf) as qtde'))->groupBy('sigla_uf')->orderBy('qtde','DESC')->get()->toArray();
        //print_r($por_uf);
        return $por_uf;
    }
    public function mais_antiga()
    {
        $companhia_mais_antiga = f_c_a::orderBy('data_constituicao','ASC')->first();
        $data = date_create($companhia_mais_antiga->data_constituicao);
        $companhia_mais_antiga->data_constituicao = date_format($data,"d/m/Y");

        return $companhia_mais_antiga;
    }
}