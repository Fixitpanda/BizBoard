import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Menu from './Components/Board';
import Services from './Components/Services';
import About from './Components/About';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';




function App() {
    return (
        <>
            <ScrollToTop/>
            <Header name="BizAds - Board" />
            <Routes>
                <Route path='/' element={<Menu />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
