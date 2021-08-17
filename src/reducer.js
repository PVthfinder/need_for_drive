function reducer (state, {type, payload}) {
    const filter = (str = '', arr=[]) => {
        return arr.filter(
            item => item.name.toLowerCase().includes(str.toLowerCase())
        );
    }

    const replaceDateFormat = (date) => {
        const options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
        };
        let newDate = new Date(date);
        let dateStr = newDate.toLocaleString("ru", options);
        return dateStr.replace(/,/g, "");
    }

    switch(type) {
        case 'SET_ON_NEXT_SLIDE':
            return {
                ...state,
                activeSlide: state.activeSlide === payload - 1 ? 0 : state.activeSlide + 1
            }
            
        case 'SET_ON_PREV_SLIDE':
            return {
                ...state,
                activeSlide: state.activeSlide ? state.activeSlide - 1 : payload - 1
            }
            
        case 'SET_OPEN_MENU':
            return {
                ...state,
                openMenu: !state.openMenu
            }
            
        case 'SET_ACTIVE_BTN':
            return {
                ...state,
                isActiveBtn: payload
            }
            
        case 'SET_TOWN_VALUE':
            return {
                ...state,
                townValue: payload
            }
            
        case 'SET_POINT_VALUE':
            return {
                ...state,
                pointValue: payload
            }
            
        case 'SET_TOWNS':
            return {
                ...state,
                towns: payload,
                filteredTowns: payload
            };
            
        case 'SET_FILTERED_TOWNS':
            const newFilteredTowns = filter(payload, state.towns);
            let newTownsState = {};
            if (state.townValue.length === 0) {
                newTownsState = {
                    choosenTown: null,
                    pointValue: "",
                    order: {
                        point: null
                    },
                    points: [],
                    filteredPoints: []
                }
            }
            return {
                ...state,
                filteredTowns: newFilteredTowns,
                ...newTownsState
        };
        
        case 'SET_POINTS':
            return {
                ...state,
                points: payload,
                filteredPoints: payload
            };
        
        case 'SET_CHOOSEN_TOWN':
            return {
                ...state,
                choosenTown: payload,
                order: {
                    cityId: payload.id
                }
            };
            
        case 'SET_FILTERED_POINTS':
            const newFilteredPoints = filter(payload, state.points);
            let newPointsState = {};
            if (state.pointValue.length === 0) {
                newPointsState = {
                    choosenPoint: null,
                    order: {
                        point: null
                    },
                    filteredPoints: [],
                    isActiveBtn: false
                }
            }
            return {
                ...state,
                filteredPoints: newFilteredPoints,
                ...newPointsState
            };
        
        case 'SET_CHOOSEN_POINT':
            return {
                ...state,
                choosenPoint: payload,
                order: {
                    ...state.order,
                    pointId: payload.id,
                }
            };
            
        case 'SET_MAP_CENTER':
            return {
                ...state,
                mapZoom: payload.zoom,
                mapCenterCoord: payload.coords,
            }
            
        case 'SET_MAP_POINTS_COORD':
            return {
                ...state,
                mapPointsCoord: payload
            }

        case 'SET_CARS': 
            return {
                ...state,
                cars: [...state.cars, ...payload],
                filteredCars: [...state.filteredCars, ...payload]
            };
            
        case 'SET_PAGINATION_PAGE':
            return {
                ...state,
                paginationPage: state.paginationPage + 1
            }
            
        case 'SET_FILTERED_CARS':
            let newFilteredCars = [];
            if (payload !== "any") {
                newFilteredCars = state.cars.filter(item => (
                        item.categoryId ?
                        item.categoryId.name === payload :
                        false
                    ));
            } else {
                newFilteredCars = state.cars;
            }
            return {
                ...state,
                carCategory: payload,
                filteredCars: newFilteredCars
            }

        case 'SET_CARS_CATEGORIES': 
            return {
                ...state,
                carsCategories: payload
            };

        case 'SET_CHOOSEN_CAR': 
            return {
                ...state,
                choosenCar: payload,
                order: {
                    ...state.order,
                    carId: payload.id
                }
            };

        case 'SET_CAR_COLOR': 
            return {
                ...state,
                carColor: payload,
                order: {
                    ...state.order,
                    color: payload
                }
            };
            
        case 'SET_DATE_FROM':
            const newDateFrom = 
                payload.length ?
                replaceDateFormat(payload) :
                "";
            return {
                ...state,
                dateFrom: newDateFrom,
                order: {
                    ...state.order,
                    dateFrom: payload
                }
            }
            
        case 'SET_DATE_TO':
            const newDateTo = 
                payload.length ?
                replaceDateFormat(payload) :
                "";

            return {
                ...state,
                dateTo: newDateTo,
                order: {
                    ...state.order,
                    dateTo: payload
                }
            }
            
        case 'SET_RENT_DURATION':
            const dateFrom = new Date(state.order.dateFrom).getTime();

            const dateTo = new Date(state.order.dateTo).getTime();
                
            const rentDuration = 
                (dateFrom && dateTo) ?
                (dateTo - dateFrom) / (1000) :
                null;
                
            const rentDurationMin = Math.ceil(rentDuration / 60);

            const rentDurationHours = Math.ceil(rentDuration / (60 * 60));
                
            const rentDurationDays = Math.floor(rentDuration / (60 * 60 * 24));

            return {
                ...state,
                rentDurationMin: rentDurationMin,
                rentDurationHours: rentDurationHours,
                rentDurationDays: rentDurationDays,
            }

        case 'SET_RATES': 
            return {
                ...state,
                rates: payload
            };

        case 'SET_CHOOSEN_RATE': 
            return {
                ...state,
                choosenRate: payload,
                order: {
                    ...state.order,
                    rateId: payload.id
                }
            };

        case 'SET_PRICE': 
            let newPrice = 0;
            
            if (state.choosenRate) {
                if (state.choosenRate.rateTypeId.unit === "мин") {
                    newPrice = state.rentDurationMin * state.choosenRate.price;
                } else {
                    if (state.rentDurationDays === 0) {
                        newPrice = state.choosenRate.price;
                    } else {
                        let parts = state.rentDurationDays;
                        if (state.choosenRate.rateTypeId.unit === "7 дней") {
                            parts = Math.ceil(state.rentDurationDays / 7);
                        } else if (state.choosenRate.rateTypeId.unit === "30 дней") {
                            parts = Math.ceil(state.rentDurationDays / 30);
                        }
                        newPrice = parts * state.choosenRate.price;
                    }
                }
            }

            return {
                ...state,
                price: newPrice,
                order: {
                    ...state.order,
                    price: newPrice
                }
            };

        case 'SET_ADDITIONAL_OPTION': 
            let optionObj = {};
            for (let key in state.additionalOptions) {
                if (key === payload) {
                    optionObj[key] = !state.additionalOptions[key];
                }
            }

            return {
                ...state,
                order: {
                    ...state.order,
                    ...optionObj
                },
                additionalOptions: {
                    ...state.additionalOptions,
                    ...optionObj
                }
            };

        case 'SET_PRICE_WITH_ADDITIONAL_OPTION': 
            const priceWithAdditionalOption = 
                state.additionalOptions[payload.value] ?
                state.price + payload.price :
                state.price - payload.price;

            return {
                ...state,
                price: priceWithAdditionalOption
            };

        case 'SET_VALID_PRICE': 
            const isValidPrice = 
                state.price >= state.choosenCar.priceMin && 
                state.price <= state.choosenCar.priceMax;

            return {
                ...state,
                isValidPrice: isValidPrice,
                isActiveBtn: isValidPrice
            };

        default:
            return state;
    }
}

export default reducer;