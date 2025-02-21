import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroPage from './components/HeroPage';
import Skills from './components/Skills';
import Projects from './components/Projects';
function App() {
  return (
    <BrowserRouter>
     
      <Navbar />

      <Routes>
        <Route path="/" element={ <HeroPage />} />
        <Route path="/skills" element={< Skills />} />
        <Route path="/projects" element={< Projects />} />
        <Route path="/passion" element={<h1>Passion Page</h1>} />
        <Route path="/academics" element={<h1>Academics Page</h1>} />
        <Route path="/workexp" element={<h1>Work Experience Page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
