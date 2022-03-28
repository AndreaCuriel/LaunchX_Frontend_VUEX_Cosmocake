<template>
    <Encabezado/>
    <article id="menu"> 
        <Sabores/>
        <Adornos/>
    </article>
    <NavMenu/>
</template>

<script>
import Encabezado from "../components/Encabezado.vue";
import Sabores from "../components/Sabores.vue";
import Adornos from "../components/Adornos.vue";
import NavMenu from "../components/NavMenu.vue";


export default {
  name: 'MenuView',
  components: {
      Encabezado,
      Sabores,
      Adornos,
      NavMenu,
  }
}
</script>