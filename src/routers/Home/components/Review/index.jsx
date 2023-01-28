import SectionTitle from "../../../../components/SectionTitle";
import ReviewCard from "../../../../components/ReviewCard";

import "./index.scss";

export default function Review() {
  return (
    <section className="review">
      <div className="container">
        <div className="review-content">
          <SectionTitle
            title="What Clients Say"
            subtitle="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics"
          />
          <div className="review-list">
            <div className="review-item">
              <ReviewCard />
            </div>
            <div className="review-item">
              <ReviewCard />
            </div>
            <div className="review-item">
              <ReviewCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
