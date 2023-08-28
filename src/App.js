import './App.css';
import './AppMediaQueries.css'
import Home from './components/routes/Home';
import About from './components/routes/About'
import Menu from './components/routes/Menu'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/menu' element={<Menu />} />
          </Routes>
          <div className='horizontal_line'></div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;