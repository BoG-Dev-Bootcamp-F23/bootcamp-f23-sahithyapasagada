import readTicketsByUser from '../../../server/mongodb/actions/readTicketsByUser';

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const result = await readTicketsByUser(req.query.userId)
            return (result === false ? res.status(400).send("User Not Found") : res.status(200).send(result));
            
        } catch (e) {

            return res.status(500).send("Failed")
        }
        
    }
}