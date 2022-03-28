<template>
    <div class="ingredientes-B">
        
         <h2 class="titulos-inventario">Sabores</h2>
         <dl>
            <dt>{{$store.state.sabores[0].sabor}}</dt>
                <dd>Cantidad: {{$store.state.sabores[0].cantidad}}</dd>
        </dl>    
        <dl>
            <dt>{{$store.state.sabores[1].sabor}}</dt>
                <dd>Cantidad: {{$store.state.sabores[1].cantidad}}</dd>
        </dl>    
        <dl>
            <dt>{{$store.state.sabores[2].sabor}}</dt>
                <dd>Cantidad: {{$store.state.sabores[2].cantidad}}</dd>
        </dl>   
        <dl>
            <dt>{{$store.state.sabores[3].sabor}}</dt>
                <dd>Cantidad: {{$store.state.sabores[3].cantidad}}</dd>
        </dl>    
        <dl>
            <dt>{{$store.state.sabores[4].sabor}}</dt>
                <dd>Cantidad: {{$store.state.sabores[4].cantidad}}</dd>
        </dl>  
            
    </div>
</template>

<script>
export default {
    name: "CantidadSabores",
}
</script>