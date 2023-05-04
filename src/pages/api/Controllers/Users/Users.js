import { connectdb } from "../../configs/mongo";
import Users from "../../models/Users";
import encrypt from "../../Utils/encrypt";

connectdb();

export default async (req, res) => {
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        const users = await Users.find();
        if (!users || users.length === 0) {
          return res.send({ message: "There is no Users to show" });
        }
        return res.status(200).json(users);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }


    // Register  

    case "POST":
      try {
        const data = new Users(body);
        //encrypt
        data.password = await encrypt(data.password);
        // Default Role
        data.role = "EMPLOYEE";
        console.log(data);
        const savedPost = await data.save();
        return res.status(201).json(savedPost);
      } catch (error) {
        return res.status(400).json({ error: error.message });
      }

    default:
      return res.status(400).json({ msg: "This method is not supported" });
  }
};
