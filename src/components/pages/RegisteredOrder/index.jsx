/* eslint-disable react-hooks/exhaustive-deps */ //ошибка линтера 

import React, {useContext, useEffect} from "react";
import {useLocation, useParams} from 'react-router-dom';

import { AppContext } from '../../../context';

import Menu from "../../Menu";
import Header from "../../layouts/Header";
import SummaryInfo from "../../SummaryInfo";
import OrderSummary from "../../OrderSummary";

import {change, getOrderById} from "../../../api";

import "./RegisteredOrder.scss";

function RegisteredOrder() {
    const {pathname} = useLocation();
    const {orderId} = useParams();

    const {
        setActiveBtn,
        setRegisteredOrder, 
        registeredOrder,
        setIsRedirect
    } = useContext(AppContext);

    useEffect(() => {
        getOrderById(orderId).then(data => setRegisteredOrder(data.data));
        setIsRedirect(false);
        if (registeredOrder && registeredOrder.orderStatusId.id !== "5e26a1f5099b810b946c5d8c")
            setActiveBtn(true);
    }, [])

    const additionalOptions = registeredOrder && {
        isFullTank: registeredOrder.isFullTank,
        isNeedChildChair: registeredOrder.isNeedChildChair,
        isRightWheel: registeredOrder.isRightWheel
    };

    const changeOrder = (evt) => {
        evt.preventDefault();
        change({
            ...registeredOrder,
            orderStatusId: {id: "5e26a1f5099b810b946c5d8c"}
        }).then(data => {
            setRegisteredOrder(data.data); 
            setActiveBtn(false);
        })
    }

    return (
        <>
            <Menu
                isOrderPage={pathname.includes('registeredOrder')}
            />
            <div className="page">
                <Header/>
                {registeredOrder && 
                    <>                    
                    <div className="order_id">Заказ номер {registeredOrder.id}</div>
                
                    <div className="order_content">
                        <div className="order_content__main">
                            <div className="order_content__order_status">
                                Ваш заказ {
                                    registeredOrder.orderStatusId.id === "5e26a191099b810b946c5d89" ?
                                    "подтвержден" :
                                    "отменен"
                                }
                            </div>
                            
                            <SummaryInfo
                                choosenCar={registeredOrder.carId}
                                additionalOptions={additionalOptions}
                                dateFrom={registeredOrder.dateFrom}
                                dateTo={registeredOrder.dateTo}
                            />
                        </div>

                        <OrderSummary 
                            order={registeredOrder}
                            choosenTown={registeredOrder.cityId}
                            choosenPoint={registeredOrder.pointId}
                            choosenCar={registeredOrder.carId}
                            choosenRate={registeredOrder.rateId}
                            additionalOptions={additionalOptions}
                            isValidPrice={true}
                            price={registeredOrder.price}
                            btnOptions={{
                                title: "Отменить",
                                link: "#!",
                                color: "red"
                            }}
                            isOnclick={true}
                            btnOnclick={changeOrder}
                        />
                    </div>
                    </>
                }
            </div>
        </>
    )
}

export default RegisteredOrder;
