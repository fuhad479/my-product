import SectionTitle from "src/components/SectionTitle";

import airbnbLogo from "src/assets/airbnb-logo.png";
import googleLogo from "src/assets/google-logo.png";
import microsoftLogo from "src/assets/microsoft-logo.png";
import fedexLogo from "src/assets/fedex-logo.png";

import "./index.scss";

export default function Clients() {
  return (
    <section className="customers">
      <div className="container">
        <div className="customers-content">
          <SectionTitle>Our Clients</SectionTitle>
          <div className="client-list">
            <div className="client-item">
              <img src={airbnbLogo} alt="" />
            </div>
            <div className="client-item">
              <img src={googleLogo} alt="" />
            </div>
            <div className="client-item">
              <img src={microsoftLogo} alt="" />
            </div>
            <div className="client-item">
              <img src={fedexLogo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
