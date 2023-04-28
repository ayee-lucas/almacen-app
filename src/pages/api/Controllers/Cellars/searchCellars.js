import { connectdb } from "../../configs/mongo";
import Cellars from "../../models/Cellars";

connectdb();
export default async function handler(req, res) {
    const { method, body } = req;
    switch (method) {
        case "POST":
            try {
                const filteredCellars = await Cellars.find({
                    $or: [
                        { name: { $regex: body.search, $options: 'i' } },
//                        { branch: { $regex: `${body.branch}`, $options: "i" } },
                        { state: { $regex: body.search, $options: 'i' } },
                    ],
                });
                return res.status(200).json({ cellars: filteredCellars });
            } catch (err) {
                console.error(err);
                return res.status(500).json({ error: err.message });
            }

        default:
            return res.status(400).json({ msg: "This method is not supported" });
    }
}
//Sin validaciones