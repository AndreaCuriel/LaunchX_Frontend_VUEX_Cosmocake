<template>
    <section class="cambio-pagina" id="seccion-menu">
        <nav id="nav-menu">
        
            <div><button class="botones-cambio" id="boton-pedidos" @click="$store.commit('llamarPedidos')">Entrar</button></div>
                
        </nav>
    </section>
</template>

<script>
export default {
    name: "NavPerfil",
}
</script>