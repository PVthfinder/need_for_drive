import {API_HEADERS, API_URL} from './config';

const getTowns = async () => {
    const response = await fetch(`${API_URL}city`, {
        headers: API_HEADERS
    });
    return await response.json();
};

const getPoints = async (townId) => {
    const response = await fetch(`${API_URL}point?cityId[id]=${townId}`, {
        headers: API_HEADERS
    });
    return await response.json();
};

const getAllCars = async (page) => {
    const response = await fetch(`${API_URL}car?page=${page}&limit=12`, {
        headers: API_HEADERS
    });
    return await response.json();
};

const getCarsCategories = async () => {
    const response = await fetch(`${API_URL}category`, {
        headers: API_HEADERS
    });
    return await response.json();
};

const getRates = async () => {
    const response = await fetch(`${API_URL}rate`, {
        headers: API_HEADERS
    });
    return await response.json();
};

export {
    getAllCars, 
    getCarsCategories,
    getTowns,
    getPoints,
    getRates
};