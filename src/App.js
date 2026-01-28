import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AnimatePresence } from 'framer-motion';
import CleanHome from './pages/CleanHome';
import Projects from './pages/Projects';
import Favorites from './pages/Favorites';
import FavoritesYear from './pages/FavoritesYear';
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
          <Route path="/favorites" element={
            <div className='min-h-screen flex flex-col cursor-auto hide-scrollbar'>
              <Navbar />
              <main className='flex-1'>
                <Favorites />
              </main>
              <Footer />
            </div>
          } />
          <Route path="/favorites/:year" element={
            <div className='min-h-screen flex flex-col cursor-auto hide-scrollbar'>
              <Navbar />
              <main className='flex-1'>
                <FavoritesYear />
              </main>
            </div>
          } />
        </Routes>
      </AnimatePresence>
    </HashRouter>
  );
}

export default App;
