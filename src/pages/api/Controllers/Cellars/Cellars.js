import { connectdb } from "../../configs/mongo";
import Cellars from "../../models/Cellars";

connectdb();

export default async function handler(req, res) {
    const { method, body, query: { id } } = req;
    switch (method) {
        case "POST":
            try {
                const newCellar = new Cellars(body)
                const saveCellar = await newCellar.save()
                return res.status(201).json(saveCellar);
            } catch (err) {
                console.error(err)
                return res.status(500).json({ error: err.message })
            }

}
}
//Sin validaciones