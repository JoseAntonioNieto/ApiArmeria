import cors from "cors";
import express from "express";
import controller from "./controllers";

const router = express.Router();

router.get("/armeria/clientes", cors(), controller.readClientes);