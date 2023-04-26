<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('f_c_a', function (Blueprint $table) {
            $table->id();
            $table->string('CNPJ_Companhia');
            $table->date('data_referencia');
            $table->string('nome_empresarial');
            $table->date('data_constituicao');
            $table->date('data_registro_CVM');
            $table->string('categoria_registro_CVM');
            $table->string('situacao_registro_CVM');
            $table->string('setor_atividade');
            $table->string('situacao_emissor');
            $table->string('especie_controle_acionario');
            $table->string('cidade');
            $table->string('sigla_uf');
            $table->string('pais');
            $table->string('segimento_de_listagem');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('f_c_a');
    }
};
