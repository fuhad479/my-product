import { Helmet, HelmetProvider } from "react-helmet-async";

import Header from "src/components/Header";
import Clients from "./components/Clients";
import Footer from "src/components/Footer";

export default function Customers() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>MyProduct - Customers</title>
      </Helmet>
      <Header />
      <Clients />
      <Footer />
    </HelmetProvider>
  );
}
