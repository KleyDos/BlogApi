import express from "express";
import helmet from "helmet";
import cors from "cors";

//crear el web server
const server = express();

//config web server
server.use(express.json());
server.use(cors());
server.use(helmet());

// Rutas
const router = express.Router();
let frase = [];
let listaPersonas = [];

router.get("/", function (req, res) {
  console.log("Estoy en la ruta root(/) ");
  res.send({ mensaje: "Hola mundo" });
});

router.get("/dos", function (req, res) {
  console.log("Estoy en la ruta dos(/)");
  res.send({ mensaje: "Hola de nuevo" });
});

router.get("/dos/tres", function (req, res) {
  console.log("Estoy en la ruta dos(/)");
  res.send({ mensaje: "Hola recargado" });
});

router.get("/tres", function (req, res) {
  console.log("Estoy en la ruta dos(/)");

  res.send({ mensaje: "Hola recargadodos" });
});

router.get("/suma", function (req, res) {
  var uno = 2;
  var dos = 5;
  var resultado = uno + dos;

  console.log(resultado);
  res.send({ mensaje: resultado });
});

router.get("/resta", function (req, res) {
  var uno = 9;
  var dos = 7;
  var resultado = uno - dos;

  console.log(resultado);
  res.send({ mensaje: resultado });
});

router.get("/multiplicacion", function (req, res) {
  var uno = 11;
  var dos = 3;
  var resultado = uno * dos;

  console.log(resultado);
  res.send({ mensaje: resultado });
});
router.get("/division", function (req, res) {
  var uno = 80;
  var dos = 8;
  var resultado = uno / dos;

  console.log(resultado);
  res.send({ mensaje: resultado });
});
router.post("/operacionespost", function (req, res) {
  console.log("operacionespost");
  const num1 = req.body.num1;
  console.log(num1);
  const num2 = req.body.num2;
  console.log(num2);
  // const resta = num1 - num2;
  const operacion = req.body.operacion;
  console.log(operacion);
  let oper = false; // 0;
  if (operacion === "multiplicacion") {
    oper = num1 * num2;
    //return res.send({ resultado: oper });
  } else if (operacion === "division") {
    oper = num1 / num2;
    //return res.send({ resultado: oper });
  } else if (operacion === "resta") {
    oper = num1 - num2;
    //return res.send({ resultado: oper });
  } else if (operacion === "suma") {
    oper = num1 + num2;
    //return res.send({ resultado: oper });
  }
  // else return res.status(400).send({ resultado: "error de operacion" });

  if (!oper) {
    // if (oper === false) o if (oper! == true)
    return res.status(400).send({ resultado: "error de operacion" });
  }

  return res.send({ resultado: oper });
});

router.post("/arreglo", function (req, res) {
  // const palab1 = req.body.palab1;
  // const palab2 = req.body.palab2;
  // const palab3 = req.body.palab3;
  // const frase = [palab1, palab2, palab3];
  console.log(frase);

  res.send({ resultado: frase });
});
//tarea: ruta:Buscar arreglo: buscar palabra del arreglo ya existe e indicar si existe o no
router.post("/buscararreglo", function (req, res) {
  // const palab1 = req.body.palab1;
  // const palab2 = req.body.palab2;
  // const palab3 = req.body.palab3;
  const palabBuscada = req.body.palabBuscada;

  // const {, palab2, palab3, palabBuscada } = req.body;
  // const frase = [tijeras, palab2, palab3];
  // console.log(frase);
  const palabEncontrada = frase.find((item) => {
    console.log(item);
    if (item === palabBuscada) return item;
  });
  console.log(palabEncontrada);
  if (palabEncontrada === palabBuscada) {
    return res.send({ resultado: "Palabra SI existe" });
  }
  return res.send({ resultado: "Palabra NO existe" });
});
//ruta: agregarArreglo recibe una palabra y la agrega al arreglo
//En agregar: si va agradar una palabra ya existe no agregar
router.post("/agregarArreglo", function (req, res) {
  const palab = req.body.palab;
  // frase.push(req.body.palab);
  if (frase.indexOf(palab) === -1) {
    frase.push(palab);
  } else {
    console.log("palabra ya");
    return res
      .status(400)
      .send({ resultado: "la palabra" + palab + "ya existe" });
  }

  console.log(frase);
  res.send({ resultado: frase });
});

// ruta elimina otra para eleminar
router.post("/eliminaArreglo", function (req, res) {
  // const palab1 = req.body.palab1;
  // const palab2 = req.body.palab2;
  // const palab3 = req.body.palab3;
  // const palab4 = req.body.palab4;
  // const frase = [palab1, palab2, palab3, palab4];
  // console.log(frase);
  const palab5 = req.body.palab5;
  const nuevafrase = frase.filter((item) => item !== palab5);
  frase = nuevafrase;
  console.log(nuevafrase);
  res.send({ resultado: nuevafrase });
});

router.post("/concatena", function (req, res) {
  const nombre = req.body.nombre;
  const primerApellido = req.body.primerApellido;
  const segundoApellido = req.body.segundoApellido;
  const nombreCompleto = nombre + " " + primerApellido + " " + segundoApellido;
  console.log(nombreCompleto);
  res.send({ mensaje: nombreCompleto });
});

