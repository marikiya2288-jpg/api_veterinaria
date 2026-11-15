# 🐾 API REST Veterinaria — Gestión Integral de Clínica

Proyecto backend desarrollado con **Node.js**, **Express** y **MySQL** (`mysql2/promise`) siguiendo la arquitectura por capas **Rutas ➔ Controlador ➔ Modelo** con módulos ES (`import` / `export`).

---

## ⚙️ Instalación y Arranque

1. **Instalar dependencias:**
   ```bash
   npm install
   ```
2. **Configurar variables de entorno (`.env`):**
   ```env
   PORT=3000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=tu_contraseña
   DB_NAME=veterinaria
   ```
3. **Arrancar el servidor en modo desarrollo:**
   ```bash
   npm run dev
   ```

---

## 📁 Estructura del Proyecto

```text
2_api_veterinaria/
├── index.js                         # Arranque del servidor HTTP en PORT
├── package.json
├── .env / .env.example              # Variables de entorno (DB_*, PORT)
├── requests.http                    # Pruebas de endpoints (Fetch Client)
├── README.md
└── src/
    ├── app.js                       # Express: json, cors, enrutado /api, 404 y errores
    ├── config/
    │   ├── db.js                    # Pool de conexión mysql2
    │   └── veterinaria.sql          # Esquema SQL y datos iniciales
    ├── routes/
    │   ├── api.routes.js            # Router principal (/api)
    │   ├── mascotas.routes.js       # Endpoints de /api/mascotas
    │   ├── usuarios.routes.js       # Endpoints de /api/usuarios (tabla dueno)
    │   └── veterinarios.routes.js   # Endpoints de /api/veterinarios
    ├── controllers/
    │   ├── mascotas.controller.js   # Controladores de mascotas
    │   ├── usuarios.controller.js   # Controladores de usuarios
    │   └── veterinarios.controller.js # Controladores de veterinarios
    └── models/
        ├── mascotas.model.js        # Consultas SQL sobre tabla mascota
        ├── usuarios.model.js        # Consultas SQL sobre tabla dueno
        └── veterinarios.model.js    # Consultas SQL sobre tabla veterinario
```

---

## 🏗️ Arquitectura y Flujo de Datos

```text
Cliente ➔ index.js ➔ app.js ➔ routes ➔ controllers ➔ models ➔ config/db.js ➔ MySQL
```

| Capa | Responsabilidad |
| :--- | :--- |
| **`routes`** | Define el verbo HTTP (`GET`, `POST`, `PUT`, `DELETE`) y la URL del endpoint, delegando en su controlador. |
| **`controllers`** | Recibe `(req, res)`, extrae parámetros de `req.params` o datos de `req.body`, llama al modelo con `await` y responde con `res.json()`. |
| **`models`** | Ejecuta consultas SQL preparadas mediante `db.execute(...)` y devuelve los registros limpios. |

---

## 🗄️ Base de Datos `veterinaria` y Relación entre Tablas

La base de datos está compuesta por tres tablas principales (**`dueno`**, **`mascota`** y **`veterinario`**):

* **`/api/usuarios` ➔ Tabla `dueno`:** Propietarios de las mascotas (`id`, `dni`, `nombre`, `apellidos`, `fecha_nacimiento`, `telefono`, `email`, `direccion`, `localidad`, `codigo_postal`, `acepta_comunicaciones`, `fecha_alta`).
* **`/api/mascotas` ➔ Tabla `mascota`:** Animales registrados (`id`, `id_dueno`, `nombre`, `especie`, `raza`, `sexo`, `fecha_nacimiento`, `peso_kg`, `microchip`, `color`, `esterilizado`, `fecha_alta`, `fecha_fallecimiento`, `observaciones`).
* **`/api/veterinarios` ➔ Tabla `veterinario`:** Profesionales médicos de la clínica (`id_veterinario`, `nombre`, `apellidos`, `dni`, `num_colegiado`, `especialidad`, `telefono`, `activo`).

