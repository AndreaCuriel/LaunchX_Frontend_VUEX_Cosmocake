<template>
<header class="cabecera">
        <div class="logo"><router-link to="/"><img src="../assets/logo_mini.jpg" alt="logo"></router-link></div>
</header>

<section class="nombre-pagina">
        <h1>{{$store.state.titulo}}</h1>
    </section>
</template>

<script>
export default {
    name: "Encabezado",
}
</script>