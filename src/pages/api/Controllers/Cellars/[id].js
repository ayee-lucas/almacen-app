import { connectdb } from "../../configs/mongo";
import Cellars from "../../models/Cellars";

// Conectamos a la base de datos
connectdb();

// Definimos el controlador para la API REST
export default async function handler(req, res) {
    const { method, body, query: { id } } = req;
    switch (method) {
        case "GET":
            try {
                // Buscamos una bodega por su id
                const cellars = await Cellars.findById(id);
                if (!cellars) return res.status(404).send({ message: 'Cellar not found' });
                return res.status(200).json({ msg: cellars, success: true });
            } catch (err) {
                return res.status(500).json({ error: err.message })
            }

        case "PUT":
            try {
                // Actualizamos una bodega por su id
                const updateCellar = await Cellars.findByIdAndUpdate(id, body, {
                    new: true,
                    runValidators: true,
                });
                if (!updateCellar) {
                    return res.status(404).json({ error: "Update operation failed" });
                }
                return res.status(404).send({ message: 'Deleted Succesfully' });
            } catch (err) {
                return res.status(500).json({ error: err.message });
            }

        case "DELETE":
            try {
                // Verificamos si una bodega está asignada a un usuario antes de eliminarla
                const cellar = await Cellars.findOne({ _id: id, owner: { $exists: true } });
                if (cellar) {
                  return res.status(400).json({ msg: "Cannot delete this cellar, it belongs to a user" });
                }
                // Eliminamos una bodega por su id
                const deleteCellar = await Cellars.findByIdAndDelete(id);
                if (!deleteCellar) {
                    return res.status(404).json({ error: "Cellar not found" });
                }
                    return res.send({msg: "Deleted succesfully"});
            } catch (err) {
                return res.status(500).json({ error: err.message });
            }
        default:
            return res.status(400).json({ msg: "This method is not supported" })
    }
}

