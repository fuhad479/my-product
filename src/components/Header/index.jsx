import { Link } from "react-router-dom";

import { HamburgerMenuIcon, SunIcon } from "@radix-ui/react-icons";
import { ReactComponent as LightLogo } from "src/assets/logo-light.svg";

import Button from "../Button";

import "./index.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <LightLogo />
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
                {/* <li className="navigation-item">
                  <Link to="/resources">Resources</Link>
                </li> */}
              </ul>
              <div className="button-group">
                <Button size="small" variant="outlined">
                  Sign In
                </Button>
                <Button size="small" variant="filled">
                  Sign Up
                </Button>
                {/* <button type="button" className="theme-toggler-icon">
                  <SunIcon />
                </button> */}
              </div>
            </nav>
            <button type="button" className="hamburger-icon">
              <HamburgerMenuIcon width={25} height={25} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
