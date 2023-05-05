import { connectdb } from "../../configs/mongo";
import Lease from "../../models/Lease";

// Conectamos a la base de datos
connectdb();

// Definimos el controlador para la API REST
export default async function handler(req, res) {
    const { method, body, query: { id } } = req;
    switch (method) {
        case "GET":
            try {
                const lease = await Lease.findById(id);
                if (!lease) return res.status(404).send({ message: 'Lease not found' });
                return res.status(200).json({ msg: lease, success: true });
            } catch (err) {
                return res.status(500).json({ error: err.message })
            }

        case "PUT":
            try {
                const updateLease = await Lease.findByIdAndUpdate(id, body, {
                    new: true,
                    runValidators: true,
                });
                if (!updateLease) {
                    return res.status(404).json({ error: "Update operation failed" });
                }
                return res.status(200).send({ message: 'Updated Succesfully' });
            } catch (err) {
                return res.status(500).json({ error: err.message });
            }

        case "DELETE":

            try {
                const lease = await Lease.findById(id);
                if (!lease) {
                    return res.status(404).json({ message: "The lease does not exist" });
                }
                await Cellars.findByIdAndUpdate(
                    lease.bodega,
                    { state: "AVAILABLE" },
                    { new: true }
                );
                await Lease.findByIdAndDelete(id);
                res.status(200).json({ message: "Lease successfully deleted" });
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        default:
            return res.status(400).json({ msg: "This method is not supported" })
    }
}



