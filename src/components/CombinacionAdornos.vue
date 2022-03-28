<template>
    <div class="formulario-orden">
            <h2 class="titulos-form">Adornos</h2>
            <input type="checkbox" :value="$store.state.adornos[1].adorno" id="adorno1" v-model="$store.state.checkedAdornos">
            <label for="adorno1">Bandera de México</label>
            <input type="checkbox" :value="$store.state.adornos[0].adorno" id="adorno2" v-model="$store.state.checkedAdornos">
            <label for="adorno2">Astronauta</label>
            <input type="checkbox" :value="$store.state.adornos[3].adorno" id="adorno3" v-model="$store.state.checkedAdornos">
            <label for="adorno3">Nave Espacial</label>
            <input type="checkbox" :value="$store.state.adornos[4].adorno" id="adorno4" v-model="$store.state.checkedAdornos">
            <label for="adorno4">Satélite</label>
            <input type="checkbox" :value="$store.state.adornos[2].adorno" id="adorno5" v-model="$store.state.checkedAdornos">
            <label for="adorno5">Cohete Espacial</label>
            
        </div>
</template>

<script>
export default {
   name: "CombinacionAdornos",
}
</script>