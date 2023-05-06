import { useContext } from "react";

import { AppContext } from "src/context";

import { StarIcon } from "@radix-ui/react-icons";

import "./index.scss";

export default function ReviewCard() {
  const { theme } = useContext(AppContext);

  return (
    <div className={`review-card ${theme === "dark" ? "dark" : ""}`}>
      <div className="rating">
        <div className="star-icon">
          <StarIcon width={18} height={18} color="#F3CD03" />
        </div>
        <div className="star-icon">
          <StarIcon width={18} height={18} color="#F3CD03" />
        </div>
        <div className="star-icon">
          <StarIcon width={18} height={18} color="#F3CD03" />
        </div>
        <div className="star-icon">
          <StarIcon width={18} height={18} color="#F3CD03" />
        </div>
        <div className="star-icon">
          <StarIcon width={18} height={18} color="#F3CD03" />
        </div>
      </div>
      <p className="review-text">
        Product helps you see how many more days you need to work to reach your
        financial goal.
      </p>
      <div className="review-provider">
        <div className="avatar">
          <img
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            alt="Review provider's avatar"
          />
        </div>
        <div className="review-provider-info">
          <div className="review-provider-name">Wahid Ari</div>
          <div className="review-provider-role">Designer</div>
        </div>
      </div>
    </div>
  );
}
