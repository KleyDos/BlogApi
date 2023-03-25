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
//ruta: agregaarreglo recibe una palabra y la agrega al arreglo y
router.post("/agregarArreglo", function (req, res) {
  console.log(frase);
  const palab = req.body.palab;
  frase.push(palab);
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
  frase = nuevafrase
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


//Tarea: En agregar: si va agradar un apalab ya existe no agregar
//Tarea: Ruta OrderArreglo: ordenarlo y retornarlo
//Tarea: Ruta EdicarArreglo: Elemento a editar y nuevo valor
//Tarea: Ruta BorrarArreglo: que elimine el arreglo y lo deje vacio
//Tarea: Ruta ResetArrgelo: Todos los elemento del arreglo los cambie por cero (map)



server.use(router);
//iniciar web server

server.listen(3000, function () {
  console.log("El Servidor esta corriendo en puerto 3000");
});
//server.listen(puerto, funcion)
