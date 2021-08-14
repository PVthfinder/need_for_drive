import React, {useContext} from "react";
import classNames from 'classnames';

import { AppContext } from "../../context";

function Model({model}) {
    const {id, name, priceMin, priceMax, thumbnail} = model;

    const {
        choosenCar, 
        setChoosenCar,
        setActiveBtn
    } =useContext(AppContext);

    const active = choosenCar ? choosenCar.id === id ?? false : false;

    const carCardClasses = classNames(
        "car_card", 
        {[`active`]: active}
    );

    const choiseHandler = (model) => {
        setChoosenCar(model);
        setActiveBtn(true);
    }


    return (
        <div 
            className={carCardClasses}
            onClick={() => choiseHandler(model)}
        >
            <div className="car_card__name-price">
                <span className="car_card__name">{name}</span>
                <p className="car_card__price">{
                    `${priceMin.toLocaleString()} - ${priceMax.toLocaleString()} `
                }&#8381;</p>
            </div>
            <img 
                className="car_card__img" 
                src={
                    thumbnail.path.includes('data') ? 
                    thumbnail.path :
                    `https://api-factory.simbirsoft1.com${thumbnail.path}`
                } 
                alt={name} 
            />
        </div>
    )
}

export default Model;
