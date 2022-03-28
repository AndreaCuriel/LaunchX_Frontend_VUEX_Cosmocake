<template>
    <seccion class="seccion-pedidos" id="infobusqueda">
            <table class="tablasIP" id="tabla-pedidos">
                <tr>
                    <th>ID</th>
                    <th>Entrega</th>
                    <th>Cliente</th>
                    <th>Orden</th>
                    <th>Descripción</th>
                    <th>Estado</th>
                </tr>
 
            </table>

            <p id="ids">
                {{$store.getters.ids}}
            </p>
        

        </seccion>

       
</template>

<script>
export default {
    name: 'TablaPedidos'
}
</script>