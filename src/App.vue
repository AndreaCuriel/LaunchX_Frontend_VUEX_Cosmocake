<template>
    <router-view to="/"></router-view>
    <Pie/>
</template>

<script>
import Pie from "./components/Pie.vue";
export default {
  name: 'App',
  components:{
    Pie,
  }
  
}
</script>

<style>

*{
    font-family:Verdana, Geneva, Tahoma, sans-serif
}



body{
    background-color: black;
    margin:0;
   
}

input{
    border: solid rgb(69, 184, 65) 2px;
}

input[type='radio']:after, input[type='checkbox']:after {
    width: 12px;
    height: 12px;
    border-radius: 15px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: white;
    border: solid rgb(69, 184, 65)  2px;
    content: '';
    display: inline-block;
    visibility: visible;
    
}

input[type='radio']:checked:after, input[type='checkbox']:checked:after {
    width: 12px;
    height: 12px;
    border-radius: 15px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: blueviolet;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid blueviolet;
}

.nombre-pagina{
    background-color: #FFFF;
    text-align: center;
    font-size: 20px;
    color: blueviolet;
}

.cabecera{
    display: flex;
    padding: 0% 0% 0% 0%;
    background-color:#0000;
    margin: 0;

}

.logo{
    width: 100%;
    height: 100%;
}

.navegacion{
    display: flexbox;
    width: 100%;
  
}

.main{
    align-items: center;
    display: flex;
    height: 50%;
    justify-content: center;
    width: 100%;
    background-color: #424141;  
}

#accesoB{
    background-color: blueviolet;
    
}

#menuB{
    background-color:  rgb(243, 20, 187);
    
    
}

.mainlink{
    color: white;
    text-decoration: none;
    font-size: 50px;

}

#fotosPasteleria{
    background-color: white;
    height: 330px;
}

.pie .datospie {
    background-color: #424141;
    color:white;
    font-style: italic;
    font-weight: bold;
    display:flex;
    justify-content: space-between;
    padding: 2% 10% 2% 10%;
    margin: 0;
}

.datospie dd{
    color: rgb(207, 67, 144);
}


#menu{
    display: flex;
    background-color: #FFFF;
    flex-wrap: wrap;
}

.seccion-menu{
    border-left: solid  rgb(12, 1, 17) 15px;
    flex: 1;
    margin: 0.5rem;
    padding: 2rem;
    font-size: 2rem;
    background-color: white;
    color: black;
}

.titulos-menu{
    margin: 30px;
    color: black;
    font-size: 25px;
}

.productosM{
    font-size: 20px;
    margin: 30px;
}

.productosM{
    display: flex;

}

.productosM dd{
    font-style: italic;
    color:#817b7b

}

.cambio-pagina nav{
    display: flex;
    background-color: #FFFF;
    flex-wrap: wrap;
}

.cambio-pagina nav div{
    
    flex: 1;  
    padding: 0;
    font-size: 2rem;
    background-color: white;
    color: white;
    
}

.botones-cambio{
    width: 100%;
    height: 100%;
    font-size: 30px;
    margin: 0;
    
    color: white;
    
}

.boton-inicio{
    border: solid blueviolet 2px;
    background-color: blueviolet;
}

#boton-ordenar{
    border: solid rgb(243, 20, 187) 2px;
    background-color: rgb(243, 20, 187);


}

.formulario, .inventario-B{
    display: flex;
    background-color: #FFFF;
    flex-wrap: wrap;

}

.formulario-servicio, .formulario-cliente, .formulario-orden, #formulario-descripcion, .ingredientes-B, .adornos-B, .materiales-B, .agregar-inventario-B{
    border-left: solid  rgb(12, 1, 17) 15px;
    flex: 1;
    margin: 0.5rem;
    padding: 0.5rem;
    font-size: 1rem;
    background-color: white;
    color: blacks;
}

.titulos-form, .titulos-inventario{
    margin: 0;
    color: black;
    font-size: 18px;

}

.boton-menu{
    border: solid blueviolet 2px;
    background-color: blueviolet;
}

#boton-pagar{
    border: solid rgb(243, 20, 187) 2px;
    background-color: rgb(243, 20, 187);
}

#descripcion{
    width: 400px;
    height: 100px;
}

#email{
    width: 200px;

}

#nombre{
    width: 300px;

}


#seccion-login, #seccion-perfil{
    display: flex;
    width: 100%;
   
    align-items: center;
    flex-direction: column;
    
  padding: 0.5rem;
  background-color: white;
}

#cabecera-usuario{
    display: flex;
    flex-direction: row;

    
}

#cerrarS, #logo_perfil{
    flex: 1;
    margin: 0;
    padding: 0;
    font-size: 20px;
    background-color:black;
    color: white;

}

#cerrarS{
    text-align: right;
    padding: 20px;
    background-color: black;  
}

#cerrarS a{
    text-decoration: none;
    color:rgb(24, 149, 221);

}


#boton-perfil{
    border: solid rgb(243, 20, 187) 2px;
    background-color: rgb(243, 20, 187);
}

#boton-inventario, #boton-Rperfil{
    border: solid blueviolet 2px;
    background-color: blueviolet;
}

#boton-pedidos{
    border: solid rgb(243, 20, 187) 2px;
    background-color: rgb(243, 20, 187);
}

#inventario-B{
    margin-top: 20px;

}

.productosM td:nth-child(1){
    width: 350px;

}

.productosM td:nth-child(2){
    width: 100px;

}

.productosM td:nth-child(3){
    width: 150px;

}

   
.seccion-pedidos{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex-wrap: wrap;
    background-color: #FFFF;
    padding: 20px;
    
}

.tablasIP{
    border: solid rgb(69, 184, 65)  2px;
}

#estadoS{
    width: 100%;
}

.tablasIP td:nth-child(1){
 text-align: center;
}

.buscarB{
    background-color: rgb(65, 162, 175);
    border: solid  rgb(65, 162, 175) 1px;
    color: white
}

#tabla-inventario th:nth-child(1){
    width: 30%;
    text-align: center;
}

#tabla-inventario th:nth-child(2){
    width: 60%;
    text-align: center;
}

#tabla-inventario th:nth-child(3){
    width: 50%;
    
}
#tabla-inventari{
    margin: 10px;
}

.seccion-pedidos{
    display: flex;
}

.inventario-B, .seccion-pedidos{
    display: none;
    
}

#tabla-pedidos{
    height: 400px;
    overflow: scroll;
    text-align: start;

}

#tabla-pedidos>tr{
    display: flex;
    width: 100%;
    text-align: center;
    
}

#tabla-pedidos>tr>th:nth-child(1){
    width:  60px;
}


#tabla-pedidos>tr>th:nth-child(2){
    width:  200px;
} 

#tabla-pedidos>tr>th:nth-child(3){
    width:  400px;
}

#tabla-pedidos>tr>th:nth-child(4){
    width:  400px;
}
#tabla-pedidos>tr>th:nth-child(5){
    width:  400px;
}

#tabla-pedidos>tr>td:nth-child(1){
    width:  60px;
}

#tabla-pedidos>tr>td:nth-child(2){
     width:  200px;
}

#tabla-pedidos>tr>td:nth-child(3){
    width:  400px;
    
}

#tabla-pedidos>tr>td:nth-child(4){
    width:  400px;
}
    
#tabla-pedidos>tr>td:nth-child(5){
    width: 400px;
}


</style>
