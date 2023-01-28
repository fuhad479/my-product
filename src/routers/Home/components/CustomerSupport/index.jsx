import { ReactComponent as SearchEngines } from "src/assets/search-engines.svg";
import { CheckIcon } from "@radix-ui/react-icons";

import SectionTitle from "../../../../components/SectionTitle";

import "./index.scss";

export default function CustomerSupport() {
  return (
    <section className="customer-support">
      <div className="container">
        <div className="customer-support-content">
          <div className="customer-support-left">
            <SearchEngines width="100%" height="100%" />
          </div>
          <div className="customer-support-right">
            <h4 className="subtitle">Easier decision making for</h4>
            <SectionTitle title="Customer Support" />
            <p className="">
              The Myspace page defines the individual, his or her
              characteristics, traits, personal choices and the overall
              personality of the person.{" "}
            </p>
            <br />
            <div className="checkbox-list">
              <div className="checkbox-item">
                <div className="icon">
                  <CheckIcon width={20} height={20} color="#FFF" />
                </div>
                <p>Never worry about overpaying for your energy again. </p>
              </div>
              <div className="checkbox-item">
                <div className="icon">
                  <CheckIcon width={20} height={20} color="#FFF" />
                </div>
                <p>
                  We will only switch you to energy companies that we trust and
                  will treat you right
                </p>
              </div>
              <div className="checkbox-item">
                <div className="icon">
                  <CheckIcon width={20} height={20} color="#FFF" />
                </div>
                <p>
                  We track the markets daily and know where the savings are.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
