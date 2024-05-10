import pg from "pg";
import "dotenv/config"; // Esto es suficiente para cargar las variables de entorno.

const { Pool } = pg; // Asegúrate de extraer Pool con destructuring.

const pool = new Pool({ // Usa esta única declaración para la instancia de Pool.
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
});

export default pool;
