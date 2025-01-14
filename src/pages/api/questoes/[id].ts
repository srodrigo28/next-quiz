// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";
import questoes from "../bancoDeQuestoes";

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const idSelecionado = req.query.id || 1;
  
  const unicaQuestaoOuNada = questoes.filter ( questao => questao.id == idSelecionado )

  if(unicaQuestaoOuNada.length == 1){
    // const questaoSelecionada = unicaQuestaoOuNada[0]
    const questaoSelecionada = unicaQuestaoOuNada[0].embaralharRespostas()
    res.status(200).json(questaoSelecionada.paraObjeto())
  }else{
    res.status(204)
  }
}