import "./Botao.css";

const Botao = (props) => {
  return (
    <button
      onClick={props.showOrHide}
      className={`botao ${props.botaoShowHideForm}`}
    >
      {props.children}
    </button>
  );
};

export default Botao;
