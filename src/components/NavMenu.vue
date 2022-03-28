<template>
    <section class="cambio-pagina" id="seccion-menu">
        <nav id="nav-menu">
        
                <div><router-link to="/"><button class="botones-cambio boton-inicio">Inicio</button></router-link></div>
                <div><router-link to="/menu/formulario"><button class="botones-cambio" id="boton-ordenar" @click="$store.commit('formTitulo')">Ordenar</button></router-link></div>
        
        </nav>
    </section>
</template>

<script>
export default {
    name: "NavMenuS"
}
</script>