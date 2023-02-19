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
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/view?key=${process.env.REACT_APP_MAPS_API_KEY}&zoom=13&center=22.8459799,89.5382598&maptype=roadmap`}
        ></iframe>
      </div>
    </section>
  );
}
