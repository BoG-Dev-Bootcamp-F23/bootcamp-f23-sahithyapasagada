import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import LinesPage from './pages/LinesPage';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path={"about"} element={<About />} />
            <Route path = "lines">
              <Route path=":lineColor" element={<LinesPage />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
