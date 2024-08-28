import "./Campo.css";

const Campo = ({
  type = "text",
  required,
  label,
  placeholder,
  valor,
  aoAlterar,
}) => {
  const aoDigitar = (evento) => {
    aoAlterar(evento.target.value);
  };

  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        value={valor}
        onChange={aoDigitar}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Campo;
