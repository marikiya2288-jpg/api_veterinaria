// CADA CONTROLADOR VA A LLAMAR A UNA FUNCION QUE CONECTE CON LA BBDD, ESA FUNCION VA A ESTAR ALOJADA EN LOS MODELOS.
// EL CONTROLADOR TIENE COMO OBJETIVO PRINCIPAL DEVOLVER DATOS DE RESPUESTA, ES DECIR HACE EL RES.JSON()
import { selectAll, selectMascota, selectEspeciesById, selecAllBySpecie, deletePetById, insertNewPet, updatePetById} from "../models/mascotas.model.js"

const getAll = async (req, res) => {
const mascotas = await selectAll() // esta funcion estara en el modelo, contendra el select de la bbdd
res.json(mascotas)
}

const obtenerMascotaId = async (req, res) => {
const unaMascotaCompleta = await selectMascota(Number(req.params.idMascota))
res.json(unaMascotaCompleta)
}

const obtenerMascotaPorEspecie = async (req, res) => {
    const especie = await selectEspeciesById(Number(req.params.idMascota))
    res.json(especie)

}

const obtenerTodasPorEspecie = async (req, res) => {
const listaAnimalesEspecie = await selecAllBySpecie(req.params.especie)
res.json(listaAnimalesEspecie)
}

//[id:1, mensaje ' se ha borrado correctamente.]
const borrarMascota = async (req, res) => {
const respuesta = await deletePetById (Number(req.params.idMascota))
res.json(respuesta)
}

// insertear mascota
const insertMascota = async (req, res) => {
const idnuevaMascota = await insertNewPet(req.body);
// lo unico qu me va a devolver la bbdd es el id
const mascota = await selectMascota(idnuevaMascota)
res.json(mascota)
}


// editaar mascota
const editarMascota = async (req, res) => {
    // actualizar tiene req.body y req.params
const dataMascota =req.body
const idMascota = Number(req.params.idMascota)

const respuesta = await updatePetById(idMascota, dataMascota)
if (respuesta.affectedRows === 1){
    const mascota = await selectEspeciesById(idMascota)
res.json(mascota)

}else{ 
    res.json ({status: false, message: "No se ha podido actualizar la mascota"})
}

}
export {getAll, obtenerMascotaId, obtenerMascotaPorEspecie, obtenerTodasPorEspecie,
    insertMascota, borrarMascota, editarMascota}