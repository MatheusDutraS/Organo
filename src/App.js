import { v4 as uuidv4 } from "uuid";
import { useReducer, useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario";
import Dono from "./componentes/Dono";
import Rodape from "./componentes/Rodape";
import Botao from "./componentes/Botao";
import reducerPet, {
  ADICIONAR_PET,
  EXCLUIR_PET,
  FAVORITAR_DESFAVORITAR,
} from "./reducers/reducerPet";
import reducerDonos, {
  ADICIONAR_NOVO_DONO,
  MUDAR_COR,
} from "./reducers/reducerDonos";

function App() {
  // const [donos, setDonos] = useState([
  //   {
  //     id: uuidv4(),
  //     nome: "Matheus",
  //     cor: "#82CFFA",
  //   },
  //   {
  //     id: uuidv4(),
  //     nome: "Pedro",
  //     cor: "#57C278",
  //   },
  //   {
  //     id: uuidv4(),
  //     nome: "Sabrina",
  //     cor: "#A6D157",
  //   },
  // ]);

  const [donos, dispatchDonos] = useReducer(reducerDonos, [
    {
      id: uuidv4(),
      nome: "Matheus",
      cor: "#82CFFA",
    },
    {
      id: uuidv4(),
      nome: "Pedro",
      cor: "#57C278",
    },
    {
      id: uuidv4(),
      nome: "Sabrina",
      cor: "#A6D157",
    },
  ]);

  const iniciais = [
    {
      id: uuidv4(),
      nome: "Pantera",
      titulo: "Dona do pedaço",
      imagem:
        "https://media.istockphoto.com/id/1296353202/pt/foto/group-of-pets-posing-around-a-border-collie-dog-cat-ferret-rabbit-bird-fish-rodent.jpg?s=612x612&w=0&k=20&c=jiW8E5uSGc1XUONuoe9paRrySjpVkXJOKBXgSN5Ovw8=",
      dono: donos[0].nome,
      favorito: false,
    },
    {
      id: uuidv4(),
      nome: "Isis",
      titulo: "Não me toque",
      imagem:
        "https://media.istockphoto.com/id/1296353202/pt/foto/group-of-pets-posing-around-a-border-collie-dog-cat-ferret-rabbit-bird-fish-rodent.jpg?s=612x612&w=0&k=20&c=jiW8E5uSGc1XUONuoe9paRrySjpVkXJOKBXgSN5Ovw8=",
      dono: donos[1].nome,
      favorito: false,
    },
    {
      id: uuidv4(),
      nome: "Mel",
      titulo: "Alise meu pelo",
      imagem:
        "https://media.istockphoto.com/id/1296353202/pt/foto/group-of-pets-posing-around-a-border-collie-dog-cat-ferret-rabbit-bird-fish-rodent.jpg?s=612x612&w=0&k=20&c=jiW8E5uSGc1XUONuoe9paRrySjpVkXJOKBXgSN5Ovw8=",
      dono: donos[2].nome,
      favorito: false,
    },
  ];

  // const [petsIniciais, setPetsIniciais] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8080/pets")
  //     .then((resposta) => resposta.json())
  //     .then((dados) => {
  //       setPetsIniciais(dados);
  //     })
  // }, []);

  // const [pets, setPets] = useState(iniciais);
  const [pets, dispatchPet] = useReducer(reducerPet, iniciais);

  // const aoNovoPetAdicionado = (pet) => {
  //   setPets([...pets, pet]);
  // };

  const aoNovoPetAdicionado = (pet) => {
    dispatchPet({
      tipo: ADICIONAR_PET,
      pet: pet,
    });
  };

  // function deletarPet(id) {
  //   setPets(
  //     pets.filter((pet) => pet.id !== id)
  //   );
  // }

  function deletarPet(id) {
    dispatchPet({
      tipo: EXCLUIR_PET,
      id,
    });
  }

  // function resolverFavorito(id) {
  //   setPets(
  //     pets.map((pet) => {
  //       if (pet.id === id) pet.favorito = !pet.favorito;
  //       return pet;
  //     })
  //   );
  // }

  function resolverFavorito(id) {
    dispatchPet({
      tipo: FAVORITAR_DESFAVORITAR,
      id,
    });
  }

  // function mudarCorDoDono(cor, id) {
  //   setDonos(
  //     donos.map((dono) => {
  //       if (dono.id === id) {
  //         dono.cor = cor;
  //       }
  //       return dono;
  //     })
  //   );
  // }

  function mudarCorDoDono(cor, id) {
    dispatchDonos({
      tipo: MUDAR_COR,
      cor,
      id,
    });
  }

  // function cadastrarNovoDono(novoDono) {
  //   setDonos([...donos, { ...novoDono, id: uuidv4() }]);
  // }

  function cadastrarNovoDono(novoDono) {
    dispatchDonos({
      tipo: ADICIONAR_NOVO_DONO,
      novoDono,
    });
  }

  const [showForm, setShowForm] = useState(true);
  function showOrHide() {
    setShowForm(!showForm);
  }

  return (
    <div className="App">
      <Banner />
      {showForm && (
        <Formulario
          cadastrarNovoDono={cadastrarNovoDono}
          donos={donos.map((dono) => dono.nome)}
          aoPetCadastrado={(pet) => aoNovoPetAdicionado(pet)}
        />
      )}
      <Botao showOrHide={showOrHide} botaoShowHideForm={"botao--ShowHide"}>
        <img
          src="imagens/botao.png"
          alt=""
          style={{ width: "64px", verticalAlign: "top" }}
        />
      </Botao>

      <section className="donos">
        <h1>Minha Organização</h1>
        {donos.map((dono) => (
          <Dono
            key={dono.nome}
            dono={dono}
            pets={pets.filter((pet) => pet.dono === dono.nome)}
            aoDeletar={deletarPet}
            mudarCor={mudarCorDoDono}
            aoFavoritar={resolverFavorito}
          />
        ))}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
