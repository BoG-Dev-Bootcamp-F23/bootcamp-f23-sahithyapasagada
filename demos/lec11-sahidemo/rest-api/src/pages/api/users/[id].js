import { users } from "../_data";
export default function handler(req, res) {
    if (req.method === "DELETE") {
        //const id = req.query.id;
        const {id} = req.query; //id is string need to cast
        //const idNum = Number(id);
        const newUsers = users.filter(user => {
            return user.id !== id;
        }); 

        while(users.length !== 0) {
            users.pop();
        }

        //users.clear();

        newUsers.forEach((user) => users.push(user));

        res.status(200).json({status : "delete successful" })
    }
}