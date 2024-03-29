import SectionTitle from "src/components/SectionTitle";
import PricingCard from "src/components/PricingCard";

import "./index.scss";

export default function PricingTable() {
  return (
    <section className="pricing-table">
      <div className="container">
        <div className="pricing-table-content">
          <SectionTitle
            title="Let’s get some real work done here."
            subtitle="Prodict is your perfect solution for working. Get started now for free"
          />
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
                plan="Premium"
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
