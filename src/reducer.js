function reducer (state, {type, payload}) {
    const filter = (str = '', arr=[]) => {
        return arr.filter(
            item => item.name.toLowerCase().includes(str.toLowerCase())
        );
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
                    pointId: payload,
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

        case 'SET_CARS': {
            return {
                ...state,
                cars: [...state.cars, ...payload],
                filteredCars: [...state.filteredCars, ...payload]
            };
        }
            
        case 'SET_PAGINATION_PAGE':
            return {
                ...state,
                paginationPage: state.paginationPage + 1
            }
            
        case 'SET_FILTERED_CARS':
            let newFilteredCars = [];
            if (payload !== "all") {
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
                category: payload,
                filteredCars: newFilteredCars
            }

        case 'SET_CARS_CATEGORIES': {
            return {
                ...state,
                carsCategories: payload
            };
        }

        case 'SET_CHOOSEN_CAR': {
            return {
                ...state,
                choosenCar: payload,
                order: {
                    ...state.order,
                    carId: payload.id
                }
            };
        }

        case 'SET_CAR_COLOR': {
            return {
                ...state,
                carColor: payload
            };
        }

        default:
            return state;
    }
}

export default reducer;