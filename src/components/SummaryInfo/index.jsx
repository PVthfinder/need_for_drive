import React from "react";

import {additionalOptionsArr} from "../../assets/db";

import "./SummaryInfo.scss";

function SummaryInfo({choosenCar,additionalOptions, dateFrom, dateTo}) {
    const changeNumberFormat = (str) => {
        let strArr = str.split("");
        strArr[0] = strArr[0] + " ";
        strArr[3] = strArr[3] + " ";
        strArr[5] = strArr[5] ? strArr[5] + " " : null;
        return strArr.join("");
    }

    return (
        <div className="order_content__summary_page summary_info">
            <div className="summary_info__desc">
                <p className="summary_info__car_name">{choosenCar.name}</p>
                {
                    choosenCar.number && 
                    <p className="summary_info__item number">
                        {changeNumberFormat(choosenCar.number)}
                    </p>
                }
                {
                    additionalOptionsArr.map(item => (
                        additionalOptions[item.value] &&
                        <div 
                            key={item.value}
                            className="summary_info__item"
                        >
                            {
                                item.value === "isFullTank" ?
                                <p className="summary_info__item">
                                    <span className="summary_info__item_heading">
                                        Топливо
                                    </span> 100%
                                </p> :
                                <p className="summary_info__item">
                                    <span className="summary_info__item_heading">
                                        +
                                    </span> {item.title}
                                </p>
                            }
                        </div>
                    ))
                }
                <p className="summary_info__item">
                    <span className="summary_info__item_heading">
                        Доступна с
                    </span> {dateFrom} <span className="summary_info__item_heading">
                        до
                    </span> {dateTo}
                </p>
            </div>

            <img 
                className="summary_info__img" 
                src={
                    choosenCar.thumbnail.path.includes('data') ? 
                    choosenCar.thumbnail.path :
                    `https://api-factory.simbirsoft1.com${choosenCar.thumbnail.path}`
                } 
                alt={choosenCar.name} 
            />
        </div>
    )
}

export default SummaryInfo;
