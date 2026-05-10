import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import CleanHome from './pages/CleanHome';
import Home from './pages/Home';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={
          <div className='min-h-screen flex flex-col'>
            {/* <CleanHome /> */}
            <Home />
          </div>
        } />
      </Routes>
    </HashRouter>
  );
}

export default App;
