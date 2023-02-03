import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import apiRoutes from "./routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI;

mongoose.set('strictQuery', false);
mongoose.connect(DB_URI)
    .then( db => console.log("Conexion a la base de datos de armeria correcta"))
    .catch(error => console.log("Error: " + error));

app.use(cors());
app.use(express.json());
app.use("/api", apiRoutes);

app.listen(PORT, () => console.log("Servidor iniciado."));