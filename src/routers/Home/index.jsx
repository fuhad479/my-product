import Header from "../../components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Management from "./components/Management";
import CustomerSupport from "./components/CustomerSupport";
import Collaborative from "./components/Collaborative";
import Members from "./components/Members";
import Blogs from "./components/Blogs";
import PricingTable from "./components/PricingTable";
import Review from "./components/Review";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Management />
      <CustomerSupport />
      <Collaborative />
      <Members />
      <Blogs />
      <PricingTable />
      <Review />
      <Footer />
    </>
  );
}
