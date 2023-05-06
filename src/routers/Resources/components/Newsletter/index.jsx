import { useContext } from "react";

import { AppContext } from "src/context";

import chatbot from "src/assets/chatbot.png";

import "./index.scss";

export default function Newsletter() {
  const { theme } = useContext(AppContext);

  return (
    <div className={`newsletter ${theme ? "dark" : ""}`}>
      <div className="container">
        <div className="newsletter-content">
          <div className="newsletter-left">
            <h1 className="newsletter-title">
              Great Business made with Product.
            </h1>
            <p className="newsletter-brief">
              Build better customer relationships easily messaging that provides
              a more personal experience for you and your customers.
            </p>
            <div className="newsletter-field">
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Enter your email adress"
              />
              <button type="button" className="btn">
                Join Now
              </button>
            </div>
            <div className="our-members">
              <div className="avatars">
                <img
                  src={
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  }
                  alt=""
                />
                <img
                  src={
                    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  }
                  alt=""
                />
                <img
                  src={
                    "https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=912&q=80"
                  }
                  alt=""
                />
              </div>
              <span>
                Join over <span>4,000+</span> other
              </span>
            </div>
          </div>
          <div className="newsletter-right">
            <img src={chatbot} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
