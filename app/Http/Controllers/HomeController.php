<?php

namespace App\Http\Controllers;

use App\Models\f_c_a;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        return view('home');
    }
    public function uf_mun()
    {
        return view('ufMun');
    }
}
