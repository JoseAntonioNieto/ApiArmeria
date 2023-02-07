import cors from "cors";
import express from "express";
import * as controllers from "./controllers.js"

const router = express.Router();

router.get("/armeria/clientes", cors(), controllers.readClientes);

router.post("/armeria/clientes", cors(), controllers.insertCliente);

router.delete("/armeria/clientes/:id", cors(), controllers.deletClientes)

router.get("/armeria/clientes/:id", cors(), controllers.readCliente)

router.put("/armeria/clientes/:id", cors(), controllers.updateCliente)

router.get("/armeria/armas", cors(), controllers.readArmas);

router.post("/armeria/armas", cors(), controllers.insertArma);

router.delete("/armeria/armas/:id", cors(), controllers.deletArmas);

router.get("/armeria/armas/:id", cors(), controllers.readArma);

router.put("/armeria/armas/:id", cors(), controllers.updateArma);

export default router;