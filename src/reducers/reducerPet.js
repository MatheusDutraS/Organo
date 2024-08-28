export const ADICIONAR_PET = "ADICIONAR_PET";
export const EXCLUIR_PET = "EXCLUIR_PET";
export const FAVORITAR_DESFAVORITAR = "FAVORITAR_DESFAVORITAR";

const reducerPet = (estado, acao) => {
  switch (acao.tipo) {
    case ADICIONAR_PET:
      return [...estado, acao.pet];

    case EXCLUIR_PET:
      return estado.filter((pet) => pet.id !== acao.id);

    case FAVORITAR_DESFAVORITAR:
      return estado.map((pet) => {
        if (pet.id === acao.id) pet.favorito = !pet.favorito;
        return pet;
      });

    default:
      return estado;
  }
};

export default reducerPet;
