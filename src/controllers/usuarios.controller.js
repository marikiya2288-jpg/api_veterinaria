import { selectAll, seleccionarPorId,seleccionarPorDni,seleccionarPorLocalidad,seleccionarComunicaciones,
    seleccionarPorApellido,seleccionarPorDatos,nuevoUsuario,deleteUsuario, actualizarPorId } from "../models/usuarios.model.js"

import router from "../routes/usuarios.routes.js"



// todos los usuarios.
const getAll = async (req, res) => {
const usuarios = await selectAll() // esta funcion estara en el modelo, contendra el select de la bbdd
res.json(usuarios)
}

/////obtener usuario por id.
const obtenerUsuario = async (req, res) => {
    const usuario = await seleccionarPorId(Number(req.params.idUsuario))
res.json(usuario)
}


//obtener un usuario completo por su dni. VERBO = GET
const usuarioCompleto = async (req, res) => {
    const usuario = await seleccionarPorDni(req.params.dni)
    res.json (usuario)
}

//obtener todos los usuarios de una localidad.
const usuariosPorLocalidad = async (req, res) => {
    const usuario = await seleccionarPorLocalidad(req.params.localidad)
    res.json(usuario)
}
//obtener todos los usuarios que aceptan comunicaciones
const usuariosComunicaciones = async (req, res) => {
    const usuario = await seleccionarComunicaciones(req.params.comunicaciones)
    res.json(usuario)
}
//obtener todos los usuarios cuyo apellido sea López (cambiar el apellido a otro para que haya mas de un Lopez)
const usuariosPorApellido = async (req,res) => {
    const usuario = await seleccionarPorApellido(req.params.apellido)
    res.json(usuario)
}
// obtener solo el nombre, dni, telefono de un usuario por id.
const obtenerDatosUsuarios = async (req, res) => {
    const usuario = await seleccionarPorDatos(req.params.idusuario)
    res.json(usuario)
}
//insertar un usuario.
const insertarUsuario = async (req, res) => {
    const nuevoId = await nuevoUsuario(req.body) // guarda el nuevo dueño y recibe id que BBDD asigna automaticamente.

    const usuario = await seleccionarPorId(nuevoId)
    res.json(usuario)
    // esto busca al nuevo dueño por id y devuelve la respuesta.
}

//borrar un usuario por id. VERBO = DELETE
const borrarUsuarioId = async (req, res) => {
    const usuario = await deleteUsuario(Number(req.params.idUsuario))
    res.json(usuario)
}

// actualizar los datos de un usuario por id.
const editarUsuario = async (req, res) => {
    const dataUsuario = req.body
    const idUsuario = Number(req.params.idUsuario)

    const resultado = await actualizarPorId(idUsuario, dataUsuario)
    if (resultado.affectedRows === 1) {
        const usuario = await seleccionarPorId(idUsuario)
        res.json(usuario)
    } else {
        res.json({status: false, message: "No se ha podido actualizar el usuario"})
    }
    
}


export { getAll, obtenerUsuario, usuarioCompleto,usuariosPorLocalidad,usuariosComunicaciones,
    usuariosPorApellido, obtenerDatosUsuarios,insertarUsuario,borrarUsuarioId,editarUsuario}