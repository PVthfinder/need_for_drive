/* eslint-disable react-hooks/exhaustive-deps */ //ошибка линтера 

import React, {useState, useEffect} from "react";
import classNames from 'classnames';

import "./InputField.scss";

function InputField({
    inputValue, 
    setInputValue, 
    setChoosen,
    selectorArr, 
    setActiveBtn,
    label, 
    placeholder,
    changeInputType,
    date
}) {
    const [activeInput, setActiveInput] = useState(false);
    const [inputType, setInputType] = useState("text");
    const [isError, setIsError] = useState(false);

    const focusHandler = () => {
        if (changeInputType) {
            setInputType("datetime-local");
        } else {
            setActiveInput(true)
        }
    }

    const choiseHandler = (item) => {
        setInputValue(item.name);
        setChoosen(item);
        setActiveInput(false);
        setActiveBtn && setActiveBtn(true);
    }

    const selectorClasses = classNames(
        "input_field__selector", 
        {[`active`]: 
            activeInput && 
            inputValue.length > 0 
            && selectorArr.length > 0
        }
    );

    const errorClasses = classNames(
        "error", 
        {[`active`]: isError}
    );

    useEffect(() => {
        let now = Date.now();
        let newDate = new Date(date);
        if (now > newDate.getTime()) {
            setIsError(true);
            setInputValue("");
        };
    }, [inputValue]);

    return (
        <div className="input_field">
            <label htmlFor="town_input">{label}</label>

            <div className="input_field__value">
                <input 
                    type={inputType} 
                    name="town" 
                    id="town_input" 
                    placeholder={placeholder}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onFocus={() => focusHandler()}
                    autoComplete="off"
                    onBlur={() => setInputType("text")}
                />
                
                <ul 
                    className={selectorClasses}
                >
                    {selectorArr && selectorArr.map(item => (
                        <li 
                            key={item.id}
                            onClick={() => choiseHandler(item)}
                        >{item.name}</li>
                    ))}
                </ul>

                <span 
                    className="clear_input"
                    onClick={() => setInputValue("")}
                />

                <div className={errorClasses}>
                        Дата аренды не может находиться в прошлом!
                        <svg 
                            width="8" 
                            height="8" 
                            viewBox="0 0 8 8" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={() => setIsError(false)}
                        >
                            <path d="M8 0.805714L7.19429 0L4 3.19429L0.805714 0L0 0.805714L3.19429 4L0 7.19429L0.805714 8L4 4.80571L7.19429 8L8 7.19429L4.80571 4L8 0.805714Z" fill="#121212"/>
                        </svg>
                </div>
            </div>                    
        </div>
    )
}

export default InputField;
