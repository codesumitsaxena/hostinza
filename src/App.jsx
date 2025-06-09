import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Choose from './Components/Choose';
import NavbarApp from './Components/NavbarApp';
import Pricing from './Components/Pricing';
import Services from './Components/Services';
import Platform from './Components/Platform';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import HeroSection from './Components/HeroSection';

function App() {
  return (
    <Router>
      <NavbarApp />
      <Routes>
        {/* Home Route */}
        <Route path="/" element={
          <>
            <HeroSection />
            <Choose />
            <Pricing />
            <Services />
            <Platform />
            <Footer />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
