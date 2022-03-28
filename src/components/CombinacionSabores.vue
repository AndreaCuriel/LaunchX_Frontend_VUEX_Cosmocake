<template>
    <div class="formulario-orden">
            <h2 class="titulos-form">Sabores</h2>
             <input type="checkbox" :value="$store.state.sabores[1].sabor" id="sabor1" v-model="$store.state.checkedSabores">
             <label for="sabor1">Luna</label>
             <input type="checkbox" :value="$store.state.sabores[4].sabor" id="sabor2" v-model="$store.state.checkedSabores">
             <label for="sabor2">Tierra</label>
             <input type="checkbox" :value="$store.state.sabores[2].sabor" id="sabor3" v-model="$store.state.checkedSabores">
             <label for="sabor3">Marte</label>
             <input type="checkbox" :value="$store.state.sabores[3].sabor" id="sabor4" v-model="$store.state.checkedSabores">
             <label for="sabor4">Saturno</label>
             <input type="checkbox" :value="$store.state.sabores[0].sabor" id="sabor5" v-model="$store.state.checkedSabores">
             <label for="sabor5">Jupiter</label>
        </div>

        
</template>

<script>
export default {
    name: "CombinacionSabores"
}
</script>