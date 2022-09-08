import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';


function App() {
    return (
        <>
            <Header name="BizAds - Board" />

            <Routes>
                <Route path='/' element={<Menu />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
            </Routes>

            <div className="col">
        <Footer/>
      </div>
        </>
    );
}

export default App;
