import SectionTitle from "src/components/SectionTitle";
import Button from "src/components/Button";

import "./index.scss";

export default function CTA() {
  return (
    <section className="call-to-action">
      <div className="container">
        <div className="call-to-action-content">
          <h4>ENTERPRISE</h4>
          <SectionTitle
            title="Are you interested  in a custom-tailored plan?"
            subtitle="Product is a set of advanced features for really large teams with projects."
          />
          <Button size="small" variant="filled">
            Get in touch with us
          </Button>
        </div>
      </div>
    </section>
  );
}
