import db from '../config/db.js'
export { selectAll,seleccionarPorId,seleccionarPorDni,seleccionarPorLocalidad,
    seleccionarComunicaciones,seleccionarPorApellido, seleccionarPorDatos,nuevoUsuario,deleteUsuario,actualizarPorId  }
//funcion todos los usuarios.
const selectAll = async () => {
// aqui dentro vamos hacer la consulta a bbdd => select * from mascota
const [resultado] = await db.execute('select * from dueno')
return resultado
}

///obtener usuario por id.
const seleccionarPorId = async (idDueno) =>{
    const [resultado] = await db.execute('select * from dueno where id = ?',[idDueno])
    return resultado
}

//obtener un usuario completo por su dni.
const seleccionarPorDni = async (dni) => {
    const [resultado] = await db.execute('select * from dueno where dni = ?',[dni])
    return resultado
}
//obtener todos los usuarios de una localidad.
const seleccionarPorLocalidad = async(localidad) => {
    const [resultado] = await db.execute('select * from dueno where localidad = ?',[localidad])
    return resultado [0]
}
//obtener todos los usuarios que aceptan comunicaciones

const seleccionarComunicaciones = async(comunicaciones) => {
    const [resultado] = await db.execute('select * from dueno where acepta_comunicaciones = true')
    return resultado
}

//obtener todos los usuarios cuyo apellido sea López (cambiar el apellido a otro para que haya mas de un Lopez)
const seleccionarPorApellido = async(lopez) => {
    const [resultado] = await db.execute("select * from dueno  where apellidos ='Lopez'")
    return resultado
}
// obtener solo el nombre, dni, telefono de un usuario por id.
const seleccionarPorDatos = async(Datos) => {
    const [resultado] = await db.execute('select nombre, dni, telefono from dueno where id = ?', [Datos])
    return resultado
}
//insertar un usuario. VERBO = POST
const nuevoUsuario = async ({
    nombre,
    apellidos,
    dni,
    telefono = null,
    localidad = null,
    acepta_comunicaciones = 0
}) => {
    const [resultado] = await db.execute(
        'insert into dueno (nombre, apellidos, dni, telefono, localidad, acepta_comunicaciones) values (?, ?, ?, ?, ?, ?)',
        [nombre, apellidos, dni, telefono, localidad, acepta_comunicaciones]
    )
    return resultado.insertId
}


//borrar un usuario por id. VERBO = DELETE
const deleteUsuario = async(idUsuario) => { 
    //primero hay que borrar todas las mascotas de ese dueño! al tenere foreing key(clave foranea) o se añade u o ON DELETE CASDADE en BBDD
    // o se añade una linea para borrar mascotas primero y luego el dueño.
 await db.execute('delete from mascota where id_dueno = ?', [idUsuario]) // borramos 1º mascota
 const [resultado] = await db.execute('delete from dueno where id = ?', [idUsuario]) // 21 borramos dueño.
    if(resultado.affectedRows === 1) {
        return {status: true, message: 'El usuario se ha borrado correctamente'}
    } else { 
        return {status: false, message: 'Ha ocurrido un error o el usuario no existe'}
    }
}

// actualizar los datos de un usuario por id.
const actualizarPorId = async (idUsuario, {
    nombre,
    apellidos,
    dni,
    telefono = null,
    localidad = null,
    acepta_comunicaciones = 0
}) => {
    const [resultado] = await db.execute(`update dueno set nombre = ?, apellidos = ?, dni = ?, telefono = ?, localidad = ?,
         acepta_comunicaciones = ? where id = ?`,
         [
            nombre,
            apellidos,
            dni,
            telefono,
            localidad,
            acepta_comunicaciones,
            idUsuario
         ] )
        return resultado
    }