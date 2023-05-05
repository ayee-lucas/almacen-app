import { connectdb } from "../../configs/mongo";
import Lease from "../../models/Lease";
import Cellars from "../../models/Cellars";
import Services from "../../models/Additional";

// Connect to database
connectdb();

// Define the REST API controller
export default async function handler(req, res) {
    const { method, body, query: { id } } = req;
    switch (method) {
        case "GET":
            try {
                const leases = await Lease.find();
                if(!leases || leases.length === 0){
                    return res.send({message: "There is no leases to show"})
                }
                return res.status(200).json(leases);
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        
        case "POST":
            try {
                const { cellar, client, service } = req.body;
            
                // Validate required data
                if (!cellar || !client) {
                    return res.status(400).json({ message: "Both cellar and client are required for the lease" });
                }
            
                // Verify if the cellar is available
                const availableCellar = await Cellars.findOne({ _id: cellar, state: "AVAILABLE" });
                if (!availableCellar) {
                    return res.status(400).json({ message: "The selected cellar is not available" });
                }
            
                // Create new lease
                const newLease = new Lease({
                    cellar,
                    client,
                    service: service || [],
                    date: Date.now()
                });
            
                // Save lease to database
                await newLease.save();
            
                // Change cellar state to unavailable
                await Cellars.findByIdAndUpdate(cellar, { state: "UNAVAILABLE" }, { new: true });
            
                res.status(201).json({ message: "Lease added successfully", lease: newLease });
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
            
        default:
            return res.status(400).json({ msg: "This method is not supported" })
    }
}