// AQUI SOLO CONFIGURAREMOS EXPRESS.
import express from "express"
// vamos a instalar las cors - es una politica de seguridad que imponen los navegadores, dos
//aplicaciones en local se ocnecten.Cors hace esa conexion legitima
import cors from "cors"; 
import apiRoutes from "./routes/api.routes.js" // si apiRoutes lo ponemos entre llaves tiene que ser el nombre del fichero
                                            // rutas es una variable de express  y puede dar problemas pr eso se reenombra y va sin llaves.


const app = express()
app.use(express.json())
app.use(cors())

// configurar el punto de entreda de las rutas.
app.use("/api", apiRoutes) // se crea una ruta que te lleva al archivo necesario de ruta.




//configurar que pasa cuando una ruta no existe tengo que respondes con un status 404 y mensaje.
app.use((req, res, next)=>{
    res.status(404).json({
        message: 'no funciona'
    })
})



// configurar que pasa cuando da error quiero que salga por la api aparte de que salga en consola.
app.use((err, req, res, next) => {
    //error por consola
    console.log(err.stack);
    res.status(500).json({message: err.message})
})





export default app; // esto siempre alfinal.