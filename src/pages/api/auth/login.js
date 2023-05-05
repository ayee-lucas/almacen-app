import { connectdb } from "../configs/mongo";
import generateToken from "./jwt";
import User from "../models/Users";
import checkPass from "../Utils/validate";

connectdb();

export default async (req, res) => {
  const { method, body } = req;

  switch (method) {
    case "POST":
      const data = body;


      const credentials = {
        username: data.username,
        password: data.password,
      };


      const userFinded = await User.findOne({ username: data.username });

      if (!userFinded) {
        return res.status(400).json({ message: "User not found" });
      }

      const passCheck = await checkPass(
        credentials.password,
        userFinded.password
      );

      if (!passCheck) {
        return res.status(400).json({ message: 'Wrong password', password:  credentials.password, database: userFinded.password });
      }

      const token = await generateToken(userFinded);

      const userLogged = {
        name: userFinded.name,
        username: userFinded.username,
        role: userFinded.role,
      };


      return res
        .status(200)
        .json({ message: "Success", logged: userLogged, token: token });

      break;

    default:
      return res.status(400).json({ mehod: "This method is not allowed" });
      break;
  }
};
