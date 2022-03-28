import { createStore } from "vuex";

export default createStore({
  state: {
    titulo: "",
    servicio: {
      entrega: "",
      fecha: "",
      hora: "",
    },
    cliente: {
      nombre: "",
      telefono: "",
      email: "",
      descripcion: "",
    },
    checkedSabores: [],
    checkedAdornos: [],

    sabores: [
      {
        sabor: "Jupiter",
        precio: 250,
        cantidad: 500,
      },
      {
        sabor: "Luna",
        precio: 200,
        cantidad: 500,
      },
      {
        sabor: "Marte",
        precio: 240,
        cantidad: 500,
      },
      {
        sabor: "Saturno",
        precio: 240,
        cantidad: 500,
      },
      {
        sabor: "Tierra",
        precio: 230,
        cantidad: 500,
      },
    ],
    adornos: [
      {
        adorno: "Astronauta",
        precio: 30,
        cantidad: 500,
      },
      {
        adorno: "Bandera de México",
        precio: 30,
        cantidad: 500,
      },
      {
        adorno: "Cohete Espacial",
        precio: 80,
        cantidad: 500,
      },
      {
        adorno: "Nave Espacial",
        precio: 80,
        cantidad: 500,
      },
      {
        adorno: "Satélite",
        precio: 80,
        cantidad: 500,
      },
    ],
    total: 0,
    pedidos: {
      ids: [],
      entregas: [],
      clientes: [],
      ordenes: [],
      descripcion: [],
    },

    contador: 0,
  },
  getters: {},
  mutations: {
    //titulos de las Vistas
    perfilTitulo(state) {
      state.titulo = "Perfil";
      console.log(state.titulo);
    },

    menuTitulo(state) {
      state.titulo = "Menu";
      console.log(state.titulo);
    },

    formTitulo(state) {
      state.titulo = "Formulario";
      console.log(state.titulo);
    },

    inventarioTitulo(state) {
      state.titulo = "Inventario";
      console.log(state.titulo);
    },

    pedidosTitulo(state) {
      state.titulo = "Pedidos";
      console.log(state.titulo);
    },
    //funcion al realizar el pedido
    total(state) {
      //obtener el precio
      let total = 0;
      let ordenS = state.checkedSabores.sort();
      console.log(ordenS);
      let ordenA = state.checkedAdornos.sort();
      console.log(ordenA);
      ordenS.forEach((s) => {
        state.sabores.forEach((p) => {
          if (s == p.sabor) {
            if (p.precio > total) {
              total = p.precio;
            } else {
              total = total;
            }
          }

          console.log(total);
        });
      });
      ordenA.forEach((a) => {
        state.adornos.forEach((p) => {
          if (a == p.adorno) {
            total = total + p.precio;
          }

          console.log(total);
        });
      });
      state.total = total;
      console.log(state.total);

      alert("Pedido Realizado\n Total: $" + state.total);

      //almacenar formulario en pedidos

      state.pedidos.ids[state.contador] = state.contador + 1;
      state.pedidos.entregas[state.contador] =
        "Entrega: " +
        state.servicio.entrega +
        " Fecha: " +
        state.servicio.fecha +
        " " +
        state.servicio.hora;
      state.pedidos.clientes[state.contador] =
        "Nombre: " +
        state.cliente.nombre +
        " Tel: " +
        state.cliente.telefono +
        " Email: " +
        state.cliente.email;
      state.pedidos.ordenes[state.contador] =
        "Sabores: " + ordenS + "  Adornos: " + ordenA;
      state.pedidos.descripcion[state.contador] = state.cliente.descripcion;
      console.log(state.pedidos.clientes[state.contador]);
      console.log(state.pedidos.ids);
      console.log(state.pedidos);

      state.contador++;

      //Reinicio de las entradas del formulario

      state.servicio.entrega = "";
      state.servicio.fecha = "";
      state.servicio.hora = "";
      state.cliente.nombre = "";
      state.cliente.telefono = "";
      state.cliente.email = "";
      state.cliente.descripcion = "";
      state.checkedSabores = [];
      state.checkedAdornos = [];

      //decremento de sabores y adornos dependiendo de las ordenes (Invenatrio)

      ordenS.forEach((s) => {
        state.sabores.forEach((p) => {
          if (s == p.sabor) {
            p.cantidad = p.cantidad - 1;
          }
        });
      });

      ordenA.forEach((a) => {
        state.adornos.forEach((p) => {
          if (a == p.adorno) {
            p.cantidad = p.cantidad - 1;
          }
        });
      });
    },

    //Agregar pedidos en el perfil del pastelero

    llamarPedidos(state) {
      const tablasIP = document.getElementById("tabla-pedidos");
      const noPedidos = state.pedidos.ids.length;
      console.log(noPedidos);
      var i;
      for (i = 0; i < noPedidos; i++) {
        console.log(state.pedidos.clientes[i]);
        const fila = document.createElement("tr");
        const columnaId = document.createElement("td");
        const columnaEntrega = document.createElement("td");
        const columnaCliente = document.createElement("td");
        const columnaOrden = document.createElement("td");
        const columnaDescripcion = document.createElement("td");
        columnaId.textContent = state.pedidos.ids[i];
        columnaEntrega.textContent = state.pedidos.entregas[i];
        columnaCliente.textContent = state.pedidos.clientes[i];
        columnaOrden.textContent = state.pedidos.ordenes[i];
        columnaDescripcion.textContent = state.pedidos.descripcion[i];

        fila.appendChild(columnaId);
        fila.appendChild(columnaEntrega);
        fila.appendChild(columnaCliente);
        fila.appendChild(columnaOrden);
        fila.appendChild(columnaDescripcion);

        tablasIP.appendChild(fila);
      }

      let containerInventario = (document.querySelector(
        ".inventario-B"
      ).style.display = "block");
      containerInventario = document.querySelector(
        ".inventario-B"
      ).style.display = "flex";
      let containerpedidos = (document.querySelector(
        ".seccion-pedidos"
      ).style.display = "block");
      containerInventario = document.querySelector(
        ".seccion-pedidos"
      ).style.display = "flex";
    },
  },

  actions: {},
  modules: {},
});
