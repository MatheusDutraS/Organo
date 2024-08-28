import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  const aoEscolher = (evento) => {
    props.aoAlterar(evento.target.value);
  };

  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select
        onChange={aoEscolher}
        required={props.required}
        value={props.valor}
      >
        <option value=""></option>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
