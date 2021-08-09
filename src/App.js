import React from "react";

<<<<<<< Updated upstream
import Slider from "./components/Slider/index.jsx";
import Menu from "./components/Menu/index.jsx";
import Home from "./components/pages/Home.jsx";
import Header from "./components/layouts/Header.jsx";
import Footer from "./components/layouts/Footer.jsx";

import {images} from './assets/db';
=======
import Home from "./components/pages/Home";
import Order from "./components/pages/Order";
>>>>>>> Stashed changes

function App() {
  return (
    <div className="app">
<<<<<<< Updated upstream
      <Menu/>
      <div className="home_page">
        <Header/>
        <Home/>
        <Footer/>
      </div>
      <Slider slides={images}/>
=======
      <Router basename='need_for_drive'>
        <Switch>              
          <Route exact path="/" component={Home}/>
          <Route path="/order" component={Order}/>
        </Switch>
      </Router>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
