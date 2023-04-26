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
}