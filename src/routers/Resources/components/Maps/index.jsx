import SectionTitle from "src/components/SectionTitle";

import './index.scss'

export default function Maps() {
  return (
    <section className="maps">
      <div className="container">
        <SectionTitle
          title="Contact Us"
          subtitle="Need more detailed information? Get in touch with us."
        />
        <iframe
          width="100%"
          height="325"
          title="map"
          style={{ border: 0 }}
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBrrBcRMgKM96kFBiOTJH3SEbXMKk4jYFU
    &q=Space+Needle,Seattle+WA"
        ></iframe>
      </div>
    </section>
  );
}
