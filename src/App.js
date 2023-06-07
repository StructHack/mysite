import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Navigation from './components/Navigation';
import Findings from './components/Findings';
import Projects from './components/Projects';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<AboutMe/>}/>
        <Route path='/about' element={<AboutMe/>}/>
        <Route path='/findings' element={<Findings/>}/>
        <Route path='/projects' element={ <Projects/> }/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
