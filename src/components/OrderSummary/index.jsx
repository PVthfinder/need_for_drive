import React from "react";

import Button from "../layouts/Button";

import "./OrderSummary.scss";

function OrderSummary({town, pointValue, activeBtn}) {
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
            <p className="order_content__total_price">
                Цена от 8000 до 10000
            </p>
            <Button 
                title="Выбрать модель" 
                location="btn--order"
                activeBtn={activeBtn}
            />
        </div>
    )
}

export default OrderSummary;
