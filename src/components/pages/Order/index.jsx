import React,{useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';

import Menu from '../../Menu';
import Header from "../../layouts/Header";
import Breadcrumbs from '../../layouts/Breadcrumbs';
import OrderSummary from '../../OrderSummary';
import Location from '../../Location';
import Models from '../../Models';

import { 
    getAllCars, 
    getCarsCategories,
    getCities,
    getPoints 
} from "../../../api";

import "./Order.scss";

function Order() {
    const [townValue, setTownValue] = useState('');
    const [pointValue, setPointValue] = useState('');
    const [towns, setTowns] = useState([]);
    const [points, setPoints] = useState([]);
    const [filteredTowns, setFilteredTowns] = useState([]);
    const [filteredPoints, setFilteredPoints] = useState([]);
    const [choosenTown, setChoosenTown] = useState(null);
    const [choosenPoint, setChoosenPoint] = useState(null);
    const [activeBtn, setActiveBtn] = useState(false);
    const [cars, setCars] = useState([]);
    const [filteredCars, setFilteredCars] = useState([]);
    const [carsCategories, setCarsCategories] = useState([]);
    const [category, setCategory] = useState('all');
    const [activeCar, setActiveCar] = useState(null);
    const [paginationPage, setPaginationPage] = useState(0);
    
    const {pathname} = useLocation();

    const filter = (str = '', arr=[]) => {
        return arr.filter(item => item.name.toLowerCase().includes(str.toLowerCase()));
    }

    useEffect(() => {
        getCarsCategories().then(data => setCarsCategories(data.data));
        getCities().then(data => setTowns(data.data));
    }, []);

    useEffect(() => {
        setFilteredTowns(filter(townValue, towns));
        if (townValue.length === 0) {
            setChoosenTown(null);
            setChoosenPoint(null);
            setPointValue('');
            setPoints([]);
            setFilteredPoints([]);
        }
        //eslint-disable-next-line
    }, [townValue]);

    useEffect(() => {
        if (filteredTowns.length === 1) { 
            getPoints(filteredTowns[0].id).then(data => setPoints(data.data));
            setChoosenTown(filteredTowns[0]);
        }
        //eslint-disable-next-line
    }, [filteredTowns]);

    useEffect(() => {
        setFilteredPoints(filter(pointValue, points));
        if (pointValue.length === 0) {
            setChoosenPoint(null);
            setFilteredPoints([]);
        }
        //eslint-disable-next-line
    }, [pointValue]);

    useEffect(() => {
        filteredPoints.length === 1 && setChoosenPoint(filteredPoints[0]);
    }, [filteredPoints]);

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
                                towns={filteredTowns}
                                points={points}
                                filteredPoints={filteredPoints}
                                townValue={townValue}
                                setTownValue={setTownValue}
                                pointValue={pointValue}
                                setPointValue={setPointValue}
                                choosenTown={choosenTown}
                                choosenPoint={choosenPoint}
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
                        town={choosenTown && choosenTown.name}
                        point={choosenPoint && choosenPoint.address}
                        activeBtn={activeBtn}
                        activeCar={activeCar}                       
                    />
                </div>
            </div>
        </>
    )
}

export default Order;
