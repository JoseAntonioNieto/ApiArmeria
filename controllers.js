// import { Cliente } from "./models.js";

readClientes = (req, res) => {
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

// export default readClientes;