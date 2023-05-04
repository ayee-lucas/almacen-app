import { connectdb } from "../../configs/mongo";
import Additional from "../../models/Additional";

connectdb();

export default async function handler(req, res){
    const { method, body, query: {id} } = req;
    switch(method){
        case "POST":
            try {
                const newService = new Additional(body)
                const saveService = await newService.save()
                return res.status(201).json(saveService);
            } catch (err) {
                console.error(err)
                return res.status(500).json({ error: err.message })
            }

    }
}