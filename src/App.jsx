import { Routes, Route } from "react-router-dom";

import Home from './routers/Home'
import Customers from './routers/Customers'
import Pricing from './routers/Pricing'
import Resources from './routers/Resources'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/resources" element={<Resources />} />
    </Routes>
  );
}

export default App;
