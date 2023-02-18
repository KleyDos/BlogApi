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
  console.log("Estoy en la ruta root(/)");
  res.send({Mensaje: "Hola mundo"});
});

server.use(router)

//iniciar web server

server.listen(3000,function(){
  console.log("El Servidor esta corriendo en puerto 3000");
})
//server.listen(puerto, funcion)



//tarea ruta similar get. ruta2 y que devuelva 2
// router.get("/", function (req, res) {
//   console.log("Estoy en la ruta root(/)");
//   res.send({ Mensaje: "Hola mundo" });
// });


