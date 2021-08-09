import React from "react";

function Model({model, activeCar, setActiveCar}) {
    const {id, name, priceMin, priceMax, thumbnail} = model;

    const active = activeCar ? activeCar.id === id ?? false : false;

    return (
        <div 
            className="car_card"
            onClick={() => setActiveCar(model)}
            style={active ? {outline: "1px solid #0EC261"} : null}
        >
            <div className="car_card__name-price">
                <span className="car_card__name">{name}</span>
                <p className="car_card__price">{
                    `${priceMin.toLocaleString()} - ${priceMax.toLocaleString()} `
                }&#8381;</p>
            </div>
            <img className="car_card__img" src={thumbnail.path} alt={name} />
        </div>
    )
}

export default Model;
