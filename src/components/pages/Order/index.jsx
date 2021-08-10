import React, {useContext} from 'react';
import {useLocation} from 'react-router-dom';

import { AppContext } from "../../../context";

import Menu from '../../Menu';
import Header from "../../layouts/Header";
import Breadcrumbs from '../../layouts/Breadcrumbs';
import OrderSummary from '../../OrderSummary';
import Location from '../../Location';
import Models from '../../Models';

import "./Order.scss";

function Order() {
    const {setPaginationPage} = useContext(AppContext);
    
    const {pathname} = useLocation();

    const onScroll = (evt) => {
        if (evt.target.offsetHeight + evt.target.scrollTop === evt.target.scrollHeight) {
            setPaginationPage();
          }
    }

    return (
        <>
            <Menu
                isOrderPage={pathname.includes('order')}
            />
            <div className="page">
                <Header/>
                <Breadcrumbs/>
                <div className="order_content">
                    <div 
                        className="order_content__main"  
                        onScroll={(evt) => onScroll(evt)}
                    >
                        {pathname.includes('location') &&
                            <Location />
                        }
                        
                        {pathname.includes('model') &&
                            <Models />
                        }
                    </div>
                    <OrderSummary />
                </div>
            </div>
        </>
    )
}

export default Order;
