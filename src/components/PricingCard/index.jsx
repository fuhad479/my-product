import Button from "../Button";

import "./index.scss";

export default function PricingCard({
  plan,
  brief,
  planAmount,
  planDuration,
  children,
}) {
  return (
    <div className="pricing-card">
      <h3 className="plan-title">{plan}</h3>
      <p className="plan-brief">{brief}</p>
      <div className="pricing">
        <p className="price">{planAmount}</p>
        <div className="plan-duration">
          <span className="currency">$</span>
          <span className="plan-type">{planDuration}</span>
        </div>
      </div>
      {children}
      <Button size="small" variant="filled">Order Now</Button>
    </div>
  );
}
