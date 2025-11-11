import sql from "mssql";
import { getConnection } from "../database/index.js";

export async function getUsers(req, res) {
  try {
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM Admin.Usuarios");

    if (result.recordset.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No users found",
        data: [],
      });
    }

    res.status(200).json({
      success: true,
      message: "Usuarios obtenidos exitosamente",
      count: result.recordset.length,
      data: result.recordset,
    });
  } catch (error) {
    console.error("Error al obtener usuarios:", error.message);
    res.status(500).json({
      success: false,
      message: "Error al obtener usuarios",
      error: error.message,
    });
  }
}

export default { getUsers };
