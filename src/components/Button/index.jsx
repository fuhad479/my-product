import "./index.scss";

export default function Button({ children, size, variant }) {
  const buttonSize = size === "small" ? "button-small" : "button-large";
  const buttonVariant =
    variant === "outlined" ? "button-outlined" : "button-filled";

  return (
    <button type="button" className={`button ${buttonSize} ${buttonVariant}`}>
      {children}
    </button>
  );
}
