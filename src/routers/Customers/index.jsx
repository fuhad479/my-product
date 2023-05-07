import { useEffect } from "react";

import { Helmet, HelmetProvider } from "react-helmet-async";

import Clients from "./components/Clients";
import WhyChoose from "./components/WhyChoose";
import Steps from "./components/Steps";

export default function Customers() {
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>MyProduct - Customers</title>
      </Helmet>
      <Clients />
      <WhyChoose />
      <Steps />
    </HelmetProvider>
  );
}
