import { ReactComponent as PointerIcon } from "src/assets/pointer.svg";
import { ReactComponent as StumbleuponIcon } from "src/assets/stumbleupon.svg";
import { ReactComponent as HeartIcon } from "src/assets/heart.svg";
import { ReactComponent as HourglassIcon } from "src/assets/hourglass.svg";

import SectionTitle from "src/components/SectionTitle";
import Icon from "src/components/Icon";
import Button from "src/components/Button";

import "./index.scss";

export default function Features() {
  return (
    <section className="features">
      <div className="container">
        <div className="features-content">
          <SectionTitle title="Product was Built Specifically for You" />
          <div className="features-list">
            <div className="features-item">
              <Icon>
                <PointerIcon width={16} height={16} fill="#FFF" />
              </Icon>
              <h3 className="feature-title">First click test</h3>
              <p className="feature-desc">
                While most people enjoy casino gambling,
              </p>
            </div>
            <div className="features-item">
              <Icon>
                <StumbleuponIcon width={16} height={16} fill="#FFF" />
              </Icon>
              <h3 className="feature-title">Design surveys</h3>
              <p className="feature-desc">
                Sports betting, lottery and bingo playing for the fun{" "}
              </p>
            </div>
            <div className="features-item">
              <Icon>
                <HeartIcon width={16} height={16} fill="#FFF" />
              </Icon>
              <h3 className="feature-title">Preference tests</h3>
              <p className="feature-desc">
                The Myspace page defines the individual.{" "}
              </p>
            </div>
            <div className="features-item">
              <Icon>
                <HourglassIcon width={16} height={16} fill="#FFF" />
              </Icon>
              <h3 className="feature-title">Five second tests</h3>
              <p className="feature-desc">
                Personal choices and the overall personality of the person.{" "}
              </p>
            </div>
          </div>
          <Button size="large" variant="filled">
            Sign up now
          </Button>
        </div>
      </div>
    </section>
  );
}
