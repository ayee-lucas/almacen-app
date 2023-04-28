// Importamos la función connectdb desde el archivo mongo.js ubicado en la carpeta configs que se encuentra dos niveles por encima del archivo actual
import { connectdb } from "../../configs/mongo";

// Importamos el modelo Clients desde el archivo Clients.js ubicado en la carpeta models que se encuentra dos niveles por encima del archivo actual
import Clients from "../../models/Clients";

// Llamamos a la función connectdb() que se encarga de conectar la base de datos MongoDB
connectdb();

// Exportamos por defecto una función asíncrona con dos parámetros, el request y el response.
export default async (req, res) => {
  // Extraemos los valores de method y body desde el objeto request (req)
  const { method, body } = req;

  // Creamos un switch para evaluar la variable method
  switch (method) {
    // En caso de que el método sea GET
    case "GET":
      try {
        // Buscamos todos los clientes en la base de datos
        const clients = await Clients.find();
        // Retornamos un objeto JSON con los clientes y un estado de 200
        return res.status(200).json(clients);
      } catch (error) {
        // En caso de que ocurra un error al buscar los clientes, retornamos un objeto JSON con un mensaje de error y un estado de 500
        return res.status(500).json({ error: error.message });
      }

    // En caso de que el método sea POST
    case "POST":
      try {
        // Creamos un nuevo cliente con los datos recibidos en el body
        const newPost = new Clients(body);
        // Guardamos el nuevo cliente en la base de datos
        const savedPost = await newPost.save();
        // Retornamos un objeto JSON con el nuevo cliente y un estado de 201
        return res.status(201).json(savedPost);
      } catch (error) {
        // En caso de que ocurra un error al guardar el cliente, retornamos un objeto JSON con un mensaje de error y un estado de 500
        return res.status(500).json({ error: error.message });
      }

    // En caso de que el método no sea GET ni POST
    default:
      // Retornamos un objeto JSON con un mensaje de error y un estado de 400
      return res.status(400).json({ msg: "This method is not supported" });
  }
};
