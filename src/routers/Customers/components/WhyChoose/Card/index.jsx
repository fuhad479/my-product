import Icon from "src/components/Icon";

import "./index.scss";

export default function Card({ icon }) {
  return (
    <div className="why-choose-card">
      <Icon>{icon}</Icon>
      <h3 className="card-title">Special Business</h3>
      <p className="card-text">
        Product helps you see how many more days you need to work to reach your
        financial goal for the month and year.
      </p>
    </div>
  );
}
