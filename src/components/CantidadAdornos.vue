<template>
    <div class="ingredientes-B">
        <h2 class="titulos-inventario">Adornos</h2>
        <dl>
            <dt>{{$store.state.adornos[0].adorno}}</dt>
                <dd>Cantidad: {{$store.state.adornos[0].cantidad}}</dd>
        </dl>    
        <dl>
            <dt>{{$store.state.adornos[1].adorno}}</dt>
                <dd>Cantidad: {{$store.state.adornos[1].cantidad}}</dd>
        </dl>    
        <dl>
            <dt>{{$store.state.adornos[2].adorno}}</dt>
                <dd>Cantidad: {{$store.state.adornos[2].cantidad}}</dd>
        </dl>   
        <dl>
            <dt>{{$store.state.adornos[3].adorno}}</dt>
                <dd>Cantidad: {{$store.state.adornos[3].cantidad}}</dd>
        </dl>    
        <dl>
            <dt>{{$store.state.adornos[4].adorno}}</dt>
                <dd>Cantidad: {{$store.state.adornos[4].cantidad}}</dd>
        </dl>  


 
                
    </div>
</template>
<script>
export default {
    name: "CantidadAdornos",
}
</script>