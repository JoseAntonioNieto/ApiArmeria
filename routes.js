import cors from "cors";
import express from "express";
import { readClientes, readCliente, deletClientes, readById, updateCliente } from "./controllers.js"

const router = express.Router();

router.get("/armeria/clientes", cors(), readClientes);

router.post("/armeria/clientes", cors(), readCliente);

router.delete("/armeria/clientes/:id", cors(), deletClientes)

router.get("/armeria/clientes/:id", cors(), readById)

router.put("/armeria/clientes/:id", cors(), updateCliente)

export default router;