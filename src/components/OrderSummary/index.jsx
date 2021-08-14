import React, {useContext} from "react";
import {Link} from 'react-router-dom';

import { AppContext } from '../../context';

import Button from "../layouts/Button";

import "./OrderSummary.scss";

function OrderSummary({btnOptions}) {
    const {
        choosenTown,
        choosenPoint,
        isActiveBtn, 
        choosenCar
    } = useContext(AppContext);

    return (
        <div className="order_content__summary">
            <h2 className="order_content__summary_heading">Ваш заказ</h2>

            <div className="order_content__summary_item">
                <span>Пункт выдачи</span>
                <span className="dots_border"></span>
                <span className="item_value">
                    {
                        choosenPoint && 
                        `${choosenTown.name}, ${choosenPoint.address}`
                    }
                </span>
            </div>
            
            <div 
                className="order_content__summary_item"
                style={choosenCar ? {display: "flex"} : null}
            >
                <span>Модель</span>
                <span className="dots_border"></span>
                <span className="item_value">{choosenCar ? choosenCar.name : null}</span>
            </div>

            <p className="order_content__total_price">
                {
                    `Цена: от 
                    ${choosenCar ? choosenCar.priceMin.toLocaleString() : "---"} до 
                    ${choosenCar ? choosenCar.priceMax.toLocaleString() : "---"} `
                }
                &#8381;
            </p>

            <Link to={`/order/${btnOptions.link}`}>
                <Button 
                    title={btnOptions.title} 
                    location="btn--order"
                    isActiveBtn={isActiveBtn}
                />
            </Link>
        </div>
    )
}

export default OrderSummary;
