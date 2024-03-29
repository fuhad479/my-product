import { useContext } from "react";

import { AppContext } from "src/context";

import { ReactComponent as LightLogo } from "src/assets/logo-light.svg";
import { ReactComponent as DarkLogo } from "src/assets/logo-dark.svg";
import { ReactComponent as FacebookIcon } from "src/assets/facebook.svg";
import { ReactComponent as InstagramIcon } from "src/assets/instagram.svg";
import { ReactComponent as TwitterIcon } from "src/assets/twitter.svg";

import Button from "../Button";

import "./index.scss";

export default function Footer() {
  const { theme } = useContext(AppContext);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="social-icons">
            <div className="logo">
              {theme === "dark" ? <DarkLogo /> : <LightLogo />}
            </div>
            <div className="icons">
              <div className="social-icon">
                <InstagramIcon width={25} height={25} color="#02897A" />
              </div>
              <div className="social-icon">
                <FacebookIcon width={25} height={25} color="#02897A" />
              </div>
              <div className="social-icon">
                <TwitterIcon width={25} height={25} color="#02897A" />
              </div>
            </div>
          </div>
          <div className="footer-menu">
            <h4 className="footer-menu-title">Resource</h4>
            <ul>
              <li>About Us</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="footer-menu">
            <h4 className="footer-menu-title">Legal Stuff</h4>
            <ul>
              <li>Disclaimer</li>
              <li>Financing</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div className="newsletter-form">
            <h4 className="footer-menu-title">
              knowing you're always on the best energy deal.{" "}
            </h4>
            <input type="text" />
            <Button size="small" variant="filled">
              Sign up Now
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
