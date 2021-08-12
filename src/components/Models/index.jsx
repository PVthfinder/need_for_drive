import React from "react";

import Model from "./Model";

import "./Models.scss";

function Models({cars, categories, category, setCategory, activeCar, setActiveCar}) {

    return (
        <div className="order_content__models">
            <div className="radios">
                    <div className="car_category">
                        <input 
                            name="type" 
                            type="radio"
                            id="filter_all"
                            value="all"
                            onChange={(evt) => setCategory(evt.target.value)} 
                            checked={category === "all"}
                        />
                        <label htmlFor="filter_all">All</label>
                    </div>
                    {
                        categories.length && categories.map(item => (
                            <div
                                key={item.id} 
                                className="car_category"
                            >
                                <input 
                                    name="type" 
                                    type="radio"
                                    id={`filter_${item.name}`}
                                    value={item.name}
                                    onChange={(evt) => setCategory(evt.target.value)} 
                                    checked={category === item.name}
                                />
                                <label htmlFor={`filter_${item.name}`}>{item.name}</label>
                            </div>
                        ))
                    }
                </div>

                <div className="order_content__cars">
                    {
                        cars.length && cars.map(item => (
                            <Model 
                                key={item.id}
                                model={item}
                                activeCar={activeCar}
                                setActiveCar={setActiveCar}
                            />
                        ))
                    }
                </div>
        </div>
    )
}

export default Models;
