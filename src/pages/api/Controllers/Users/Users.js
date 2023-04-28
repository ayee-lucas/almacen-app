// Importamos la función connectdb desde el archivo mongo.js ubicado en la carpeta configs que se encuentra dos niveles por encima del archivo actual
import { connectdb } from "../../configs/mongo";

// Importamos el modelo Clients desde el archivo Clients.js ubicado en la carpeta models que se encuentra dos niveles por encima del archivo actual
import Users from "../../models/Users";

connectdb();

export default async (req, res) =>{
    const { method, body } =req;

    switch (method) {
        case "GET":
            try {
                const users = await Users.find();
                if(!users || users.length === 0){
                    return res.send({message:'There is no Users to show'});
                }
                return res.status(500).json(users);
            } catch (error) {
                return res.status(500).json({ error: error.message })
            }
            
        case "POST":
            try {
                const newPost = new Users(body);
                const savedPost = await newPost.save();
                return res.status(201).json(savedPost)
            } catch (error) {
                return res.status(400).json({ error: error.message })
            }

        default:
            break;
    }
}

