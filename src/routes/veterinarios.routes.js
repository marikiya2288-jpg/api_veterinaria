import { Router } from "express";
import {getAllVeterinarios,getVeterinariosActivos,getVeterinariosByApellido,getVeterinariosByDni,getByEspecialidad,getVeterinariosById,
    createVeterinario,updateVeterinario,deleteVeterinario} from "../controllers/veterinarios.controller.js"

const router = Router();

//1Obtener todos los veterinarios: GET 
 router.get('/', getAllVeterinarios); //http://localhost:3000/api/veterinarios
 //2Filtrar solo los que están activos (activo = 1): 
router.get('/activo', getVeterinariosActivos) //http://localhost:3000/api/veterinarios/activo

// 3Buscar por apellido: GET 
 router.get('/apellido/:apellido', getVeterinariosByApellido)//http://localhost:3000/api/veterinarios/apellido

//4Buscar por DNI: GET /dni/:dni
 router.get('/dni/:dni', getVeterinariosByDni)//http://localhost:3000/api/veterinarios/dni/5435434

//5Filtrar por especialidad: GET 
 router.get('/especialidad/:especialidad',getByEspecialidad)//http://localhost:3000/api/veterinarios/especialidad

//6 Obtener un veterinario por su ID: GET /: 
router.get('/:idVeterinario', getVeterinariosById) //http://localhost:3000/api/veterinarios/4
  
//7 Crear un nuevo veterinario: POST /
router.post('/', createVeterinario) //http://localhost:3000/api/veterinarios/
  

//8Actualizar un veterinario por ID: PUT /:idVeterinario   
router.put('/:idVeterinario', updateVeterinario) //http://localhost:3000/api/veterinarios/4
  

//9Eliminar un veterinario por ID: DELETE /:idVeterinario  http://localhost:3000/api/veterinarios/4
  
 router.delete('/:idVeterinario', deleteVeterinario) //http://localhost:3000/api/veterinarios/4
  

export default router;