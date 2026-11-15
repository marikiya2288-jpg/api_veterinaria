// configuracion de nuestro servidor http
import http from "node:http";
import app from "./src/app.js";


//crear servidor:
const server =  http.createServer(app);


const PORT = process.env.PORT || process.env.SERV_PORT
server.listen(PORT)

// SOLO NOS FALTAN DOS FUNCIONES
// 1. FUNCION QUE ME DICE QUE EL SERVIDOR ESTA ENCENDIDO
server.on('Escuchando', () => {
    console.log('Servidor funcionando en el puerto ${PORT}')
})




//2. FUNCION QUE ME DICE SI EL SERVIDOR HA TENIDO UN ERROR.
server.on("Error",(error) => {
    console.log(error)
})