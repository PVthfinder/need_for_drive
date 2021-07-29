import React from "react";

import Slider from "./components/Slider/index.jsx";
import Menu from "./components/Menu/index.jsx";
import Home from "./components/pages/Home.jsx";
import Header from "./components/layouts/Header.jsx";
import Footer from "./components/layouts/Footer.jsx";

import slide1 from './assets/images/bck_car_1.png';
import slide2 from './assets/images/bck_car_2.png';
import slide3 from './assets/images/bck_car_3.png';
import slide4 from './assets/images/bck_car_4.png';

function App() {

  const images = [
    {
      heading: "Бесплатная парковка",
      desc: "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.",
      img: <img src={slide1} alt="slide1"/>,
      color: "green"
    },
    {
      heading: "Страховка",
      desc: "Полная страховка страховка автомобиля.",
      img: <img src={slide2} alt="slide2"/>,
      color: "blue"
    },
    {
      heading: "Бензин",
      desc: "Полный бак на любой заправке города за наш счёт",
      img: <img src={slide3} alt="slide3"/>,
      color: "red"
    },
    {
      heading: "Обслуживание",
      desc: "Автомобиль проходит еженедельное ТО.",
      img: <img src={slide4} alt="slide4"/>,
      color: "purple"
    }
  ];

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
