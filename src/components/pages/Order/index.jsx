import React,{useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';

import Menu from '../../Menu';
import Header from "../../layouts/Header";
import Breadcrumbs from '../../layouts/Breadcrumbs';
import OrderSummary from '../../OrderSummary';
import Location from '../../Location';
import Models from '../../Models';

import { getAllCars, getCarsCategories } from "../../../api";

import "./Order.scss";

function Order() {
    const [townValue, setTownValue] = useState('');
    const [pointValue, setPointValue] = useState('');
    const [activeBtn, setActiveBtn] = useState(false);
    const [cars, setCars] = useState([]);
    const [filteredCars, setFilteredCars] = useState([]);
    const [carsCategories, setCarsCategories] = useState([]);
    const [category, setCategory] = useState('all');
    const [activeCar, setActiveCar] = useState(null);
    const [paginationPage, setPaginationPage] = useState(0);
    
    const {pathname} = useLocation();

    useEffect(() => {
        setActiveBtn(townValue.length && pointValue.length);
    }, [townValue, pointValue]);

    useEffect(() => {
        getAllCars(paginationPage)
            .then(data => {
                setCars(currentCars => [...currentCars, ...data.data]);
                setFilteredCars(currentCars => [...currentCars, ...data.data]);
            });
    }, [paginationPage]);

    useEffect(() => {
        getCarsCategories()
            .then(data => setCarsCategories(data.data));
    }, []);

    useEffect(() => {
        if (category !== "all") {
            const newCarsArr = cars.filter(item => (
                    item.categoryId ?
                    item.categoryId.name === category :
                    false
                ));
            setFilteredCars(newCarsArr);
        } else {
            setFilteredCars(cars);
        }
        //eslint-disable-next-line
    }, [category]);

    const onScroll = (evt) => {
        if (evt.target.offsetHeight + evt.target.scrollTop === evt.target.scrollHeight) {
            setPaginationPage(currentPage => currentPage + 1);
          }
    }

    return (
        <>
            <Menu
                order={pathname.includes('order')}
            />
            <div className="page">
                <Header townValue={townValue}/>
                <Breadcrumbs/>
                <div className="order_content">
                    <div 
                        className="order_content__main"  
                        onScroll={(e) => onScroll(e)}
                    >
                        {pathname.includes('location') &&
                            <Location 
                                townValue={townValue}
                                setTownValue={setTownValue}
                                pointValue={pointValue}
                                setPointValue={setPointValue}
                            />
                        }
                        
                        {pathname.includes('model') &&
                            <Models
                                cars={filteredCars}
                                categories={carsCategories}
                                category={category}
                                setCategory={setCategory}
                                activeCar={activeCar}    
                                setActiveCar={setActiveCar}
                                onScroll={onScroll}
                            />
                        }
                    </div>
                    <OrderSummary
                        town={townValue}
                        pointValue={pointValue}
                        activeBtn={activeBtn}
                        activeCar={activeCar}                       
                    />
                </div>
            </div>
        </>
    )
}

export default Order;
