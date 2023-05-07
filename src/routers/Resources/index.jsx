import { useEffect } from "react";

import { Helmet, HelmetProvider } from "react-helmet-async";

import Newsletter from "./components/Newsletter";
import Blogs from "./components/Blogs";
import Maps from "./components/Maps";
import ContactForm from "./components/ContactForm";

export default function Resources() {
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>MyProduct - Resources</title>
      </Helmet>
      <Newsletter />
      <Blogs />
      <Maps />
      <ContactForm />
    </HelmetProvider>
  );
}
