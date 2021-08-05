import React,{useState, useEffect} from 'react';

import Header from "../../layouts/Header";
import Breadscrumbs from '../../layouts/Breadscrumbs';
import OrderSummary from '../../OrderSummary';
import Location from '../../Location';

import "./Order.scss";

function Order() {
    const [townValue, setTownValue] = useState('');
    const [pointValue, setPointValue] = useState('');
    const [activeBtn, setActiveBtn] = useState(false);

    useEffect(() => {
        setActiveBtn(townValue.length && pointValue.length);
    }, [townValue, pointValue]);

    return (
        <>
            <div className="page">
                <Header townValue={townValue}/>
                <Breadscrumbs/>
                <div className="order_content">
                    <div className="order_content__main">
                        <Location 
                            townValue={townValue}
                            setTownValue={setTownValue}
                            pointValue={pointValue}
                            setPointValue={setPointValue}
                        />
                    </div>
                    <OrderSummary
                        town={townValue}
                        pointValue={pointValue}
                        activeBtn={activeBtn}
                    />
                </div>
            </div>
        </>
    )
}

export default Order;
