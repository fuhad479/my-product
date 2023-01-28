import SectionTitle from "../../../../components/SectionTitle";
import Button from "../../../../components/Button";

import "./index.scss";

export default function Members() {
  return (
    <section className="members">
      <div className="container">
        <div className="members-content">
          <SectionTitle
            title="Quick & Easy Process"
            subtitle="Do you require some help for your project: Conception workshop, prototyping, marketing strategy, landing page, Ux/UI?"
          />
          <div className="members-list">
            <div className="member-item">
              <div className="avatar">
                <img
                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt=""
                />
              </div>
              <div className="motive">I can take care of your pitch</div>
            </div>
            <div className="member-item">
              <div className="avatar">
                <img
                  src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <div className="motive">I can prototype your app</div>
            </div>
          </div>
          <div className="members-list">
            <div className="member-item">
              <div className="avatar">
                <img
                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt=""
                />
              </div>
              <div className="motive">I can take care of your pitch</div>
            </div>
            <div className="member-item">
              <div className="avatar">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt=""
                />
              </div>
              <div className="motive">I can prototype your app</div>
            </div>
          </div>
          <Button>Contact our expert</Button>
        </div>
      </div>
    </section>
  );
}
