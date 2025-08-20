const bgColors = {
  primary: {
    backgroundColor: "#422ad5",
    color: "#fff",
  },
  success: {
    backgroundColor: "#00d390",
    color: "#000",
  },
  warning: {
    backgroundColor: "#fcb700",
    color: "#000",
  },

  info: {
    backgroundColor: "#00bafe",
    color: "#000",
  },
  error: {
    backgroundColor: "#ff637d",
    color: "#000",
  },
};

const Button = (props) => {
  const userColors = bgColors[props.variant];
  return (
    <button
      type={props.type}
      style={{
        padding: "0.5rem 1rem",
        outline: "none",
        border: "none",
        borderRadius: "5px",
        marginRight: "5px",
        fontSize: "14px",
        textTransform: "uppercase",
        letterSpacing: "1px",
        cursor: "pointer",
        ...userColors,
      }}
    >
      {props.text}
    </button>
  );
};

export default Button;
