import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <HashRouter>

      <div className='min-h-screen flex flex-col'>
        <Navbar />
        <main className='flex-1'>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
