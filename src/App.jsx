import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import Modal from './components/Modal';
import ToastContainer from './components/Toast';
import Home from './routes/Home';
import About from './routes/About';
import Gallery from './routes/Gallery';
import Contact from './routes/Contact';
import Register from './routes/Register';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-950 text-white">
        <Navbar />
        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={
                <div className="min-h-screen flex items-center justify-center pt-20">
                  <div className="text-center">
                    <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
                    <p className="text-xl text-gray-400 mb-8">Page not found</p>
                    <a href="/" className="btn-primary inline-block cursor-hover">
                      Return Home
                    </a>
                  </div>
                </div>
              } />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <Cursor />
        <Modal />
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
