import {selectAll,selectActivos,selectPorApellido, selectPorDni,selectPorEspecialidad,selectVeterinariosPorId,
    insertNuevoVeterinario,actualizarVeterinario,deleteVeterinarioPorId} from "../models/veterinarios.model.js";

//1Obtener todos los veterinarios:
const getAllVeterinarios = async (req, res) => {
    const veterinarios = await selectAll()
    res.json(veterinarios)
}

 //2Filtrar solo los que están activos 
const getVeterinariosActivos  = async (req, res) => {
    const veterinarios = await selectActivos()
    res.json(veterinarios)
}
//3Buscar por apellido
const getVeterinariosByApellido = async (req, res) => {
    const veterinarios = await selectPorApellido(req.params.apellido)
    res.json(veterinarios)
} 
//4Buscar por DNI:
const getVeterinariosByDni = async (req, res) => {
    const veterinarios = await selectPorDni(req.params.dni)
    res.json(veterinarios)
}

//5Filtrar por especialidad:
const getByEspecialidad = async (req, res) => {
     const veterinarios = await selectPorEspecialidad(req.params.especialidad)
     res.json(veterinarios)
    }
 //6 Obtener un veterinario por su ID
const getVeterinariosById = async (req, res) => {
      const veterinarios = await selectVeterinariosPorId(req.params.idVeterinario)
     res.json(veterinarios)
    }
//7 Crear un nuevo veterinario: 
const  createVeterinario = async (req, res) => {
    const nuevoVeterinario = await insertNuevoVeterinario(req.body);
    const veterinario = await selectVeterinariosPorId(nuevoVeterinario)
    res.json(veterinario)
 }

// 8Actualizar un veterinario por ID:
 const updateVeterinario = async (req,res) => {
    const datosVeterinario = req.body
    const idVeterinario = (Number(req.params.idVeterinario))

const respuesta = await actualizarVeterinario(idVeterinario,datosVeterinario)
   if (respuesta.affectedRows === 1){
      const veterinario = await selectVeterinariosPorId(idVeterinario)
      res.json(veterinario)
   } else {
      res.json ({status: false, message: "No se ha podido actualizar veterinario"})
}

 }

 //9 Eliminar un veterinario por ID:
 const deleteVeterinario = async (req, res) => {
    const respuesta = await deleteVeterinarioPorId(Number(req.params.idVeterinario))
    res.json (respuesta)
 }

export{getAllVeterinarios,getVeterinariosActivos,getVeterinariosByApellido,getVeterinariosByDni,getByEspecialidad,getVeterinariosById,
    createVeterinario,updateVeterinario,deleteVeterinario}