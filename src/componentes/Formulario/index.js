import "./Formulario.css";
import { useState } from "react";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

const Formulario = ({ aoPetCadastrado, donos, cadastrarNovoDono }) => {
  const [nome, setNome] = useState("");
  const [titulo, setTitulo] = useState("");
  const [imagem, setImagem] = useState("");
  const [dono, setDono] = useState("");
  const [nomeNovoDno, setNomeNovoDono] = useState("");
  const [corNovoDono, setCorNovoDono] = useState("");

  const aoSalvar = (e) => {
    e.preventDefault();
    aoPetCadastrado({
      nome,
      titulo,
      imagem,
      dono,
    });
    setNome("");
    setTitulo("");
    setImagem("");
    setDono("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do Pet</h2>
        <Campo
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterar={(valor) => setNome(valor)}
        />
        <Campo
          required={true}
          label="Titulo"
          placeholder="Digite seu título"
          valor={titulo}
          aoAlterar={(valor) => setTitulo(valor)}
        />
        <Campo
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterar={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          required={true}
          label="Dono"
          itens={donos}
          valor={dono}
          aoAlterar={(valor) => setDono(valor)}
        />
        <Botao>Criar card</Botao>
      </form>
      <form
        onSubmit={(evento) => {
          evento.preventDefault();
          cadastrarNovoDono({ nome: nomeNovoDno, cor: corNovoDono });
          setNomeNovoDono("");
          setCorNovoDono("");
        }}
      >
        <h2>Preencha os dados para criar um novo dono</h2>
        <Campo
          required
          label="Nome"
          placeholder="Digite o nome do novo dono"
          valor={nomeNovoDno}
          aoAlterar={(valor) => setNomeNovoDono(valor)}
        />
        <Campo
          type="color"
          required
          label="Cor"
          placeholder="Digite a cor do dono"
          valor={corNovoDono}
          aoAlterar={(valor) => setCorNovoDono(valor)}
        />
        <Botao>Criar um novo dono</Botao>
      </form>
    </section>
  );
};

export default Formulario;
