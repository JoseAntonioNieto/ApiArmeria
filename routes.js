import cors from "cors";
import express from "express";
import * as controllers from "./controllers.js"

const router = express.Router();

/**
 * @swagger
 * 
 * tags:
 *  name: Clientes
 *  description: Clientes de la armeria
 * /api/armeria/clientes:
 *  get:
 *      sumary: Devuelve todos los clientes
 *      tags: [Cliente]
 *      responses:
 *          200:
 *              description: Lista de los clientes
 *              content:
 *                  application/json:
 *                      type: array
 * /api/armeria/clientes/{id}:
 *  get:
 *      sumary: Devuelve todos los clientes
 *      tags: [Cliente]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: Id del cliente
 *      responses:
 *          200:
 *              description: Lista de los clientes
 *              content:
 *                  application/json:
 *                      type: array
 *      
 */
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