import { useContext } from "react";

import { AppContext } from "src/context";

import "./index.scss";

export default function Button({ children, size, variant, onClick }) {
  const { theme } = useContext(AppContext);

  const buttonSize = size === "small" ? "button-small" : "button-large";
  const buttonVariant =
    variant === "outlined" ? "button-outlined" : "button-filled";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`button ${buttonSize} ${buttonVariant} ${
        theme === "dark" ? "dark" : ""
      }`}
    >
      {children}
    </button>
  );
}
