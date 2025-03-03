import HomePage from "./HomePage"
import Demo from "./Demo"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Careers from "./pages/Careers"
import Company from "./pages/Company"
import NavBar from "./components/NavBar"
import NotFound from "./pages/NotFound"
import About from "./pages/About"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from "./pages/Contact"
import Footer2 from "./components/Footer2"
import Solutions from "./pages/Solutions"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



// import IndustryCarousel from "./Car"
function App() {



  return (
    <>



      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer2 />

      </Router>









    </>
  )
}

export default App
