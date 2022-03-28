<template>
<Encabezado/>
<NavPerfil/>
<section class="inventario-B">
   <CantidadSabores/>
   <CantidadAdornos/>

</section>
<Pedidos/>
    
</template>

<script>
import Encabezado from "../components/Encabezado.vue";
import NavPerfil from "../components/NavPerfil.vue";
import Pedidos from '../components/Pedidos.vue';
import CantidadSabores from '../components/CantidadSabores.vue';
import CantidadAdornos from '../components/CantidadAdornos.vue';




export default {
   name: "PerfilView",
   components: {
       Encabezado,
       NavPerfil,
      Pedidos,
      CantidadSabores,
      CantidadAdornos,
   }
}
</script>