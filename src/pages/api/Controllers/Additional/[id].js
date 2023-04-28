import { connectdb } from "../../configs/mongo";
import Additional from "../../models/Additional";

connectdb();

export default async function handler(req, res) {
    const { method, body, query: { id } } = req;
    switch (method) {
        case "GET":
            try {
                const additional = await Additional.findById();
                console.log(additional);
                console.log("Additional showing")
                return res.status(200).json({ msg: additional, success: true });
                
            } catch (err) {
                return res.status(500).json({ error: err.message })
            }

        

        case "PUT":
            try {
                const updateAdditional = await Additional.findByIdAndUpdate(id , body, {
                    new: true,
                    runValidators: true,
                });
                if (!updateAdditional) {
                    return res.status(404).json({ error: "Update operation failed" });
                }
                return res.status(204).send();
            } catch (err) {
                return res.status(500).json({ error: err.message });
            }


        
        default:
            return res.status(400).json({ msg: "This method is not supported" })
    }
}