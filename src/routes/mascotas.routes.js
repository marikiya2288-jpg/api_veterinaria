
// si el fichero es de rutar importarmos router
import { Router } from "express"
import { getAll, obtenerMascotaId, obtenerTodasPorEspecie, obtenerMascotaPorEspecie,
    insertMascota,editarMascota,borrarMascota, } from "../controllers/mascotas.controller.js"
const router = Router()

// metodo CRUD: CREAR, BUSCAR, BORRAR Y ACTUALIZAR.
 // obtener la lista de todas las mascotas: VERBO GET
  router.get('/', getAll) // getAll aqui solo se llama la funcion esta en controllers.

 //obtener una mascota : VERBO GET
router.get('/:idMascota', obtenerMascotaId)

 //obtener la especie de una mascota: VERBO GET
router.get('/:idMascota/especie/', obtenerMascotaPorEspecie)

 //obtener todas las mascotas por especie: VERBO GET
router.get('/especie/all/:especie', obtenerTodasPorEspecie)
 // borrar una mascota: VERBO DELETE
router.delete('/:idMascota', borrarMascota) //podemos utilizar la misma ruta en diferente verbo.
 


// dar de alta una mascota : VER POST INSERTAR
// estas dos peticones pueden o no recibir parametros de ruta, req.body.
router.post('/', insertMascota) // podemos utilizar la misma ruta en diferente verbo y diferente funcion.



 //actualizar la mascota: VERBO PUT: es cuanco actualizas toda la mascota. /PATCH: solo una parte.
 router.put('/:idMascota', editarMascota) //podemos utilizar la misma ruta en diferente verbo.

 export default router;