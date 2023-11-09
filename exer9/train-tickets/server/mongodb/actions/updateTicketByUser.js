import connectDB from "../index.js";
import Ticket from "../models/Ticket.js";
import User from "../models/User.js"

export default async function updateTicketByUser(data) {

    try {
        await connectDB();
        const { ticketId, userId } = data;
        const existUser = await User.findOne({_id : userId});
        const existTicket = await Ticket.findOne({_id : ticketId});
        return (!existUser ? false : (!existTicket ? null : Ticket.findByIdAndUpdate(ticketId, { userId: userId })));

    } catch (e) {
        console.log(e)
        throw new Error("Unable to update ticket. Invalid data or database issue.");
    }
}


//can do this instead of nested ternary 

        //const existUser = await User.findOne({_id : userId});
        // if (!existUser) {
        //     return false;
        // }

        //const existTicket = await Ticket.findOne({_id : ticketId});
        // if (!existTicket) {
        //     return null;
        // }
        
        // await Ticket.findByIdAndUpdate(ticketId, { userId: userId })
        // return true;


