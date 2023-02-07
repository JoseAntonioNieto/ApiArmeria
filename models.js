import mongoose from "mongoose";

export const Cliente = mongoose.model("Cliente", 
    new mongoose.Schema({
        nombre: String,
        apellido1: String,
        apellido2: String
    })
);

export const Arma = mongoose.model("Arma", 
    new mongoose.Schema({
        nombre: String,
        balasCargador: Number,
        tipo: String,
        stock: Number
    })
);

const Compra = mongoose.model("Compra",
    new mongoose.Schema({
        id_arma: String,
        id_cliente: String,
        cantidad: Number
    })
);