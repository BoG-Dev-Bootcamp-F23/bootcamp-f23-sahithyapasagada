// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
    const id = req.query.id;
    if (id < 1) {
        res.status(400).json({ error: "hello" })
    }
    res.status(200).json({ id }) //dynamic routing

    // const name = req.query.name;
    // if (name === "ditto") {

    //     const data = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    //     const response = await data.json();
    //     //return response;


    //     return res.status(200).json({ response })
    // }
    // res.status(200).json({ name}) //dynamic routing

  }

 