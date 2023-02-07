import { Cliente, Arma } from "./models.js";
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

export function insertCliente(req, res) {
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

export function readCliente(req, res){
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

export function readArmas(req, res) {
    Arma.find(
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

export function insertArma(req, res) {
    new Arma({nombre: req.body.nombre, balasCargador: req.body.balasCargador, tipo: req.body.tipo, stock: req.body.stock})
    .save((err, data) => {
        if (err) {
            res.json({ error: err});
        } else {
            res.json(data);
        }
    });
};

export function deletArmas(req, res){
    Arma.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) {
            res.json({ error: err });
        } else {
            res.json(data);
        }
    });
};

export function readArma(req, res){
    Arma.find(
        { _id: req.params.id },
        (err, data) => {
            if (err) {
                res.json({ error: err});
            } else {
                res.json(data);
            }
        }
    );
};

export function updateArma(req, res) {
    Arma.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: { nombre: req.body.nombre, balasCargador: req.body.balasCargador, tipo: req.body.tipo, stock: req.body.stock } },
        (err, data) => {
            if (err) {
                res.json({ error: err });
            } else {
                res.json(data);
            }
        }
    );
}