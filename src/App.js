import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import Services from './components/Services';
import About from './components/About';

function App() {
    return (
        <>
            <Header name="BizAds - Board" />

            <Routes>
                <Route path='/' element={<Menu />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
            </Routes>
        </>
    );
}

export default App;
