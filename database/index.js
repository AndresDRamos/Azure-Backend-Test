import sql from "mssql";

const config = {
  server: "servereps.database.windows.net",
  database: "EPS",
  user: "app_EPS",
  password: "Slc$%92035",
  authentication: {
    type: "default",
  },
  options: {
    encrypt: true,
    trustServerCertificate: false,
    connectTimeout: 30000,
  },
};

let pool = null;

export async function getConnection() {
  try {
    if (!pool) {
      pool = new sql.ConnectionPool(config);
      await pool.connect();
      console.log("✓ Conexión exitosa a Azure SQL Database");
    }
    return pool;
  } catch (error) {
    console.error("✗ Error conectando a la base de datos:", error.message);
    throw error;
  }
}

export async function closeConnection() {
  if (pool) {
    await pool.close();
    pool = null;
    console.log("✓ Conexión cerrada");
  }
}

export default { getConnection, closeConnection };
