import { useEffect } from "react";

import { Helmet, HelmetProvider } from "react-helmet-async";

import PricingTable from "../Home/components/PricingTable";
import CTA from './CTA'
import ProductUsage from "./ProductUsage";
import FAQ from "./FAQ";

export default function Pricing() {
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>MyProduct - Pricing</title>
      </Helmet>
      <PricingTable />
      <CTA />
      <ProductUsage />
      <FAQ />
    </HelmetProvider>
  );
}
