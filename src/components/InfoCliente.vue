<template>
<seccion class="formulario">
        
        <div class="formulario-cliente"> 
            
            <h2 class="titulos-form">Cliente</h2>
            <label for="nombre">Nombre:</label>
            <input type="text" name="nombre" id="nombre" v-model="$store.state.cliente.nombre">
            <br><br>
            <label for="telefono">Teléfono:</label>
            <input type="tel" name="telefono" id="telefono" v-model="$store.state.cliente.telefono">
            <br><br>
            <label for="email">Correo Electrónico:</label>
            <input type="email" name="email" id="email" v-model="$store.state.cliente.email">
            <br><br>
            
        </div>
            
            
       
       
        <div class="formulario-cliente">
                <h2 class="titulos-form">Descripcion del Pastel</h2>
                <input type="text" name="descripcion" id="descripcion" v-model="$store.state.cliente.descripcion">
        </div>
    </seccion>
    
</template>

<script>
export default {
    name: "InfoCliente"
}
</script>