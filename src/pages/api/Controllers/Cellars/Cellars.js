import { connectdb } from "../../configs/mongo";
import Cellars from "../../models/Cellars";

import Clients from "../../models/Clients";


connectdb();

export default async function handler(req, res) {
  const { method, body, query: { id } } = req;

  switch (method) {
    case "GET":
      try {
        const cellars = await Cellars.find();
        if (!cellars || cellars.length === 0) {
          return res.send({ message: "There is no Cellars to show" });
        }
        return res.status(200).json(cellars);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }

    case "POST":
      try {
        if (session.logged.role !== 'admin') {
            return res.status(403).json({ message: 'You do not have permission to perform this action' })
          }
        const newCellar = new Cellars(body)
        const saveCellar = await newCellar.save()
        return res.status(201).json(saveCellar);
      } catch (err) {
        console.error(err)
        return res.status(500).json({ error: err.message })
      }

    default:
      return res.status(405).json({ message: `Method ${method} Not Allowed` });
  }
}
