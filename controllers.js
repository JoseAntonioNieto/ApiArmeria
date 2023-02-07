import { Cliente } from "./models.js";
import bodyParser from "body-parser";

export function readClientes(req, res) {
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
};

export function readCliente(req, res) {
    new Cliente({nombre: req.body.nombre, apellido1: req.body.apellido1, apellido2: req.body.apellido2})
    .save((err, data) => {
        if (err) {
            res.json({ error: err});
        } else {
            res.json(data);
        }
    });
}

export function deletClientes(req, res){
    Cliente.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) {
            res.json({ error: err });
        } else {
            res.json(data);
        }
    });
}

export function readById(req, res){
    Cliente.find(
        { _id: req.params.id },
        (err, data) => {
            if (err) {
                res.json({ error: err});
            } else {
                res.json(data);
            }
        }
    );
}

export function updateCliente(req, res) {
    Cliente.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: { nombre: req.body.nombre, apellido1: req.body.apellido1, apellido2: req.body.apellido2 } },
        (err, data) => {
            if (err) {
                res.json({ error: err });
            } else {
                res.json(data);
            }
        }
    );
}