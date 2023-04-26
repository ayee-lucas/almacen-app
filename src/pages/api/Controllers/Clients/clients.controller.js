import { connectdb } from "../../configs/mongo";
import Clients from "../../models/Clients";


connectdb();

export default async(req, res)=>{

    const { method, body, query:{id} } = req; 

    switch (method) {
        case "GET":
            try {
                const clients = await Clients.findById(id);
                if(!clients) return res.status(404).json({msg: "Register not found"})
                return res.status(200).json(clients)
            } catch (error) {
                return res.status(500).json({msg: error.msg})
            }

        case "POST":
            try {
                const newPost = new Clients(body)
                const savedPost = await newPost.save()
                return res.status(201).json(savedPost)
            } catch (error) {
                return res.status(500).json({error: error.message})
            }

        case "PUT":
            try {
                const client = await Clients.findByIdAndUpdate(id, body,{
                    new: true,
                })
                if (!client) return res.status(404).json({msg: "Task not found"});
                return res.status(200).json(client)
            } catch (error) {
                return res.status(500).json({error: error.message})
            }


        case "DELETE":
            try {
                const deleteClient = await Clients.findByIdAndDelete(id);
                if(!deleteClient) returnres.status(404).json({msg: "Client not found"})
                return res.status(204).json();
            } catch (error) {
                return res.status(400).json({error: error.message})
            }

    
        default:
            return res.status(400).json({msg: "This method is not supported"})
    }
}