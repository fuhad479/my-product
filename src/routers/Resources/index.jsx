import { Helmet, HelmetProvider } from "react-helmet-async";

import Header from "src/components/Header";
import Newsletter from "./components/Newsletter";
import Footer from "src/components/Footer";

export default function Resources() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>MyProduct - Resources</title>
      </Helmet>
      <Header />
      <Newsletter />
      <Footer />
    </HelmetProvider>
  );
}
