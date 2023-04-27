import { connectdb } from "../../configs/mongo";
import Cellars from "../../models/Cellars";

connectdb();

export default async function handler(req, res) {
    const { method, body, query: { id } } = req;
    switch (method) {
        case "GET":
            try {
                const cellars = await Cellars.find();
                console.log(cellars);
                console.log("Cellars showing")
                return res.status(200).json({ msg: cellars, success: true });
            } catch (err) {
                return res.status(500).json({ error: err.message })
            }

        case "POST":
            try {
                const newCellar = new Cellars(body)
                const saveCellar = await newCellar.save()
                return res.status(201).json(saveCellar);
            } catch (err) {
                console.error(err)
                return res.status(500).json({ error: err.message })
            }

        case "PUT":
            try {
                const updateCellar = await Cellars.findOneAndUpdate({ _id: id }, body, {
                    new: true,
                    runValidators: true,
                });
                if (!updateCellar) {
                    return res.status(404).json({ error: "Update operation failed" });
                }
                return res.status(204).send();
            } catch (err) {
                return res.status(500).json({ error: err.message });
            }


        case "DELETE":
            try {
                const deleteCellar = await Cellars.findOneAndDelete({ _id: id });
                if (!deleteCellar) {
                    return res.status(404).json({ error: "Cellar not found" });
                }
                return res.status(204).send();
            } catch (err) {
                return res.status(500).json({ error: err.message });
            }
        default:
            return res.status(400).json({ msg: "This method is not supported" })
    }
}
//Sin validaciones