import React from "react";
import {Link} from 'react-router-dom';

import Button from "../layouts/Button";

import "./OrderSummary.scss";

function OrderSummary({town, pointValue, activeBtn, activeCar}) {
    return (
        <div className="order_content__summary">
            <h2 className="order_content__summary_heading">Ваш заказ</h2>

            <div 
                className="order_content__summary_item"
                style={town && pointValue ? {display: "flex"} : null}
            >
                <span>Пункт выдачи</span>
                <span className="dots_border"></span>
                <span className="item_value">{`${town}, ${pointValue}`}</span>
            </div>
            
            <div 
                className="order_content__summary_item"
                style={activeCar ? {display: "flex"} : null}
            >
                <span>Модель</span>
                <span className="dots_border"></span>
                <span className="item_value">{activeCar ? activeCar.name : null}</span>
            </div>

            <p className="order_content__total_price">
                {`Цена: от 
                ${activeCar ? activeCar.priceMin.toLocaleString() : "---"} до 
                ${activeCar ? activeCar.priceMax.toLocaleString() : "---"} `}
                &#8381;
            </p>

            <Link to="/order/model">
                <Button 
                    title="Выбрать модель" 
                    location="btn--order"
                    activeBtn={activeBtn}
                />
            </Link>
        </div>
    )
}

export default OrderSummary;
