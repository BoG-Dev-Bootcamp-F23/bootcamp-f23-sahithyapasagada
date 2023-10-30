export default async function handler(req, res) {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    
    if (req.method === "POST") {
        const {pokemon1} = req.body; 
        const {pokemon2} = req.body; 
        
        if (pokemon1 && pokemon2) {
            const response1 = await fetch(url + pokemon1);
            const response2 = await fetch(url + pokemon2);
            try {
                const pokemon1Data = await response1.json();
                const pokemon2Data = await response2.json();

                const pokemon1stat = pokemon1Data.stats[0].base_stat;
                //console.log(typeof(pokemon1stat))
                const pokemon2stat = pokemon2Data.stats[0].base_stat;

                const pokemon = (
                    pokemon1stat === pokemon2stat ? "TIED" :
                    pokemon1stat > pokemon2stat ? pokemon1 : pokemon2
                )

                res.status(200).json({ winner: pokemon });

            } catch (e) {
                res.status(400).json({ error: "pokemon does not exist" });
            }
        } 

    }

    
  }
  