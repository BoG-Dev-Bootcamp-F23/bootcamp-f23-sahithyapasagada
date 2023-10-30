export default async function handler(req, res) {
    const url = "https://pokeapi.co/api/v2/pokemon-species/";
    
    if (req.method === "GET") {
        const {name} = req.query; 
        
        if (name) {
            const response = await fetch(url + name);
            try {
                const speciesData = await response.json();
                const chainURL = speciesData.evolution_chain.url;
                const chainResponse = await fetch(chainURL);
                const chainData = await chainResponse.json();
                const chainEvolve = chainData.chain.evolves_to;
                if (chainEvolve.length === 0) {
                    res.status(200).json({ evolution_step : chainData.chain.species.name });
                } else {
                    res.status(200).json({ evolution_step : chainEvolve[0].species.name });
                }

            } catch (e) {
                res.status(400).json({ error: "pokemon does not exist" });
            }
        } 

    }

    
  }
  