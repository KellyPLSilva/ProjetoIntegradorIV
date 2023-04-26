<?php

namespace App\Http\Controllers;

use App\Models\profissionais;
use Illuminate\Http\Request;

class ProfissionaisController extends Controller
{
    public function profissionais()
    {
        $profissionais = Profissionais::all();

        return $profissionais;
    }
}
