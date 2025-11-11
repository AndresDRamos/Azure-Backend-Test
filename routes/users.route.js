import express from "express";
import { getUsers } from "../controllers/users.controller.js";

const router = express.Router();

// GET: Obtener todos los usuarios
router.get("/", getUsers);

export default router;
