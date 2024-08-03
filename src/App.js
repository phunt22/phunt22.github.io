import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
// import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Experience from './pages/Experience.js';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
import Awards from './pages/Awards';
// import Projects from './pages/experiences/Projects.js'
// import Favorites from './pages/Favorites.js'

// import { Link } from 'react-router-dom';
// import NotFound from './pages/NotFound';
// import Thoughts from './pages/Thoughts';
// import Wins from './pages/Wins';
// import Experience from './pages/Experience';
// import WorkExp from './pages/experiences/WorkExp';
// import Awards from './pages/experiences/Awards';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <NavBar />
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>





function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />

        <Route path='experience/work' element={<Experience />} />
        <Route path='experience/projects' element={<Projects />} />
        <Route path='awards' element={<Awards />} />

      </Routes>
    </BrowserRouter>
  );
}


export default App;
