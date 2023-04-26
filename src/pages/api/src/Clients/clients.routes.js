import {connect} from "../../configs/mongo";


connect();

export default async function handler(req, res){
    switch (req.method) {
        case "GET":
            //const get = await Model.find();
            return res.send({message: "Hola"});
    
        default:
            return res.status(400).json({msg: "This method is not supported"})
    }
}