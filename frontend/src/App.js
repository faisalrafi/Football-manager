import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
