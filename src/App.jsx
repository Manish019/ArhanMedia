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
import Campiang from "./pages/Campiang.jsx";
import Aistudio from "./pages/Aistudio.jsx";
import Animation from "./pages/animation.jsx";
// console.log(services);


import './App.css'
import CreativeDesign from "./pages/CreativeDesign.jsx";
import PressRealese from "./pages/PressRealese.jsx";
import Videos from "./pages/Videos.jsx";
import Branding from "./pages/Branding.jsx";
import CGI from "./pages/CGI.jsx";

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
        <Route path="/about/press-release" element={<PressRealese />} />
        <Route path="/work/cgi" element={<CGI />} />
<Route path="/work/creative-design" element={<CreativeDesign />} />
<Route path="/about/press-release" element={<PressRealese />} />
<Route path="/work/videos" element={<Videos />} />
<Route path="/work/branding" element={<Branding />} />
<Route path="/work/campaign" element={<Campiang />} />
<Route path="/work/ai-studio" element={<Aistudio />} />
<Route path="/work/animation" element={<Animation />} />


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
