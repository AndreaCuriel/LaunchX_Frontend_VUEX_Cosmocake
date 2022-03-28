<template>
<section class="cambio-pagina" id="seccion-menu">
    <nav id="nav-menu">
    
            <div><router-link to="/menu"><button class="botones-cambio boton-menu" @click="$store.commit('menuTitulo')">Menú</button></router-link></div>
            <div><button class="botones-cambio" id="boton-pagar" @click="$store.commit('total')">Pedir</button></div>
    
    </nav>

    
</section>


    
</template>

<script>
export default {
    name: "NavFormulario",
}
</script>