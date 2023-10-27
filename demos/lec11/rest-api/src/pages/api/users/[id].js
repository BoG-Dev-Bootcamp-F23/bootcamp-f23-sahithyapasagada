import { users } from "../_data";

export default function handler(req, res) {
  if (req.method === "DELETE") {
    const { id } = req.query;
    const newUsers = users.filter((user) => {
      return user.id !== id;
    });
    console.log(newUsers);
    while (users.length !== 0) {
      users.pop();
    }
    newUsers.forEach((user) => users.push(user));
    res.status(200).json({ status: "delete successful!" });
  }
}
