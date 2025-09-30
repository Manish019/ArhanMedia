import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ComingSoon from "./pages/ComingSoon";
import cities from "./Data/City.js";



import './App.css'

function App() {

  return (
  <BrowserRouter>
<div className="flex flex-col min-h-screen">
<Navbar />
<main className="flex-grow">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/services" element={<Services />} />
<Route path="/portfolio" element={<Portfolio />} />
<Route path="/contact" element={<Contact cities={cities} />} />
<Route path="*" element={<NotFound />} />
{/* <Route path="/coming-soon" element={<ComingSoon />} /> */}

</Routes>
{/* <ComingSoon /> */}
</main>
{/* <Footer /> */}
</div>
</BrowserRouter>
  )
}

export default App
