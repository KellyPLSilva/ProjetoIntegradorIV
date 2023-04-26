@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
    <h1>Dashboard</h1>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
@stop

@section('content')
    <div class="row">
        <div class="col-lg-3 col-6">

            <div class="small-box bg-info">
                <div class="inner">
                    <h3 id="qtde_companhias">{{$qtde}}</h3>
                    <p>Quantidade de Companhias</p>
                </div>
                <div class="icon">
                    <i class="ion ion-bag"></i>
                </div>
            </div>
        </div>

        <div class="col-lg-3 col-6">

            <div class="small-box bg-success">
                <div class="inner">
                    <h3>{{$companhia_mais_antiga->nome_empresarial}}<sup style="font-size: 20px">{{$companhia_mais_antiga->data_constituicao}}</sup></h3>
                    <p>Companhia mais antiga</p>
                </div>
                <div class="icon">
                    <i class="ion ion-stats-bars"></i>
                </div>
            </div>
        </div>

        <div class="col-lg-3 col-6">

            <div class="small-box bg-warning">
                <div class="inner">
                    <h3>44</h3>
                    <p>User Registrations</p>
                </div>
                <div class="icon">
                    <i class="ion ion-person-add"></i>
                </div>
            </div>
        </div>

        <div class="col-lg-3 col-6">

            <div class="small-box bg-danger">
                <div class="inner">
                    <h3>65</h3>
                    <p>Unique Visitors</p>
                </div>
                <div class="icon">
                    <i class="ion ion-pie-graph"></i>
                </div>
            </div>
        </div>

    </div>
    @component('graficos.graficoMapaBrasil')
    @endcomponent
    @component('graficos.graficoTorre')
    @endcomponent
<div class="row">
    @component('graficos.graficoLinha')
    @endcomponent

    @component('graficos.graficoRosca')
    @endcomponent
</div>
@stop

@section('css')
    <link rel="stylesheet" href="/css/admin_custom.css">
@stop

@section('js')
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="path/to/chartjs/dist/chart.umd.js"></script>
    <script src="{{ asset('js/graficos.js') }}"></script>
    <script src="{{ asset('js/home.js') }}"></script>
@stop
