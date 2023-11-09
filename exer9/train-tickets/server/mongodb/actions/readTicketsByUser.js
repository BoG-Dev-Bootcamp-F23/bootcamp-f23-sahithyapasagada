import connectDB from "../index.js";
import Ticket from "../models/Ticket.js";
import User from "../models/User.js";

export default async function readTicketsByUser(data) {

    try {
        await connectDB();
        const identifier = data; 
        const existUser = await User.findOne({_id : identifier});
        return (!existUser ? false : await Ticket.find({userId: identifier}))

    } catch (e) {
        console.log(e);
        throw new Error("Unable to read tickets. Invalid data or database issue.");
    }
    
}