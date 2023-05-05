import { connectdb } from "../../configs/mongo"; 
import Users from "../../models/Users";

connectdb();

export default async(req, res)=>{
    const{
        method,
        body,
        query: { id }
    } = req;

    switch (method) {
        case "GET":
            try {
                const users = await Users.findById(id);
                if(!users) return res.status(404).json({msg: "Register not found"})
                return res.status(200).json(users)
            } catch (error) {
                return res.status(500).json({msg: error.msg})
            }
        
        case "PUT":
            try {
                const user = await Users.findByIdAndUpdate(id, body, {
                    new: true,
                });
                if (!user) {
                    return res.status(404).json({ msg: "User not found" });
                }
                return res.status(200).json(user);
            } catch (error) {
                return res.status(500).json({ error: error.message });
            }
            

        case "DELETE":
            try {
                const deleteUser = await Users.findByIdAndDelete(id);
                if (!deleteUser) return res.status(404).json({ msg: "User not found" });
                return res.status(200).json({ message: 'User deleted successfully' });
            } catch (error) {
                return res.status(500).json({ error: error.message });
            }
            

        default:
            return res.status(400).json({ msg: "This method is not supported" });
    }
}
