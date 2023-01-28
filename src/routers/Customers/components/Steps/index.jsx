import SectionTitle from "src/components/SectionTitle";

import stepOne from "src/assets/step-one.png";
import stepTwo from "src/assets/step-two.png";
import stepThree from "src/assets/step-three.png";

import "./index.scss";

export default function Steps() {
  return (
    <section className="steps">
      <div className="container">
        <div className="steps-content">
          <SectionTitle>How Product Work?</SectionTitle>
          <div className="steps-list">
            <div className="step-item step-one">
              <div className="step-preview">
                <img src={stepOne} alt="Macbook mockup" />
              </div>
              <div className="step-content">
                <span className="step-count">Step 1</span>
                <h3 className="step-title">Apply for a product</h3>
                <p className="step-brief">
                  Completing our easy step-by-step application form gives you
                  access to multiple business with multiple products. We analyse
                  your business through our proprietary credit analysis
                  technology.
                </p>
              </div>
            </div>
            <div className="step-item step-two">
              <div className="step-preview">
                <img src={stepTwo} alt="Macbook mockup" />
              </div>
              <div className="step-content">
                <span className="step-count">Step 2</span>
                <h3 className="step-title">Pay fully refundable</h3>
                <p className="step-brief">
                  Product will contactting you instantly to receive payment of
                  the Application Fee. if no offer of product is available, your
                  fee will be fully refunded.
                </p>
              </div>
            </div>
            <div className="step-item step-three">
              <div className="step-preview">
                <img src={stepThree} alt="Macbook mockup" />
              </div>
              <div className="step-content">
                <span className="step-count">Step 3</span>
                <h3 className="step-title">Completion</h3>
                <p className="step-brief">
                  Product will continue to liase between borrower and manager to
                  procees and complete a quick and efficient settlement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
