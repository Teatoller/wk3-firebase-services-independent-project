export const Button = ({ children, onClick, style = {} }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "8px 16px",
        backgroundColor: "#2563eb",
        color: "white",
        borderRadius: "4px",
        border: "none",
        cursor: "pointer",
        transition: "background-color 0.2s ease-in-out",
        ...style,
      }}
      onMouseOver={(e) => (e.target.style.backgroundColor = "#1d4ed8")}
      onMouseOut={(e) => (e.target.style.backgroundColor = "#2563eb")}
    >
      {children}
    </button>
  );
};

export const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  style = {},
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        width: "100%",
        padding: "8px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        marginBottom: "4px",
        ...style,
      }}
    />
  );
};
