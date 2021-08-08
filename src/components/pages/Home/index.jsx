import React from 'react';
import {Link} from 'react-router-dom';

import Slider from "../../Slider";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import Button from '../../layouts/Button';

import {images} from '../../../assets/db';

import "./Home.scss";

function Home() {
    return (
        <>
            <div className="page">
                <Header/>
                <main className="home_content"> 
                    <h1 className="home_content__title">
                        Каршеринг <br/><span>Need for drive</span>
                    </h1>
                    <p className="home_content__desc">
                        Поминутная аренда авто твоего города
                    </p>
                    <Link to="/order">
                        <Button 
                        title="Забронировать"
                        activeBtn={true}
                        />
                    </Link>
                </main>
                <Footer/>
            </div>
            <Slider slides={images}/>
        </>
    )
}

export default Home;