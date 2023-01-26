import { ReactComponent as Logo } from "../../assets/logo-light.svg";
import { ReactComponent as FacebookIcon } from "../../assets/facebook.svg";
import { ReactComponent as InstagramIcon } from "../../assets/instagram.svg";
import { ReactComponent as TwitterIcon } from "../../assets/twitter.svg";

import Button from "../Button";

import "./index.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="social-icons">
            <div className="logo">
              <Logo width="100%" />
            </div>
            <div className="icons">
              <div className="icon">
                <InstagramIcon width={25} height={25} color="#02897A" />
              </div>
              <div className="icon">
                <FacebookIcon width={25} height={25} color="#02897A" />
              </div>
              <div className="icon">
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
            <Button size="small" variant="filled">Sign up Now</Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
