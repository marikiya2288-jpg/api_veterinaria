import { createPool } from "mysql2/promise"; // con promesa es asincrona // me permite conectar con la base de datos se llama piscina (pool).
const pool = createPool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database:process.env.DB_NAME,
     

})

export default pool