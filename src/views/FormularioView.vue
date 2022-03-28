<template>
<Encabezado/>
<article>
  <Servicio/>
  <div id="tabla"></div>
  <InfoCliente/>
  <seccion class="formulario"> 
    <CombinacionSabores/>
    <CombinacionAdornos/>
  </seccion>
</article> 
<NavFormulario/>  
<div id="datos">

</div>
</template>

<script>
import Encabezado from "../components/Encabezado.vue";
import Servicio from "../components/Servicio.vue";
import InfoCliente from "../components/InfoCliente.vue";
import CombinacionSabores from "../components/CombinacionSabores.vue";
import CombinacionAdornos from "../components/CombinacionAdornos.vue";
import NavFormulario from "../components/NavFormulario.vue";



export default {
  name: 'FormularioView',
  components: {
    Encabezado,
    Servicio,
    InfoCliente,
    CombinacionSabores,
    CombinacionAdornos,
    NavFormulario,
  }
}
</script>
<style scoped>
#tabla{
  color: white;
}
</style>