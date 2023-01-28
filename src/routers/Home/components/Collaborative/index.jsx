import { ReactComponent as ImageFolder } from "src/assets/image-folder.svg";

import SectionTitle from "../../../../components/SectionTitle";

import "./index.scss";

export default function Collaborative() {
  return (
    <section className="collaborative">
      <div className="container">
        <div className="collaborative-content">
          <div className="collaborative-left">
            <ImageFolder width="100%" height="100%" />
          </div>
          <div className="collaborative-right">
            <h4 className="subtitle">Optimisation for</h4>
            <SectionTitle title="Collaborative" />
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
