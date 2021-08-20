/* eslint-disable react-hooks/exhaustive-deps */ //ошибка линтера 

import React, {useContext, useEffect} from "react";

import { AppContext } from "../../context";

import Model from "./Model";
import Filter from "../layouts/Filter";

import { getAllCars, getCarsCategories } from "../../api";

import "./Models.scss";

function Models() {
    const {
        filteredCars, 
        setCars,
        setFilteredCars,
        carsCategories, 
        setCarsCategories,
        carCategory, 
        choosenCar,
        paginationPage,
        setActiveBtn
    } = useContext(AppContext);

    useEffect(() => {
        getAllCars(paginationPage)
            .then(data => data ? setCars(data.data) : null);
        choosenCar ? setActiveBtn(true) : setActiveBtn(false);
    }, [paginationPage]);

    useEffect(() => {
        getCarsCategories()
            .then(data => data ? setCarsCategories(data.data) : null);
    }, []);

    return (
        <div className="order_content__models">
            <Filter 
                commonTitle="Все модели"
                filterEntity={carCategory}
                optionsArr={carsCategories}
                applyFilter={setFilteredCars}
            />
                
            {
                filteredCars.length ? 
                <div className="order_content__cars">
                    {filteredCars.map(item => (
                        <Model 
                            key={item.id}
                            model={item}
                            choosenCar={choosenCar}
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
