import React, {useContext} from "react";
import {Redirect} from 'react-router-dom';
import classNames from 'classnames';

import { AppContext } from "../../context";

import Button from "../layouts/Button";

import {send} from "../../api";

import "./ApplyOrder.scss";

function ApplyOrder() {
    const {
        order, 
        isOpenApplyOrder, 
        setOpenApplyOrder,
        registeredOrder,
        setRegisteredOrder,
        isRedirect,
        setIsRedirect
    } = useContext(AppContext);

    const applyOrderClasses = classNames(
            "apply_order", 
            {[`active`]: isOpenApplyOrder}
        )

    const closeApplyOrder = () => {
        setOpenApplyOrder(false);
    }

    const sendNewOrder = () => {
        send({
            orderStatusId: {id: "5e26a191099b810b946c5d89"},
            ...order
        }).then(data => {
            setRegisteredOrder(data.data); 
            setIsRedirect(true);
        })

    }

    if (isRedirect) {
        return <Redirect to={`registeredOrder/${registeredOrder.id}`}/>
    }

    return (
        <div className={applyOrderClasses}>
            <p className="apply_order__heading">Подтвердить заказ</p>
            <div className="apply_order__buttons">
                <Button 
                    title="Подтвердить"
                    location="apply_order"
                    isActiveBtn={true}
                    onclick={sendNewOrder}
                />
                <Button 
                    title="Вернуться"
                    color="red"
                    location="apply_order"
                    isActiveBtn={true}
                    onclick={closeApplyOrder}
                />
            </div>
        </div>
    )
}

export default ApplyOrder;
