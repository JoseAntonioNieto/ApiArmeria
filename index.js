import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import apiRoutes from "./routes.js";
import bodyParser from "body-parser";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI;

// Swagger
const options = {
    definition: {
      info: {
        title: "Documentacion de Api Armeria",
        version: "0.1.0",
        description:
          "Esta es la documentacion de la api de la Armeria",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "Jose Antonio",
          url: "https://github.com/JoseAntonioNieto",
          email: "gokugamer243@gmail.com",
        },
      },
      servers: [
        {
          url: "http://localhost:3000",
        },
      ],
    },
    apis: ["./routes.js"],
  };
  
  const specs = swaggerJSDoc(options);
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
  );

  // Swagger


mongoose.set('strictQuery', false);
mongoose.connect(DB_URI)
    .then( db => console.log("Conexion a la base de datos de armeria correcta"))
    .catch(error => console.log("Error: " + error));

app.use(cors());
app.use(express.json());
app.use("/api", apiRoutes);

app.listen(PORT, () => console.log("Servidor iniciado."));