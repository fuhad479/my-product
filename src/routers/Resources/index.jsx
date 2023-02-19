import { Helmet, HelmetProvider } from "react-helmet-async";

import Header from "src/components/Header";
import Newsletter from "./components/Newsletter";
import Blogs from "./components/Blogs";
import Maps from "./components/Maps";
import ContactForm from "./components/ContactForm";
import Footer from "src/components/Footer";

export default function Resources() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>MyProduct - Resources</title>
      </Helmet>
      <Header />
      <Newsletter />
      <Blogs />
      <Maps />
      <ContactForm />
      <Footer />
    </HelmetProvider>
  );
}
