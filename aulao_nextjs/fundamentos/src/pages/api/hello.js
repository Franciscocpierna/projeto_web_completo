// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { stringifyCookie } from "next/dist/compiled/@edge-runtime/cookies";

export default function handler(req, res) {
  res.status(200).json({ 
    name: "John Doe",
    metodo: req.method,
    nome: req.query.nome,
    idade: +req.query.idade,
    params: JSON.stringify(req.query) 
   });
}
