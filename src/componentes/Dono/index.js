import hexToRgba from "hex-to-rgba";
import Pet from "../Pet";
import "./Dono.css";

const Dono = ({ dono, pets, mudarCor, aoDeletar, aoFavoritar }) => {
  return pets.length > 0 ? (
    <section
      className="dono"
      style={{
        backgroundImage: "url(/imagens/fundo.png)",
        backgroundColor: hexToRgba(dono.cor, "0.6"),
      }}
    >
      <input
        className="input-cor"
        type="color"
        value={dono.cor}
        onChange={(evento) => mudarCor(evento.target.value, dono.id)}
      />
      <h3 style={{ borderColor: dono.cor }}>{dono.nome}</h3>
      <div className="pets">
        {pets.map((pet) => {
          return (
            <Pet
              key={pet.nome}
              pet={pet}
              corDeFundo={dono.cor}
              aoDeletar={aoDeletar}
              aoFavoritar={aoFavoritar}
            />
          );
        })}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Dono;
