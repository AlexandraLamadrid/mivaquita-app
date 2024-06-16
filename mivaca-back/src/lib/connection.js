import pg from "pg";
import "dotenv/config"; 
const { Pool } = pg; 

const pool = new Pool({ 
    users: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
});


