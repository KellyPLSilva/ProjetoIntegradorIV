@extends('adminlte::page')

@section('title', 'Dashboard')

@section('content_header')
    <h1>Por UF/Municipios</h1>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
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