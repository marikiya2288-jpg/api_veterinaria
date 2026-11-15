import db from '../config/db.js';

// consultas SQL.
	//1 Obtener todos los veterinarios:
const selectAll = async () => {
    const [resultado] = await db.execute('select * from veterinario');
    return resultado
}

 //2 Filtrar solo los que están activos (activo = 1): 
const selectActivos = async ( )=>  {
    const [resultado] = await db.execute('select * from veterinario where activo = 1');
    return resultado
}

// 3 Buscar por apellido: GET 
const selectPorApellido = async (apellido) => {
    const [resultado] = await db.execute('select * from veterinario where apellidos = ?',[apellido]);
    return resultado
}
//4 Buscar por DNI: GET /dni/:dni
const selectPorDni = async (dni) => {
    const [resultado] = await db.execute('select * from veterinario where dni = ?',[dni])
    return resultado
}

//5 Filtrar por especialidad:
const selectPorEspecialidad = async (especialidad) => {
    const [resultado] = await db.execute('select * from veterinario where especialidad = ?',[especialidad])
    return resultado
}

//6 Obtener un veterinario por su ID:
const selectVeterinariosPorId = async(idVeterinario) => {
    const [resultado] = await db.execute('select * from veterinario where id_veterinario = ?',[idVeterinario])
    return resultado
}

//7 Crear un nuevo veterinario:
const insertNuevoVeterinario = async({

    nombre,
    apellidos,
    dni,
    num_colegiado,
    especialidad,
    telefono ,
    activo = 1
}) => {
    const [resultado] = await db.execute(
    `insert into veterinario
        (nombre, apellidos, dni, num_colegiado, especialidad, telefono, activo) values (?, ?, ?, ?, ?, ?, ?)`,
        [
            nombre,
            apellidos,
            dni,
            num_colegiado,
            especialidad,
            telefono ,
            activo,
        ]
    )
    return resultado.insertId;
  }

//8 Actualizar un veterinario por ID:
const actualizarVeterinario = async (idVeterinario, {

             nombre,
            apellidos,
            dni,
            num_colegiado,
            especialidad,
            telefono ,
            activo = 1

}) => {
    const [restultado] = await db.execute(
        `update veterinario set nombre = ?, apellidos = ?, dni = ?, num_colegiado = ?, especialidad = ?,
            telefono = ?, activo = ? where id_veterinario = ?`,
        [
            nombre,
            apellidos,
            dni,
            num_colegiado,
            especialidad,
            telefono ,
            activo,
            idVeterinario
        ] 
    )
    return restultado
}
          

// 9Eliminar un veterinario por ID:
const deleteVeterinarioPorId = async (idVeterinario) => {
    const [resultado] = await db.execute('delete from veterinario where id_veterinaro = ?',[idVeterinario])
    return resultado
}

export {selectAll,selectActivos,selectPorApellido, selectPorDni,selectPorEspecialidad,selectVeterinariosPorId,
    insertNuevoVeterinario,actualizarVeterinario,deleteVeterinarioPorId} 