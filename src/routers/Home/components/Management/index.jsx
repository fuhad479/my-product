import { ReactComponent as Documents } from "src/assets/documents.svg";

import SectionTitle from "../../../../components/SectionTitle";

import "./index.scss";

export default function Management() {
  return (
    <section className="management">
      <div className="container">
        <div className="management-content">
          <div className="management-left">
            <Documents width="100%" height="100%" />
          </div>
          <div className="management-right">
            <h4 className="subtitle">Effortless Validation for</h4>
            <SectionTitle title="Management" />
            <p>
              The Myspace page defines the individual, his or her
              characteristics, traits, personal choices and the overall
              personality of the person.{" "}
            </p>
            <br />
            <div>
              <strong>Accessory makers</strong>
              <br />
              <p>
                While most people enjoy casino gambling, sports betting, lottery
                and bingo playing for the fun
              </p>
              <br />
              <strong>Alterationists</strong>
              <br />
              <p>
                If you are looking for a new way to promote your business that
                won't cost you more money,
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
