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

router.post("/armeria/clientes", cors(), (req, res) => {
    new Cliente({nombre: req.body.nombre, apellido1: req.body.apellido1, apellido2: req.body.apellido2})
    .save((err, data) => {
        if (err) {
            res.json({ error: err});
        } else {
            res.json(data);
        }
    });
})

router.delete("/armeria/clientes/:id", cors(), (req, res) => {
    Cliente.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) {
            res.json({ error: err });
        } else {
            res.json(data);
        }
    });
} )

export default router;