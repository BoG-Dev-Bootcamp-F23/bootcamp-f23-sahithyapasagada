import deleteTicket from "../../../server/mongodb/actions/deleteTicket"; 

export default async function handler(req, res) {
    if (req.method === "DELETE") {
        try {
            const validTicket = await deleteTicket(req.query.ticketId);
            if (validTicket === null) {
                return res.status(400).send("Ticket Not Found");
            }
            return res.status(200).send("Success");
        } catch(e) {
            return res.status(500).send("Failed");
        }
    }
    
}