import { Helmet, HelmetProvider } from "react-helmet-async";

import Header from "src/components/Header";
import Clients from "./components/Clients";
import WhyChoose from "./components/WhyChoose";
import Steps from "./components/Steps";
import Footer from "src/components/Footer";

export default function Customers() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>MyProduct - Customers</title>
      </Helmet>
      <Header />
      <Clients />
      <WhyChoose />
      <Steps />
      <Footer />
    </HelmetProvider>
  );
}
