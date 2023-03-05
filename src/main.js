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
  const palab1 = req.body.palab1;
  console.log(palab1);
  const palab2 = req.body.palab2;
  const palab3 = req.body.palab3;
  const frase = [palab1, palab2, palab3];
  console.log(frase);

  res.send({ resultado: frase });
});

router.post("/concatena", function (req, res) {
  console.log("concatena");
  const nombre = req.body.nombre;
  const primerApellido = req.body.primerApellido;
  const segundoApellido = req.body.segundoApellido;
  const nombreCompleto = nombre + " " + primerApellido + " " + segundoApellido;
  console.log(nombreCompleto);
  res.send({ mensaje: nombreCompleto });
});// debe retormar error si falta alguno de los 3

//hacerlos con las 3 operaciones restantes.

//ruta nueva "/arreglo" que recibe tres palabras y construlle arregrlo con las tres palabras y retorma el arreglo
//ruta "/concatena" que recibe nombre, primer apellido y segundo apellido y retorna un objeto con nombre completo

server.use(router);
//iniciar web server

server.listen(3000, function () {
  console.log("El Servidor esta corriendo en puerto 3000");
});
//server.listen(puerto, funcion)

//tarea ruta similar get. ruta2 y que devuelva 2
// router.get("/", function (req, res) {
//   console.log("Estoy en la ruta root(/)");
//   res.send({ Mensaje: "Hola mundo" });
// // });
// const routerDos = express.Router();

// router.get("/", function (req, res) {
//   console.log("Estoy en la rutaDos(/)");
//   res.send({ Mensaje: "Dos" });
// });


//tarea: ruta:Buscar arreglo: buscar palabra del arreglo ya exste e indicar si existe o no
//ruta: agregaarreglo recibe una palabra y la agrega al arreglo y
// ruta elimina otra para eleminar


