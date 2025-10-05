import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ComingSoon from "./pages/ComingSoon";
import cities from "./Data/City.js";
import Team from "./pages/Team";
import teamMembers from "./Data/Team.js";
// console.log(services);


import './App.css'
import CreativeDesign from "./pages/CreativeDesign.jsx";
import PressRealese from "./pages/PressRealese.jsx";

function App() {

  return (
  <BrowserRouter>
   <Navbar />
<main className="flex-grow">

<Routes>
<Route path="/" element={<Home />} />
 <Route path="/about" element={<About />}>
          {/* Nested route */}
        </Route>
        <Route path="/about/team" element={<Team teamMembers={teamMembers} />} />
         <Route path="/work" element={<Work />}></Route>
          {/* Nested route */}
        <Route path="clients" element={<Clients />} />
<Route path="/work/creative-design" element={<CreativeDesign />} />
<Route path="/about/press-release" element={<PressRealese />} />



<Route path="/connect-us" element={<Contact cities={cities} />} />
<Route path="*" element={<NotFound />} />
{/* <Route path="/coming-soon" element={<ComingSoon />} /> */}

</Routes>
{/* <ComingSoon /> */}
</main>
<Footer />
</BrowserRouter>
  )
}

export default App
