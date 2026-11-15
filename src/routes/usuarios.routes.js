import { Router } from "express";
import { getAll, obtenerUsuario, usuarioCompleto,usuariosPorLocalidad,usuariosComunicaciones,
    usuariosPorApellido, obtenerDatosUsuarios,insertarUsuario, borrarUsuarioId,editarUsuario } from "../controllers/usuarios.controller.js";


const router = Router()

// funcion todos los usuarios. Rutas VERBO = GET
router.get('/', getAll)      //http://localhost:3000/api/usuarios
//obtener todos los usuarios que aceptan comunicaciones. VERBO = GET
router.get ('/comunicaciones', usuariosComunicaciones)  //http://localhost:3000/api/usuarios/comunicaciones
// la ruta anterior la IA me dice que la tengo que poner aqui para que express no se confunda con id usuario.

///obtener usuario por id. VERBO = GET
router.get('/:idUsuario', obtenerUsuario) //http://localhost:3000/api/usuarios/2

//obtener un usuario completo por su dni. VERBO = GET
router.get('/dni/:dni', usuarioCompleto) //http://localhost:3000/api/usuarios/dni/34567890V

//obtener todos los usuarios de una localidad. VERBO = GET //http://localhost:3000/api/usuarios/localidad/madrid
router.get ('/localidad/:localidad', usuariosPorLocalidad)

//obtener todos los usuarios cuyo apellido sea López (cambiar el apellido a otro para que haya mas de un Lopez). VERBO = GET
router.get('/apellido/:apellido', usuariosPorApellido)  // http://localhost:3000/api/usuarios/lopez

// obtener solo el nombre, dni, telefono de un usuario por id. VERBO = GET
router.get('/datos/:idusuario', obtenerDatosUsuarios)//http://localhost:3000/api/usuarios/datos/2

//insertar un usuario. VERBO = POST
router.post('/',insertarUsuario) //http://localhost:3000/api/usuarios

//borrar un usuario por id. VERBO = DELETE
router.delete('/:idUsuario', borrarUsuarioId) // http://localhost:3000/api/usuarios/2

// actualizar los datos de un usuario por id. VERBO = PUT

router.put('/:idUsuario', editarUsuario)

export default router;