@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
    <h1>Dashboard</h1>
    <h5>Painel Informativo: Companhias de Capital Aberto</h5>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
@stop

@section('content')
    @component('infos')        
    @endcomponent
    @component('graficos.graficoMapaBrasil')
    @endcomponent
@stop

@section('css')
    <link rel="stylesheet" href="/css/admin_custom.css">
@stop

@section('js')
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="path/to/chartjs/dist/chart.umd.js"></script>
    <script src="{{ asset('js/infos.js') }}"></script>
    <script src="{{ asset('js/graficosMapa.js') }}"></script>
@stop