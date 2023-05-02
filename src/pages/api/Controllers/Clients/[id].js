// importando la función connectdb de la carpeta configs/mongo
import { connectdb } from "../../configs/mongo"; 
// importando el modelo Clients desde la carpeta models/Clients
import Clients from "../../models/Clients"; // importando el modelo Clients desde la carpeta models/Clients

// llamando a la función connectdb para conectarse a la base de datos
connectdb(); 

// exportando una función asincrónica con req y res como argumentos
export default async(req, res) => { 
    const { 
        // extrayendo el método HTTP de la solicitud
        method,
        // extrayendo el cuerpo de la solicitud 
        body, 
        // extrayendo el parámetro de la consulta de la solicitud
        query: { id }, 
        // desestructurando la solicitud para obtener los valores anteriores
    } = req; 

    // evaluando el método HTTP de la solicitud
    switch (method) { 
        case "GET":
            try {
                // buscando un registro en la base de datos con el id proporcionado
                const clients = await Clients.findById(id); 
                // si no se encuentra un registro, devuelve un mensaje de error
                if(!clients) return res.status(404).json({msg: "Register not found"}) 
                // si se encuentra el registro, devuelve el registro en formato JSON
                return res.status(200).json(clients) 
            } catch (error) {
                // si ocurre un error al buscar el registro, devuelve un mensaje de error
                return res.status(500).json({msg: error.msg}) 
            }

        case "PUT":
            try {
                // actualizando un registro en la base de datos con el id proporcionado
                const client = await Clients.findByIdAndUpdate(id, body,{ 
                    // indica que se devuelva el registro actualizado
                    new: true, 
                })
                // si no se encuentra el registro, devuelve un mensaje de error
                if (!client) return res.status(404).json({msg: "Task not found"}); 
                // si se actualiza el registro, devuelve el registro actualizado en formato JSON
                return res.status(200).json(client) 
            } catch (error) {
                // si ocurre un error al actualizar el registro, devuelve un mensaje de error
                return res.status(500).json({error: error.message}) 
            }

        case "DELETE":
            try {
                // eliminando un registro en la base de datos con el id proporcionado
                const deleteClient = await Clients.findByIdAndDelete(id); 
                // si no se encuentra el registro, devuelve un mensaje de error
                if(!deleteClient) return res.status(404).json({msg: "Client not found"}) 
                // si se elimina el registro, devuelve un mensaje de éxito
                return res.send({message: 'Client deleted sucessfully'}) 
            } catch (error) {
                // si ocurre un error al eliminar el registro, devuelve un mensaje de error
                return res.status(400).json({error: error.message}) 
            }
    
        default:
            // Retornamos un objeto JSON con un mensaje de error y un estado de 400
            return res.status(400).json({ msg: "This method is not supported" });
    }
}
