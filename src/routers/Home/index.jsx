import { Helmet, HelmetProvider } from "react-helmet-async";

import Hero from "./components/Hero";
import Features from "./components/Features";
import Management from "./components/Management";
import CustomerSupport from "./components/CustomerSupport";
import Collaborative from "./components/Collaborative";
import Members from "./components/Members";
import Blogs from "./components/Blogs";
import PricingTable from "./components/PricingTable";
import Review from "./components/Review";

export default function Home() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>MyProduct - Home</title>
      </Helmet>
      <Hero />
      <Features />
      <Management />
      <CustomerSupport />
      <Collaborative />
      <Members />
      <Blogs />
      <PricingTable />
      <Review />
    </HelmetProvider>
  );
}
