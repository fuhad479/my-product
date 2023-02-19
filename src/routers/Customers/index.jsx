import { Helmet, HelmetProvider } from "react-helmet-async";

import Clients from "./components/Clients";
import WhyChoose from "./components/WhyChoose";
import Steps from "./components/Steps";

export default function Customers() {
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
