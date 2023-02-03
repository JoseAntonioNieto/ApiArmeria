import mongoose from "mongoose";

const Cliente = mongoose.model("Cliente", 
    new mongoose.Schema({
        nombre: String,
        apellido1: String,
        apellido2: String
    })
);

const Arma = mongoose.model("Arma", 
    new mongoose.Schema({
        nombre: String,
        balasCargador: Number,
        tipo: String,
        cantidad: Number
    })
);

const Compra = mongoose.model("Compra",
    new mongoose.Schema({
        id_arma: String,
        id_cliente: String,
        cantidad: Number
    })
);