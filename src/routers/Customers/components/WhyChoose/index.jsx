import { ReactComponent as PointerIcon } from "src/assets/pointer.svg";
import { ReactComponent as StumbleuponIcon } from "src/assets/stumbleupon.svg";
import { ReactComponent as HeartIcon } from "src/assets/heart.svg";

import SectionTitle from "src/components/SectionTitle";
import Card from "./Card";

import "./index.scss";

export default function WhyChoose() {
  return (
    <section className="why-choose">
      <div className="container">
        <div className="why-choose-content">
          <SectionTitle title="Why Choose Product?" />
          <div className="choose-list">
            <div className="choose-item">
              <Card icon={<PointerIcon width={16} height={16} fill="#FFF" />} />
            </div>
            <div className="choose-item">
              <Card
                icon={<StumbleuponIcon width={16} height={16} fill="#FFF" />}
              />
            </div>
            <div className="choose-item">
              <Card icon={<HeartIcon width={16} height={16} fill="#FFF" />} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
