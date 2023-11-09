import updateTicketByUser from "../../../server/mongodb/actions/updateTicketByUser";

export default async function handler(req, res) {
    if (req.method === "PATCH") {
        try {
            const result = await updateTicketByUser(req.body);
            if (result === null) {
                return res.status(400).send("Ticket not found.");
            } else if (result === false) {
                return res.status(400).send("User not found.");
            }
            return res.status(200).send("Success");
        } catch(e) {
            return res.status(500).send("Failed");
        }
    }
    
}