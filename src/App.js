import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Favorites from './pages/Favorites';
import FavoritesYear from './pages/FavoritesYear';
import SeattleBeer from './pages/SeattleBeer';
import SeattleCoffee from './pages/SeattleCoffee';
import Thoughts from './pages/Thoughts';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/favorites/beer" element={<SeattleBeer />} />
        <Route path="/favorites/coffee" element={<SeattleCoffee />} />
        <Route path="/favorites/:year" element={<FavoritesYear />} />
        <Route path="/thoughts" element={<Thoughts />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
