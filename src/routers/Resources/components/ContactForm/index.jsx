import SectionTitle from "src/components/SectionTitle";
import Button from "src/components/Button";

import "./index.scss";

export default function ContactForm() {
  return (
    <section className="contact-form">
      <div className="container">
        <div className="contact-form-content">
          <SectionTitle title="Send a message" />
          <form>
            <input type="text" name="name" id="name" placeholder="Your Name" />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
            />
            <textarea name="message" id="message" placeholder="Your Message" />
            <Button size="small" variant="filled">Send</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