### Relación entre Tablas (`FOREIGN KEY`)
* **Relación `1:N` (Uno a Muchos) entre `dueno` y `mascota`:** Un dueño (`dueno.id`) puede tener varias mascotas, mientras que cada mascota pertenece a un único dueño mediante la clave foránea **`mascota.id_dueno`** (`FOREIGN KEY (id_dueno) REFERENCES dueno(id)`).
* **Gestión de borrado en cascada por código (`DELETE`):** Para evitar el bloqueo por clave foránea al eliminar un dueño con mascotas, `deleteUsuario` ejecuta primero `DELETE FROM mascota WHERE id_dueno = ?` antes de eliminar el registro en `dueno`.
* **Tabla `veterinario`:** Entidad independiente gestionada desde su propio módulo (`/api/veterinarios`).

---

## 📍 Endpoints y Funciones Implementadas

### 1. Módulo Usuarios (`/api/usuarios` ➔ Tabla `dueno`)

| Verbo | Ruta | Controlador (`usuarios.controller.js`) | Modelo (`usuarios.model.js`) |
| :---: | :--- | :--- | :--- |
| `GET` | `/api/usuarios` | `getAll` | `selectAll` |
| `GET` | `/api/usuarios/comunicaciones` | `usuariosComunicaciones` | `seleccionarComunicaciones` |
| `GET` | `/api/usuarios/dni/:dni` | `usuarioCompleto` | `seleccionarPorDni` |
| `GET` | `/api/usuarios/localidad/:localidad` | `usuariosPorLocalidad` | `seleccionarPorLocalidad` |
| `GET` | `/api/usuarios/apellido/:apellido` | `usuariosPorApellido` | `seleccionarPorApellido` |
| `GET` | `/api/usuarios/datos/:idusuario` | `obtenerDatosUsuarios` | `seleccionarPorDatos` |
| `GET` | `/api/usuarios/:idUsuario` | `obtenerUsuario` | `seleccionarPorId` |
| `POST` | `/api/usuarios` | `insertarUsuario` | `nuevoUsuario` |
| `PUT` | `/api/usuarios/:idUsuario` | `editarUsuario` | `actualizarPorId` |
| `DELETE` | `/api/usuarios/:idUsuario` | `borrarUsuarioId` | `deleteUsuario` |

---

### 2. Módulo Mascotas (`/api/mascotas` ➔ Tabla `mascota`)

| Verbo | Ruta | Controlador (`mascotas.controller.js`) | Modelo (`mascotas.model.js`) |
| :---: | :--- | :--- | :--- |
| `GET` | `/api/mascotas` | `getAll` | `selectAll` |
| `GET` | `/api/mascotas/especie/all/:especie` | `obtenerTodasPorEspecie` | `selecAllBySpecie` |
| `GET` | `/api/mascotas/:idMascota/especie` | `obtenerMascotaPorEspecie` | `selectEspeciesById` |
| `GET` | `/api/mascotas/:idMascota` | `obtenerMascotaId` | `selectMascota` |
| `POST` | `/api/mascotas` | `insertMascota` | `insertNewPet` |
| `PUT` | `/api/mascotas/:idMascota` | `editarMascota` | `updatePetById` |
| `DELETE` | `/api/mascotas/:idMascota` | `borrarMascota` | `deletePetById` |

---

### 3. Módulo Veterinarios (`/api/veterinarios` ➔ Tabla `veterinario`)

| Verbo | Ruta | Controlador (`veterinarios.controller.js`) | Modelo (`veterinarios.model.js`) |
| :---: | :--- | :--- | :--- |
| `GET` | `/api/veterinarios` | `getAllVeterinarios` | `selectAll` |
| `GET` | `/api/veterinarios/activo` | `getVeterinariosActivos` | `selectActivos` |
| `GET` | `/api/veterinarios/apellido/:apellido` | `getVeterinariosByApellido` | `selectPorApellido` |
| `GET` | `/api/veterinarios/dni/:dni` | `getVeterinariosByDni` | `selectPorDni` |
| `GET` | `/api/veterinarios/especialidad/:especialidad` | `getByEspecialidad` | `selectPorEspecialidad` |
| `GET` | `/api/veterinarios/:idVeterinario` | `getVeterinariosById` | `selectVeterinariosPorId` |
| `POST` | `/api/veterinarios` | `createVeterinario` | `insertNuevoVeterinario` |
| `PUT` | `/api/veterinarios/:idVeterinario` | `updateVeterinario` | `actualizarVeterinario` |
| `DELETE` | `/api/veterinarios/:idVeterinario` | `deleteVeterinario` | `deleteVeterinarioPorId` |
