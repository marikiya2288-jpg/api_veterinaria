import db from '../config/db.js'


const selectAll = async () => {
// aqui dentro vamos hacer la consulta a bbdd => select * from mascota
const [resultado] = await db.execute('select * from mascota')
return resultado
}

//obtener una mascota
const selectMascota = async (idMascota) => {
    const [result] = await db.execute("select * from mascota where id = ?",[idMascota])
    return result[0]
}


// obtener la especie de una mascota; obtenerMascotaPorEspecie.
const selectEspeciesById = async (idMascota)=> {
    const [result] = await db.execute("select especie from mascota where id = ?", [idMascota])
    return result [0]

}

//obtener todas mascotas; obtenerTodasPorEspecie.

const selecAllBySpecie = async (especie)  =>{
    const [result] = await db.execute("select * from mascota where especie = ?", [especie])
    return result
}

//borrar: borrarMascota.

const deletePetById = async (idMascota) => {
  const [result] = await db.execute('DELETE FROM mascota WHERE id = ?', [idMascota]);
  if (result.affectedRows === 1) {
    return { status: true, message: 'La mascota se ha borrado correctamente' };
  } else {
    return { status: false, message: 'Ha ocurrido un error, inténtalo de nuevo' };
  }
};

//alta mascota: insertMascota.
const insertNewPet = async ({
    id_dueno,
    nombre,
    especie,
    raza = null,
    sexo = null,
    fecha_nacimiento = null,
    peso_kg = null,
    microchip = null,
    color = null,
    esterilizado = 0,
    fecha_alta = null,
    fecha_fallecimiento = null,
    observaciones = null
}) => {
    const [result] = await db.execute(
        `insert into mascota
            (id_dueno, nombre, especie, raza, sexo, fecha_nacimiento, peso_kg, microchip, color, esterilizado, fecha_alta, fecha_fallecimiento, observaciones)
         values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            id_dueno,
            nombre,
            especie,
            raza,
            sexo,
            fecha_nacimiento,
            peso_kg,
            microchip,
            color,
            esterilizado,
            fecha_alta,
            fecha_fallecimiento,
            observaciones
        ]
    )
    return result.insertId
}
//actualizar: editarMascota
const updatePetById = async (idMascota, {
    id_dueno,
    nombre,
    especie,
    raza = null,
    sexo = null,
    fecha_nacimiento = null,
    peso_kg = null,
    microchip = null,
    color = null,
    esterilizado = 0,
    fecha_alta = null,
    fecha_fallecimiento = null,
    observaciones = null
}) => {

    const [result] = await db.execute(`update mascota
     set id_dueno = ?, nombre = ?, especie = ?, raza = ?, sexo = ?,
         fecha_nacimiento = ?, peso_kg = ?, microchip = ?, color = ?,
         esterilizado = ?, fecha_alta = ?, fecha_fallecimiento = ?, observaciones = ?
     where id = ?`,
        [
            id_dueno,
            nombre,
            especie,
            raza,
            sexo,
            fecha_nacimiento,
            peso_kg,
            microchip,
            color,
            esterilizado,
            fecha_alta,
            fecha_fallecimiento,
            observaciones,
            idMascota   // el id va el último, por el where
        ])
    return result
    }


export { selectAll,selectMascota, selectEspeciesById, selecAllBySpecie, deletePetById, insertNewPet,updatePetById}