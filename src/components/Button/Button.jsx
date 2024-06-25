import "./button.scss";

export const Button = ({
  children,
  onClick,
  disabled = false,
  type = "button",
}) => {
  return (
    <button
      className="app-button"
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
