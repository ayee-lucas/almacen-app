import { connectdb } from "../../configs/mongo";
import Additional from "../../models/Additional";

connectdb();

export default async function handler(req, res) {
    const { method, body, query: { id } } = req;
    switch (method) {
        case "GET":
            try {
                // Buscamos una Service por su id
                const serviceAdd = await Additional.findById(id);
                if (!serviceAdd) return res.status(404).send({ message: 'Service not found' });
                return res.status(200).json({ msg: serviceAdd, success: true });
            } catch (err) {
                return res.status(500).json({ error: err.message })
            }
            case "PUT":
                try {
                    // Actualizamos una Service por su id
                    const updateService = await Additional.findByIdAndUpdate(id, body, {
                        new: true,
                        runValidators: true,
                    });
                    if (!updateService) {
                        return res.status(404).json({ error: "Update operation failed" });
                    }
                    return res.status(200).send({ message: 'Updated Succesfully' });
                } catch (err) {
                    return res.status(500).json({ error: err.message });
                }
    
            case "DELETE":
                try {
                    // Eliminamos una Service por su id
                    const deleteService = await Additional.findByIdAndDelete(id);
                    if (!deleteService) {
                        return res.status(404).json({ error: "service not found" });
                    }
                        return res.send({msg: "Deleted succesfully"});
                } catch (err) {
                    return res.status(500).json({ error: err.message });
                }
        default:
            return res.status(400).json({ msg: "This method is not supported" })
    }
}