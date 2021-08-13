import React, {useContext, useEffect} from "react";

import { AppContext } from "../../context";

import Model from "./Model";

import { getAllCars, getCarsCategories } from "../../api";

import "./Models.scss";

function Models() {
    const {
        filteredCars, 
        setCars,
        setFilteredCars,
        carsCategories, 
        setCarsCategories,
        category, 
        activeCar,
        paginationPage
    } = useContext(AppContext);

    useEffect(() => {
        getAllCars(paginationPage).then(data => setCars(data.data));
        //eslint-disable-next-line
    }, [paginationPage]);

    useEffect(() => {
        getCarsCategories().then(data => setCarsCategories(data.data));
        //eslint-disable-next-line
    }, []);

    return (
        <div className="order_content__models">
            <div className="radios">
                <div className="car_category">
                    <input 
                        name="type" 
                        type="radio"
                        id="filter_all"
                        value="all"
                        onChange={(evt) => setFilteredCars(evt.target.value)} 
                        checked={category === "all"}
                    />
                    <label htmlFor="filter_all">All</label>
                </div>
                {
                    carsCategories.length && carsCategories.map(item => (
                        <div
                            key={item.id} 
                            className="car_category"
                        >
                            <input 
                                name="type" 
                                type="radio"
                                id={`filter_${item.name}`}
                                value={item.name}
                                onChange={(evt) => setFilteredCars(evt.target.value)} 
                                checked={category === item.name}
                            />
                            <label htmlFor={`filter_${item.name}`}>{item.name}</label>
                        </div>
                    ))
                }
            </div>
                
            {
                filteredCars.length ? 
                <div className="order_content__cars">
                    {filteredCars.map(item => (
                        <Model 
                            key={item.id}
                            model={item}
                            activeCar={activeCar}
                        />
                    ))}
                </div> :
                <p className="order_content__nothing_found">
                    Приносим извинения, нет машин выбранного класса.
                </p>
            }
        </div>
    )
}

export default Models;
