import React, {useContext, useEffect} from "react";

import { AppContext } from "../../context";

import Filter from "../layouts/Filter";
import InputField from "../layouts/InputField";

import { getRates } from "../../api";

import {additionalOptionsArr} from "../../assets/db";

import "./Options.scss";

function Options() {
    const {
        choosenCar,
        order,
        carColor,
        setCarColor,
        dateFrom,
        setDateFrom,
        dateTo,
        setDateTo,
        setRentDuration,
        setActiveBtn,
        rates,
        setRates,
        choosenRate,
        setChoosenRate,
        price,
        setPrice,
        additionalOptions,
        setAdditionalOption,
        setPriceWithAdditionalOption,
        isValidPrice,
        setValidPrice
    } =useContext(AppContext);

    const applyAdditionalOption = (option) => {
        setAdditionalOption(option.value);
        setPriceWithAdditionalOption(option);
    }

    useEffect(() => {
        if (!order.price) {
            setActiveBtn(false);
        }
        getRates().then(data => setRates(data.data));
        //eslint-disable-next-line
    }, []);

    useEffect(() => {
        setRentDuration();
        //eslint-disable-next-line
    }, [dateFrom, dateTo]);

    useEffect(() => {
        setPrice();
        //eslint-disable-next-line
    }, [dateFrom, dateTo, choosenRate]);

    useEffect(() => {
        setValidPrice();
        //eslint-disable-next-line
    }, [price]);

    useEffect(() => {
        setActiveBtn(isValidPrice);
        //eslint-disable-next-line
    }, [isValidPrice]);

    return (
        <div className="order_content__options">
            <div className="option">
                <p className="option__title">Цвет</p>
                <Filter 
                    commonTitle="Любой"
                    filterEntity={carColor}
                    optionsArr={choosenCar.colors}
                    applyFilter={setCarColor}
                />
            </div>

            <div className="option">
                <p className="option__title">Дата аренды</p>
                <div className="option__content date_filter">
                    <InputField 
                        inputValue={dateFrom}
                        setInputValue={setDateFrom}
                        setChoosen={setDateFrom}
                        label="C"
                        placeholder="Введите дату и время"
                        changeInputType={true}
                        date={order.dateFrom}
                    />
                    
                    <InputField 
                        inputValue={dateTo}
                        setInputValue={setDateTo}
                        setChoosen={setDateTo}
                        label="По"
                        placeholder="Введите дату и время"
                        changeInputType={true}
                        date={order.dateTo}
                    />
                </div>
            </div>
            
            <div className="option">
                <p className="option__title">Тариф</p>
                <div className="option__content filter">
                    {
                        rates.length && 
                        rates.map(item => (
                            <div
                                key={item.id} 
                                className="filter__item"
                            >
                                <input 
                                    name="rate" 
                                    type="radio"
                                    id={`filter_${item.rateTypeId.name}`}
                                    value={item.rateTypeId.name}
                                    onChange={() => setChoosenRate(item)} 
                                    checked={choosenRate && (choosenRate.id === item.id)}
                                />
                                <label htmlFor={`filter_${item.rateTypeId.name}`}>
                                    {`${item.rateTypeId.name}, ${item.price} `}&#8381;{`/${item.rateTypeId.unit}`}
                                </label>
                            </div>
                        ))    
                    }
                </div>
            </div>
            
            <div className="option">
                <p className="option__title">Доп. услуги</p>
                <div className="option__content">
                    {
                        additionalOptionsArr.map(item => (
                            <div key={item.value} className="option__item">
                                <input 
                                    name={item.value}
                                    type="checkbox"
                                    id={item.value}
                                    value={item.value}
                                    onChange={() => applyAdditionalOption(item)} 
                                    checked={additionalOptions[item.value] === true}
                                />
                                <label htmlFor={item.value}>
                                    {item.title}, {item.price} &#8381;
                                </label>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Options;
