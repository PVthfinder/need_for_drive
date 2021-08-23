import React, {useContext} from "react";
import {Link, useLocation} from 'react-router-dom';

import { AppContext } from '../../context';

import Button from "../layouts/Button";

import { additionalOptionsArr } from "../../assets/db";

import "./OrderSummary.scss";

function OrderSummary({
    order,
    choosenTown,
    choosenPoint,
    choosenCar,
    carColor,
    choosenRate,
    additionalOptions,
    isValidPrice,
    price,
    btnOptions, 
    isOnclick, 
    btnOnclick
}) {
    const {
        isActiveBtn, 
        rentDurationMin,
        rentDurationHours,
        rentDurationDays,
        setOpenApplyOrder
    } = useContext(AppContext);

    const {pathname} = useLocation();

    const valuesForSummaryItem = (itemKey) => {
        switch (itemKey) {
            case "pointId":
                return {
                    title: "Пункт выдачи",
                    value: `${choosenTown.name}, ${choosenPoint.address}`
                }
                
            case "carId":
                return {
                    title: "Модель",
                    value: choosenCar.name
                }
                
            case "color":
                return {
                    title: "Цвет",
                    value: 
                        carColor === "any" ?
                        "Любой" :
                        carColor
                }
                
            case "dateTo":
                let rentDurationStr = "";
                if (rentDurationDays > 0) {
                    rentDurationStr += `${rentDurationDays}д`
                }
                if (rentDurationHours % 24 > 0) {
                    rentDurationStr += ` ${rentDurationHours % 24}ч`
                }
                if (rentDurationMin % 60 > 0) {
                    rentDurationStr += ` ${rentDurationMin % 60}мин`
                }

                return rentDurationStr.length > 0 && {
                    title: "Длительность аренды",
                    value: rentDurationStr
                }
                
            case "rateId":
                return {
                    title: "Тариф",
                    value: choosenRate.rateTypeId.name
                }

            default:
                return null
        }
    }

    const openApplyOrder = (evt) => {
        if (isOnclick) {
            evt.preventDefault();
            setOpenApplyOrder(true);
        }
    }

    const onclickAction = (evt) => {
        if (pathname.includes("summary")) {
            return openApplyOrder(evt);
        } else if (pathname.includes("registeredOrder")) {
            return btnOnclick(evt);
        }
    }

    return (
        <div className="order_content__summary">
            <h2 className="order_content__summary_heading">Ваш заказ</h2>

            {
                Object.keys(order).map(item => {
                    let newItem = valuesForSummaryItem(item);
                    return (
                        newItem &&
                        <div
                            key={newItem.title} 
                            className="order_content__summary_item"
                        >
                            <span>{newItem.title}</span>
                            <span className="dots_border"></span>
                            <span className="item_value">
                                {newItem.value}
                            </span>
                        </div>
                    )
                })
            }

            {
                additionalOptionsArr.map(item => (
                    additionalOptions[item.value] &&
                    <div 
                        key={item.value}
                        className="order_content__summary_item"
                    >
                        <span>{item.title}</span>
                        <span className="dots_border"></span>
                        <span className="item_value">
                            Да
                        </span>
                    </div>
                ))
            }
            
            {
                !isValidPrice &&
                <div className="order_content__summary_item">
                    <span>Текущая цена</span>
                    <span className="dots_border"></span>
                    <span className="item_value">
                        {price.toLocaleString()} &#8381;
                    </span>
                </div>
            }

            <p className="order_content__total_price">
                Цена: 
                {` ${
                    isValidPrice ?
                    price.toLocaleString() :
                    `от ${choosenCar ? choosenCar.priceMin.toLocaleString() : "---"} 
                    до ${choosenCar ? choosenCar.priceMax.toLocaleString() : "---"}`
                } `}
                &#8381;
            </p>

            <Link to={`/order/${btnOptions.link}`}>
                <Button 
                    title={btnOptions.title} 
                    location="order"
                    isActiveBtn={isActiveBtn}
                    onclick={(evt) => onclickAction(evt)}
                    color={btnOptions.color}
                />
            </Link>
        </div>
    )
}

export default OrderSummary;
