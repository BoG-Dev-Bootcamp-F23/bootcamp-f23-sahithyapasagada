export default async function handler(req, res) {
    const url = "https://pokeapi.co/api/v2/type/";
    
    if (req.method === "GET") {
        const {type} = req.query; 
        
        if (type) {
            const response = await fetch(url + type);
            try {
              const data = await response.json();
              //const pokemonName = data.name;
              //const pokemonImage = data.sprites.front_default;
              //const pokemonTypes = data.types.map(t => (t.type.name));
              //const poke = data.pokemon;
              //console.log(poke);
              const pokemons = data.pokemon.map(p => (p.pokemon.name)); 

              res.status(200).json({pokemons : pokemons});

            } catch (e) {
              res.status(400).json({ error: "pokemon does not exist" });
            }
        } 

    }

    
  }
  