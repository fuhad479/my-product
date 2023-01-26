import SectionTitle from "../SectionTitle";
import PricingCard from "../PricingCard";

import "./index.scss";

export default function PricingTable() {
  return (
    <section className="pricing-table">
      <div className="container">
        <div className="pricing-table-content">
          <SectionTitle>Price Table</SectionTitle>
          <p className="subtitle">We offer competitive price</p>
          <div className="pricing-list">
            <div className="pricing-item">
              <PricingCard
                plan="Free"
                brief="Brief price description"
                planAmount={0}
                planDuration="Per / month"
              >
                <ul>
                  <li>Only 2 Operators</li>
                  <li>Notifications</li>
                  <li>Landing Pages</li>
                </ul>
              </PricingCard>
            </div>
            <div className="pricing-item">
              <PricingCard
                plan="Standard"
                brief="Brief price description"
                planAmount={5}
                planDuration="Per / month"
              >
                <ul>
                  <li>5+ Operators</li>
                  <li>Notifications</li>
                  <li>Landing Pages</li>
                </ul>
              </PricingCard>
            </div>
            <div className="pricing-item">
              <PricingCard
                plan="Free"
                brief="Brief price description"
                planAmount={10}
                planDuration="Per / month"
              >
                <ul>
                  <li>10+ Operators</li>
                  <li>Notifications</li>
                  <li>Landing Pages</li>
                </ul>
              </PricingCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
