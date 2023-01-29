import { ReactComponent as Devices } from "src/assets/devices.svg";

import SectionTitle from "src/components/SectionTitle";

import firstIconTitle from "src/assets/first-icon.png";
import secondIconTitle from "src/assets/second-icon.png";
import thirdIconTitle from "src/assets/third-icon.png";

import "./index.scss";

export default function ProductUsage() {
  return (
    <section className="product-usage">
      <div className="container">
        <div className="product-usage-content">
          <SectionTitle title="Product is being used with great effects alongside:" />
          <div className="product-usage-columns">
            <div className="product-usage-left">
              <Devices width="100%" height="100%" />
            </div>
            <div className="product-usage-right">
              <div className="usage">
                <div className="icon-title">
                  <img src={firstIconTitle} alt="" />
                  <h3 className="usage-title">Enterpreneur</h3>
                </div>
                <p className="usage-text">
                  Product is a great way to help medium and samall enterprise
                  owners achieve their goals
                </p>
              </div>
              <div className="usage">
                <div className="icon-title">
                  <img src={secondIconTitle} alt="" />
                  <h3 className="usage-title">Enterpreneur</h3>
                </div>
                <p className="usage-text">
                  Product is a great way to help medium and samall enterprise
                  owners achieve their goals
                </p>
              </div>
              <div className="usage">
                <div className="icon-title">
                  <img src={thirdIconTitle} alt="" />
                  <h3 className="usage-title">Enterpreneur</h3>
                </div>
                <p className="usage-text">
                  Product is a great way to help medium and samall enterprise
                  owners achieve their goals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
