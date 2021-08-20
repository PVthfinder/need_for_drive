/* eslint-disable react-hooks/exhaustive-deps */ //ошибка линтера 

import React, {useContext, useEffect} from "react";
import {useLocation, useParams} from 'react-router-dom';

import { AppContext } from '../../../context';

import Menu from "../../Menu";
import Header from "../../layouts/Header";
import OrderSummary from "../../OrderSummary";

import {getOrderById} from "../../../api";

function RegisteredOrder() {
    const {pathname} = useLocation();
    const {orderId} = useParams();

    const {setRegisteredOrder} = useContext(AppContext);

    useEffect(() => {
        getOrderById(orderId).then(data => setRegisteredOrder(data.data));
    }, [orderId])

    return (
        <>
            <Menu
                isOrderPage={pathname.includes('registeredOrder')}
            />
            <div className="page">
                <Header/>
                <div className="order_id">Ваш заказ {orderId}</div>
                <div className="order_content">
                    <div className="order_content__main">
                        {"content"}
                    </div>
                    <OrderSummary 
                        btnOptions={{
                            title: "Отменить",
                            link: "#!"
                        }}
                        isOnclick={true}
                    />
                </div>
            </div>
        </>
    )
}

export default RegisteredOrder;
