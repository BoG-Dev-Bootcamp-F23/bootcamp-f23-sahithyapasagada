export default async function handler(req, res) {
    const name = req.query.name;
    const url = "https://pokeapi.co/api/v2/pokemon/"

    if (name) {
        const response = await fetch(url + name);
        const data = await response.json(); //can do try catch
        res.status(200).json(data);
    } else {
        const id = Math.floor(Math.random() * 1000) + 1;
        const response = await fetch(url + id);
        const data = await response.json();
        res.status(200).json(data);
    }

}