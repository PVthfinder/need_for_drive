import React from "react";

import Slider from "./components/Slider/index.jsx";
import Menu from "./components/Menu/index.jsx";
import Home from "./components/pages/Home.jsx";
import Header from "./components/layouts/Header.jsx";
import Footer from "./components/layouts/Footer.jsx";

import {images} from './assets/db';

function App() {
  return (
    <div className="app">
      <Menu/>
      <div className="home_page">
        <Header/>
        <Home/>
        <Footer/>
      </div>
      <Slider slides={images}/>
    </div>
  );
}

export default App;
