import { useEffect, useState, useContext } from "react";

import { Routes, Route } from "react-router-dom";

import { AppContext } from "./context";

import Header from "src/components/Header";
import Home from "src/routers/Home";
import Customers from "src/routers/Customers";
import Pricing from "src/routers/Pricing";
import Resources from "src/routers/Resources";
import MobileNav from "src/components/MobileNav";
import Footer from "src/components/Footer";

function App() {
  const [open, setOpen] = useState(false);

  const { theme } = useContext(AppContext);

  window.ontouchmove = (event) => {
    event.view.moveBy(0, 0);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

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
