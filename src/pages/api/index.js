
import {connect} from "./configs/mongo"

connect();

export default function handler(req, res) {
    res.status(200).json({ name: 'John Doe' })
}    