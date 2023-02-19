import { useState } from "react";

import { Routes, Route } from "react-router-dom";

import Header from "src/components/Header";
import Home from "src/routers/Home";
import Customers from "src/routers/Customers";
import Pricing from "src/routers/Pricing";
import Resources from "src/routers/Resources";
import MobileNav from "src/components/MobileNav";
import Footer from "src/components/Footer";

function App() {
  const [open, setOpen] = useState(false);

  window.ontouchmove = (event) => {
    event.view.moveBy(0, 0);
  };

  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
        {open && <MobileNav open={open} setOpen={setOpen} />}
      </main>
      <Footer />
    </>
  );
}

export default App;
