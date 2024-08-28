import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./Pet.css";

const Pet = ({ pet, corDeFundo, aoDeletar, aoFavoritar }) => {
  function favoritar() {
    aoFavoritar(pet.id);
  }

  const propsFavorito = {
    size: 25,
    onClick: favoritar,
  };

  return (
    <div className="pet">
      <AiFillCloseCircle
        size={25}
        className="deletar"
        onClick={() => aoDeletar(pet.id)}
      />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={pet.imagem} alt={pet.nome} />
      </div>
      <div className="rodape">
        <h4>{pet.nome}</h4>
        <h5>{pet.titulo}</h5>
        <div className="favoritar">
          {pet.favorito ? (
            <AiFillHeart {...propsFavorito} color="#ff0000" />
          ) : (
            <AiOutlineHeart {...propsFavorito} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Pet;
