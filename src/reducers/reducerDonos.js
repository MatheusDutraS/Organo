import { v4 as uuidv4 } from "uuid";

export const MUDAR_COR = "MUDAR_COR";
export const ADICIONAR_NOVO_DONO = "ADICIONAR_NOVO_DONO";

const reducerDonos = (estado, acao) => {
  switch (acao.tipo) {
    case MUDAR_COR:
      return estado.map((dono) => {
        if (dono.id === acao.id) {
          dono.cor = acao.cor;
        }
        return dono;
      });

    case ADICIONAR_NOVO_DONO:
      return [...estado, { ...acao.novoDono, id: uuidv4() }];

    default:
      return estado;
  }
};

export default reducerDonos;
