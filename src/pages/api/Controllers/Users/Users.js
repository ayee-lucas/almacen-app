import { connectdb } from "../../configs/mongo"; 
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
            return res.status(400).json({msg: "This method is not supported"})
    }
}