//Tarea: Ruta OrderArreglo: ordenarlo y retornarlo
router.post("/ordenarArreglo", function (req, res) {
  frase.sort();
  console.log(frase);

  res.send({ resultado: frase });
});
//Tarea: Ruta EditarArreglo: Elemento a editar y nuevo valor
router.post("/editarArreglo", function (req, res) {
  const nuevoValor = req.body.nuevoValor;
  const elementoEditar = frase.indexOf(req.body.elementoEditar);

  if (elementoEditar !== -1) {
    frase[elementoEditar] = nuevoValor;
  } else {
    return res.status(400).send({
      resultado: "la palabra " + req.body.elementoEditar + " no existe",
    });
  }
  console.log(frase);

  res.send({ resultado: frase });
});

//caso ejemplo a utilizar con propiedad de elemtos
router.post("/editarArreglo/2", function (req, res) {
  const nuevoValor = req.body.nuevoValor;
  const elementoEditar = req.body.elementoEditar;
  let itemEncontrado = frase.find((item) => {
    if (elementoEditar === item) return item;
  });
  console.log("ItemEmcontrado: ", itemEncontrado);
  if (itemEncontrado) {
    itemEncontrado = nuevoValor;
    console.log("ItemEmcontrado: ", itemEncontrado);
    console.log(frase);
  } else {
    return res.status(400).send({
      resultado: "la palabra " + req.body.elementoEditar + " no existe",
    });
  }
  console.log(frase);

  res.send({ resultado: frase });
});

//Ruta BorrarArreglo: que elimine el arreglo y lo deje vacio
router.post("/borrarArreglo", function (req, res) {
  frase = [];

  console.log(frase);
  res.send({ resultado: frase });
});

//Ruta ResetArrgelo: Todos los elemento del arreglo los cambie por cero (map)
router.post("/resetArreglo", function (req, res) {
  frase = frase.map((x) => 0);
  console.log(frase);
  res.send({ resultado: frase });
});

//ruta nueva objeto/y todo dentro***************************************************
//ruta objeto/Agregar: desde postman arreglo Persona y cada persona con propiedades nombre, edad, id (se agrega al arrego )
router.post("/objeto/agregarObjeto", function (req, res) {
  const persona = req.body.persona;
  const personaAgrerar = listaPersonas.findIndex(
    (listaPersonas) => listaPersonas.id === persona.id
  );
  if (personaAgrerar === -1) {
    listaPersonas.push(persona);
  } else {
    console.log("persona ya existe");
    return res
      .status(400)
      .send({ resultado: "La identificacion " + persona.id + " ya existe" });
  }
  console.log(listaPersonas);
  res.send({ resultado: listaPersonas });
});

// /Eliminar, a eliminar por ID
router.post("/objeto/eliminarObjeto", function (req, res) {
  const id = req.body.id;

  const nuevalista = listaPersonas.filter(
    (listaPersonas) => listaPersonas.id !== id
  );

  listaPersonas = nuevalista;
  console.log(nuevalista);
  res.send({ resultado: nuevalista });
});
// /Editar a editar por ID y edita cualquiera*********************************NO
router.post("/objeto/editarArreglo", function (req, res) {
  const idEditar = req.body.idEditar;
  // const nuevoValorPersona = { id: idEditar, persona: nuevoValorPersona };
  // console.log("nuevoValorPersona", nuevoValorPersona);
  let personaEncontrada = listaPersonas.find(
    (persona) => persona.id === idEditar
  );
  // personaEncontrada.nombre = req.body.nuevaPersona.nombre

  personaEncontrada = req.body.nuevaPersona;

  // personaEncontrada = {
  //   nombre: req.body.nuevaPersona.nombre,
  // };
  console.log("perdonaEncontrada", personaEncontrada);
  console.log(listaPersonas);

  res.send({ resultado: personaEncontrada });
});

// //Buscar a editar por ID y nombre***************
router.post("/objeto/buscarObjeto", function (req, res) {
  const idBuscado = req.body.idBuscado;
  console.log("idBuscado", idBuscado);
  const idEncontrado = listaPersonas.find(
    (persona) => persona.id === idBuscado
  );
  console.log("idEncontrado", idEncontrado);
  if (!idEncontrado) {
    return res.send({ resultado: "id NO existe" });
  }

  if (idEncontrado.id === idBuscado) {
    return res.send({ resultado: "id SI existe" });
  }
});

// //***ordenar a editar por ID y nombre
router.post("/objeto/ordenarObjeto", function (req, res) {
  listaPersonas.sort((x, y) => x.nombre.localeCompare(y.nombre));

  console.log("Esta es la", listaPersonas);

  res.send({ resultado: listaPersonas });
});

// investigar funcion reduce de array

// /////elimiar por id REPETIDO linea 258*******************
router.post("/objeto/eliminaObjeto", function (req, res) {
  const idEliminar = req.body.idEliminar;
  console.log("id a eliminar es", idEliminar);
  const listaFiltrada = listaPersonas.filter(
    (listaPersonas) => listaPersonas.id !== idEliminar
  );

  listaPersonas = listaFiltrada;

  console.log("La Lista Filtrada es", listaFiltrada);

  res.send({ resultado: listaFiltrada });
});

//mayores de edad, que devuelva una sublista de solamente los mayores de edad (filter)
router.post("/objeto/subLista", function (req, res) {
  const mayoresEdad = listaPersonas.filter(
    (listaPersonas) => listaPersonas.edad >= 18
  );

  listaPersonas = mayoresEdad;

  console.log("La sub lista de mayores es", mayoresEdad);

  res.send({ resultado: mayoresEdad });
});

server.use(router);
//iniciar web server

server.listen(3000, function () {
  console.log("El Servidor esta corriendo en puerto 3000");
});
//server.listen(puerto, funcion)

// actualizar version node
