import connectDB from "../index.js"
import Ticket from "../models/Ticket.js"

export default async function deleteTicket(data) {
    try {
        // await connectDB()
        // const identifier = data
        // const deleteTicket = await Ticket.findByIdAndDelete(identifier)
        // return true;

        await connectDB()
        const identifier = data
        await Ticket.findByIdAndDelete(identifier)
        return true
    } catch (e) {
        console.log(e)
        throw new Error("Unable to delete ticket. Invalid data or database issue.")
    }
}