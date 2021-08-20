import React, {useContext} from 'react';
import {useLocation} from 'react-router-dom';

import { AppContext } from "../../../context";

import Menu from '../../Menu';
import Header from "../../layouts/Header";
import Breadcrumbs from '../../layouts/Breadcrumbs';
import OrderSummary from '../../OrderSummary';
import Location from '../../Location';
import Models from '../../Models';
import Options from '../../Options';
import SummaryInfo from '../../SummaryInfo';
import ApplyOrder from '../../ApplyOrder';

import "./Order.scss";

function Order() {
    const {
        setPaginationPage
    } = useContext(AppContext);
    
    const {pathname} = useLocation();

    const onScroll = (evt) => {
        if (evt.target.offsetHeight + evt.target.scrollTop === evt.target.scrollHeight) {
            setPaginationPage();
          }
    }

    const btnOptions = () => {
        if (pathname.includes("location")) {
            return {
                title: "Выбрать модель",
                link: "models"
            };
        } else if (pathname.includes("model")) {
            return {
                title: "Дополнительно",
                link: "options"
            };
        } else if (pathname.includes("options")) {
            return {
                title: "Итого",
                link: "summary"
            };
        } else if (pathname.includes("summary")) {
            return {
                title: "Заказать",
                link: "#!"
            };
        }
    }

    const componentSelector = () => {
        if (pathname.includes('location')) {
            return <Location />;
        } else if (pathname.includes('model')) {
            return <Models />;
        } else if (pathname.includes('options')) {
            return <Options />;
        } else if (pathname.includes('summary')) {
            return <SummaryInfo />;
        }
    }

    return (
        <>
            <Menu
                isOrderPage={pathname.includes('order')}
            />
            <div className="page">
                <Header/>
                <Breadcrumbs />
                <div className="order_content">
                    <div 
                        className="order_content__main"  
                        onScroll={(evt) => onScroll(evt)}
                    >
                        {componentSelector()}
                    </div>
                    <OrderSummary 
                        btnOptions={btnOptions()}
                        isOnclick={pathname.includes('summary')}
                    />
                </div>
            </div>
            <ApplyOrder />
        </>
    )
}

export default Order;
