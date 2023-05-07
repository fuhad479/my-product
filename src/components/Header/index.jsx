import { useContext } from "react";

import { Link } from "react-router-dom";

import { AppContext } from "src/context";
import {
  HamburgerMenuIcon,
  Cross1Icon,
  SunIcon,
  MoonIcon,
} from "@radix-ui/react-icons";
import { ReactComponent as LightLogo } from "src/assets/logo-light.svg";
import { ReactComponent as DarkLogo } from "src/assets/logo-dark.svg";

import Button from "../Button";

import "./index.scss";

export default function Header({ open, setOpen, setSignup, setSignin }) {
  const { theme, setTheme } = useContext(AppContext);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 80) {
      document.querySelector("header").classList.add("sticky");
    } else {
      document.querySelector("header").classList.remove("sticky");
    }
  });

  return (
    <header
      className={`header ${window.scrollY >= 80 ? "sticky" : ""} ${
        theme === "dark" ? "dark" : ""
      }`}
    >
      <div className="container">
        <div className="header-content">
          <div className="logo">
            {theme === "dark" ? <DarkLogo /> : <LightLogo />}
          </div>
          <div className="navigation-wrapper">
            <nav className="navigation">
              <ul className="navigation-list">
                <li className="navigation-item">
                  <Link to="/">Product</Link>
                </li>
                <li className="navigation-item">
                  <Link to="/customers">Customers</Link>
                </li>
                <li className="navigation-item">
                  <Link to="/pricing">Pricing</Link>
                </li>
                <li className="navigation-item">
                  <Link to="/resources">Resources</Link>
                </li>
              </ul>
              <div className="button-group">
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => setSignin((s) => !s)}
                >
                  Sign In
                </Button>
                <Button
                  size="small"
                  variant="filled"
                  onClick={() => setSignup((s) => !s)}
                >
                  Sign Up
                </Button>
                <button
                  type="button"
                  className="theme-toggler-icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  {theme === "dark" ? <SunIcon /> : <MoonIcon />}
                </button>
              </div>
            </nav>
            <button
              type="button"
              className="hamburger-icon"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <Cross1Icon width={25} height={25} />
              ) : (
                <HamburgerMenuIcon width={25} height={25} />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
