const InputGroup = (props) => {
  //   const { title, type, placeholder, name } = props;
  const label = props.label;
  const type = props.type;
  const placeholder = props.placeholder;
  const name = props.name;

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <label
          htmlFor={name}
          style={{
            fontFamily: "Arial",
            fontSize: "17px",
            color: "#292121ff",
          }}
        >
          {label}
        </label>
        <input
          style={{
            padding: "0.5rem 1rem",
            border: "1px solid #333",
            borderRadius: "5px",
            outline: "none",
            marginBottom: "1rem",
          }}
          type={type}
          placeholder={placeholder}
          id={name}
        />
      </div>
    </div>
  );
};

export default InputGroup;
