export default async function handler(req, res) {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    
    if (req.method === "GET") {
        const {name} = req.query; 
        
        if (name) {
            const response = await fetch(url + name);
            try {
              const data = await response.json();
              const pokemonName = data.name;
              const pokemonImage = data.sprites.front_default;
              const pokemonTypes = data.types.map(t => (t.type.name));

              res.status(200).json({name : pokemonName, types: pokemonTypes, sprite: pokemonImage});

            } catch (e) {
              res.status(400).json({ error: "pokemon does not exist" });
            }
        } 

    }

    
  }
  