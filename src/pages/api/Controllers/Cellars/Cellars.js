import { connectdb } from "../../configs/mongo";
import Cellars from "../../models/Cellars";

import Clients from "../../models/Clients";


connectdb();

export default async function handler(req, res) {
    const { method, body, query: { id } } = req;
    switch (method) {
        case "POST":
            try {
                const newCellar = new Cellars(body)
                body.service == null;
                const saveCellar = await newCellar.save()
                return res.status(201).json(saveCellar);
            } catch (err) {
                console.error(err)
                return res.status(500).json({ error: err.message })
            }

            case "GET":
            try {
                const cellars = await Cellars.find();
                if (!cellars) return res.status(404).send({ message: 'Cellars not found' });
                return res.status(200).json({ msg: cellars, success: true });
            } catch (err) {
                return res.status(500).json({ error: err.message })
            }


}
}
