import React, {useState} from "react";
import classNames from 'classnames';

function LocationItem({inputValue, setInputValue, selectorArr, label, placeholder}) {
    const [activeInput, setActiveInput] = useState(false);

    const choiseHandler = (item) => {
        setInputValue(item);
        setActiveInput(false);
    }

    const selectorClasses = classNames(
        "location_inputs__selector", 
        {[`active`]: 
            activeInput && 
            inputValue.length > 0 
            && selectorArr.length > 0
        }
    );

    return (
        <div className="location_inputs__item">
            <label htmlFor="town_input">{label}</label>

            <div className="location_inputs__value">
                <input 
                    type="text" 
                    name="town" 
                    id="town_input" 
                    placeholder={`Начните вводить ${placeholder} ...`}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onFocus={() => setActiveInput(true)}
                    autoComplete="off"
                />
                
                <ul 
                    className={selectorClasses}
                >
                    {selectorArr && selectorArr.map(item => (
                        <li 
                            key={item.name ?? item.address}
                            onClick={() => choiseHandler(item.name ?? item.address)}
                        >{item.name ?? item.address}</li>
                    ))}
                </ul>

                <span 
                    className="clear_input"
                    onClick={() => setInputValue('')}
                />
            </div>                    
        </div>
    )
}

export default LocationItem;