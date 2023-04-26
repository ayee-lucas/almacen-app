import { connectdb } from "../../configs/mongo";
import Clients from "../../models/Clients";


connectdb();

export default async function handler(req, res){
    switch (req.method) {
        case "GET":
            const clients = await Clients.find();
            console.log(clients);
            console.log("this is a test")

            return res.status(200).json({msg: clients, success: true});
    
        default:
            return res.status(400).json({msg: "This method is not supported"})
    }
}