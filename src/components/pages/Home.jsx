import React from 'react';

import Button from '../layouts/Button';

import "./Home.scss";

function Home() {
    return (
        <div className="home_content">
            <h1 className="home_content__title">
                Каршеринг <br/><span>Need for drive</span>
            </h1>
            <p className="home_content__desc">
                Поминутная аренда авто твоего города
            </p>
            <Button title="Забронировать"/>
        </div>
    )
}

export default Home;
