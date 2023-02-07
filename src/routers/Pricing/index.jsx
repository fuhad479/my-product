import { Helmet, HelmetProvider } from "react-helmet-async";

import Header from "src/components/Header";
import PricingTable from "../Home/components/PricingTable";
import CTA from './CTA'
import ProductUsage from "./ProductUsage";
import FAQ from "./FAQ";
import Footer from "src/components/Footer";

export default function Pricing() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>MyProduct - Pricing</title>
      </Helmet>
      <Header />
      <PricingTable />
      <CTA />
      <ProductUsage />
      <FAQ />
      <Footer />
    </HelmetProvider>
  );
}
