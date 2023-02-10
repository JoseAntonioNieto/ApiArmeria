import cors from "cors";
import express from "express";
import * as controllers from "./controllers.js"

const router = express.Router();

/**
 * @swagger
 * 
 * tags:
 *  name: Cliente
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
 *  post:
 *      sumary: Crea un cliente
 *      tags: [Cliente]
 *      consumes:
 *          - application/json
 *      parameters:
 *          - in: body
 *            name: cliente
 *            description: Cliente a crear.
 *            schema:
 *              type: object
 *              required:
 *                  - nombre
 *                  - apellido1
 *              properties:
 *                  nombre:
 *                      type: string
 *                  apellido1:
 *                      type: string
 *                  apellido2:
 *                      type: string
 *      responses:
 *          200:
 *              description: Cliente creado
 *              content:
 *                  application/json:
 *                      type: array
 * 
 * /api/armeria/clientes/{id}:
 *  get:
 *      sumary: Devuelve un cliente
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
 *              description: Devuelve un cliente
 *              content:
 *                  application/json:
 *                      type: array
 *  delete:
 *      sumary: Elimina un cliente
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
 *              description: Cliente eliminado
 *              content:
 *                  application/json:
 *                      type: array
 *  put:
 *      sumary: Actualiza un cliente
 *      tags: [Cliente]
 *      consumes:
 *          - application/json
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: Id del cliente
 *          - in: body
 *            name: cliente
 *            description: Datos a actualizar.
 *            schema:
 *              type: object
 *              properties:
 *                  nombre:
 *                      type: string
 *                  apellido1:
 *                      type: string
 *                  apellido2:
 *                      type: string
 *      responses:
 *          200:
 *              description: Cliente actualizado
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

/**
 * 
 * @swagger
 * 
 * tags:
 *  name: Arma
 *  description: Armas de la armeria
 * /api/armeria/armas:
 *  get:
 *      sumary: Devuelve todas las armas
 *      tags: [Arma]
 *      responses:
 *          200:
 *              description: Lista de armas
 *              content:
 *                  application/json:
 *                      type: array
 *  post:
 *      sumary: Inserta un arma
 *      tags: [Arma]
 *      consumes:
 *          - application/json
 *      parameters:
 *          - in: body
 *            name: arma
 *            description: Arma a crear.
 *            schema:
 *              type: object
 *              required:
 *                  - nombre
 *                  - balasCargador
 *                  - tipo
 *                  - stock
 *              properties:
 *                  nombre:
 *                      type: string
 *                  balasCargador:
 *                      type: number
 *                  tipo:
 *                      type: string
 *                  stock:
 *                      type: number
 *      responses:
 *          200:
 *              description: Cliente creado
 *              content:
 *                  application/json:
 *                      type: array
 * /api/armeria/armas/{id}:
 *  get:
 *      sumary: Devuelve un arma
 *      tags: [Arma]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: Id del arma
 *      responses:
 *          200:
 *              description: Devuelve un arma
 *              content:
 *                  application/json:
 *                      type: array
 *  delete:
 *      sumary: Elimina un arma
 *      tags: [Arma]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: Id del arma
 *      responses:
 *          200:
 *              description: Arma eliminada
 *              content:
 *                  application/json:
 *                      type: array
 *  put:
 *      sumary: Actualiza un arma
 *      tags: [Arma]
 *      consumes:
 *          - application/json
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: Id del arma
 *          - in: body
 *            name: arma
 *            description: Datos a actualizar.
 *            schema:
 *              type: object
 *              properties:
 *                  nombre:
 *                      type: string
 *                  balasCargador:
 *                      type: number
 *                  tipo:
 *                      type: string
 *                  stock:
 *                      type: number
 *      responses:
 *          200:
 *              description: Cliente creado
 *              content:
 *                  application/json:
 *                      type: array
 * 
 */

router.get("/armeria/armas", cors(), controllers.readArmas);

router.post("/armeria/armas", cors(), controllers.insertArma);

router.delete("/armeria/armas/:id", cors(), controllers.deletArmas);

router.get("/armeria/armas/:id", cors(), controllers.readArma);

router.put("/armeria/armas/:id", cors(), controllers.updateArma);

export default router;