<template>
    <header class="cabecera"> 
        <div class="logo"><img src="../assets/logo.png" alt="logo"></div>
        <nav class="navegacion">
            
                <div class="main" id="accesoB" ><router-link to="/perfil" class="mainlink" @click="$store.commit('perfilTitulo')">Acceso</router-link></div>
                <div class="main" id="menuB"><router-link to="/menu" class="mainlink" @click="$store.commit('menuTitulo')">Menu</router-link></div>    
        </nav>  
    </header>

    <section id="fotosPasteleria">
        <img src="" alt="fotos de la pasteleria">
    </section>
</template>

<script>
export default {
    name: "Inicio"
}
</script>