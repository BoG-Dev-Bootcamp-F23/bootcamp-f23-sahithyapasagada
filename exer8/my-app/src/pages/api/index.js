export default async function handler(req, res) {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    
    if (req.method === "GET") {
        const id = Math.floor(Math.random() * 1000) + 1;
        const response = await fetch(url + id);
        const data = await response.json();
        const pokemonName = data.name;
        const pokemonImage = data.sprites.front_default;
        const pokemonTypes = data.types.map(t => (t.type.name));
        res.status(200).json({name : pokemonName, types: pokemonTypes, sprite: pokemonImage});
    }

    
  }
  