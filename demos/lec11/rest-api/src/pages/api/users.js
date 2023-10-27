import { users } from "./_data";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ users });
  } else if (req.method === "POST") {
    const body = req.body;
    if (!req.body) {
      return res.status(400).json({ error: "insufficient information" });
    }

    const id = Math.floor(Math.random() * 10000) + 1;
    const newUser = {
      ...body,
      id: id.toString(),
    };
    users = newUser;
    users.push(newUser);
    res.status(200).json({ status: "success!" });
  }
}
