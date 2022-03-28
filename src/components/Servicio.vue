<template>
    <seccion class="formulario">
        <div class="formulario-servicio">
            <h2 class="titulos-form">Servicio</h2>
            <p>Servicio es para:</p> <br>
            <input type="radio" id="aqui" name="servicio" value="Restaurante." v-model="$store.state.servicio.entrega">
            <label for="aqui">Comer aquí</label><br>
            <input type="radio" id="llevar" name="servicio" value="Llevar." v-model="$store.state.servicio.entrega">
            <label for="llevar">Llevar</label>
            <br><br>
            <label for="fecha">Fecha</label>
            <input type="date" name="fecha" id="fecha" v-model="$store.state.servicio.fecha">
            <label for="hora">Hora</label>
            <input type="time" name="hora" id="hora" v-model="$store.state.servicio.hora">

 
            
         </div>
    
         

    </seccion>
    
</template>

<script>
export default {
    name: "Servicio"
}
</script>