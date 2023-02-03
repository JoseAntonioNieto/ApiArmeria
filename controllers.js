import { Cliente, Arma, Compra} from "./models";

exports.readClientes = (req, res) => {
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