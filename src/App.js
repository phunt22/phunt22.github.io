import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AnimatePresence } from 'framer-motion';
import CleanHome from './pages/CleanHome';
import Projects from './pages/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <HashRouter>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={
            <div className='min-h-screen flex flex-col'>
              <CleanHome />
              <Footer />
            </div>
          } />
          <Route path="/projects" element={
            <div className='min-h-screen flex flex-col cursor-auto'>
              <Navbar />
              <main className='flex-1'>
                <Projects />
              </main>
              <Footer />
            </div>
          } />
        </Routes>
      </AnimatePresence>
    </HashRouter>
  );
}

export default App;
