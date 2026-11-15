// fichero solo de rutas!
import {Router} from "express"; // solo necesito las rutas
import mascotasRoutes from "./mascotas.routes.js"
import usuariosRoutes from "./usuarios.routes.js"
import veterinariosRoutes from "./veterinarios.routes.js"

// como es un fichero de rutas voy  a crear un constante que almacene rutas.
const router = Router() // esta constante solo tinene las rutas dentro.
// crear todas las rutas de nuestra api, tiene que haber tantas rutas como tablas en la base de datos. En este caso:
//usuarios y mascotas

router.use('/mascotas', mascotasRoutes )
router.use('/usuarios', usuariosRoutes)
router.use('/veterinarios', veterinariosRoutes)
export default router 