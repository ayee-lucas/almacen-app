/* import { connectdb } from "../../configs/mongo";
import Cellars from "../../models/Cellars";
import Services from "../../models/Additional";
import Lease from "../../models/Lease";


connectdb();
export default async function handler(req, res) {
    const { method } = req;
    switch (method) {
        case "POST":
            try {
                const { idCellar, idService } = req.body;

                const cellar = await Cellars.findById(idCellar);
                const service = await Services.findById(idService);

                if (!cellar || !service) {
                    return res.status(404).json({ message: 'Cellar or Service not found' });
                }

                const serviceExists = cellar.service.find((s) => s.service.toString() === idService);

                if (serviceExists) {
                    return res.status(409).json({ message: 'Service already exists in the cellar' });
                }

                cellar.service.push({ service: idService });
                await cellar.save();
                
                const { name, price } = service;

                return res.status(200).json({
                    message: 'Service added to the cellar successfully',
                    service: { name, price }
                });

            } catch (error) {
                return res.status(500).json({ mensaje: 'Error al agregar el service a la cellar', error })
            }

        default:
            return res.status(400).json({ msg: "This method is not supported" });
    }
}
 */