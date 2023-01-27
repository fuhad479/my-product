import { PlayIcon } from "@radix-ui/react-icons";
import { ReactComponent as SocialMedia } from "src/assets/social-media.svg";

import Button from "src/components/Button";

import "./index.scss";


export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-left">
            <SocialMedia width="100%" height="100%" />
          </div>
          <div className="hero-right">
            <h1 className="hero-title">Work at the speed of thought</h1>
            <p className="hero-desc">
              Tools, tutorials, design and innovation experts, all in one place!
              The most intuitive way to imagine your next user experience.
            </p>
            <div className="hero-buttons">
              <Button size="large" variant="filled">
                Get started
              </Button>
              <button type="button">
                <PlayIcon width={20} height={20} color="#02897A" />
                <span>Watch the video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
