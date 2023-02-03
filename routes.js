import cors from "cors";
import express from "express";
// import controller from "./controllers.js";
import { Cliente } from "./models.js";

const router = express.Router();

router.get("/armeria/clientes", cors(), (req, res) => {
    Cliente.find(
        {},
        (err, data) => {
            if (err) {
                res.json({ error: err});
            } else {
                res.json(data);
            }
        }
    );
});

export default router;