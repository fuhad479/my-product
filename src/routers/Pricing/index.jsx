import { Helmet, HelmetProvider } from "react-helmet-async";

import Header from "src/components/Header";
import Footer from "src/components/Footer";

export default function Pricing() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>MyProduct - Pricing</title>
      </Helmet>
      <Header />
      <Footer />
    </HelmetProvider>
  );
}
