import React, {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import Header from "./Layout/Header/Header";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/MainServices";
import About from "./Pages/About/About";
import Footer from "./Layout/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop/MainScrollToTop";
import Article from "./Pages/Article/Article";



function App() {
    return (
        <>
            <Header name="BizBoard v2"/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/article" element={<Article/>}/>
                <Route path="/services" element={<Services/>}/>
            </Routes>
            <ScrollToTop/>
            <Footer/>
        </>
    );
}

export default App;
