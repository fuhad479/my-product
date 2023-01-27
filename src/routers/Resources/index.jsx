import { Helmet, HelmetProvider } from "react-helmet-async";

import Header from "src/components/Header";
import Footer from "src/components/Footer";

export default function Resources() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>MyProduct - Resources</title>
      </Helmet>
      <Header />
      <Footer />
    </HelmetProvider>
  );
}
