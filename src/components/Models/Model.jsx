import React from "react";
import classNames from 'classnames';

function Model({model, activeCar, setActiveCar}) {
    const {id, name, priceMin, priceMax, thumbnail} = model;

    const active = activeCar ? activeCar.id === id ?? false : false;

    const carCardClasses = classNames(
        "car_card", 
        {[`active`]: active}
    );

    return (
        <div 
            className={carCardClasses}
            onClick={() => setActiveCar(model)}
        >
            <div className="car_card__name-price">
                <span className="car_card__name">{name}</span>
                <p className="car_card__price">{
                    `${priceMin.toLocaleString()} - ${priceMax.toLocaleString()} `
                }&#8381;</p>
            </div>
            <img 
                className="car_card__img" 
                src={thumbnail.path.includes('data') ? thumbnail.path :`https://api-factory.simbirsoft1.com${thumbnail.path}`} 
                alt={name} 
            />
        </div>
    )
}

export default Model;
