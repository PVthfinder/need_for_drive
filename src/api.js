import {API_HEADERS, API_URL} from './config';

const getTowns = async () => {
    try{
        const response = await fetch(`${API_URL}city`, {
            headers: API_HEADERS
        });
        return await response.json();
    } catch (err) {
        console.log("Возникла проблема с запросом: ", err);
        alert("Возникла проблема с запросом!");
    }
};

const getPoints = async (townId) => {
    try{
        const response = await fetch(`${API_URL}point?cityId[id]=${townId}`, {
            headers: API_HEADERS
        });
        return await response.json();
    } catch (err) {
        console.log("Возникла проблема с запросом: ", err);
        alert("Возникла проблема с запросом!");
    }
};

const getAllCars = async (page) => {
    try{
        const response = await fetch(`${API_URL}car?page=${page}&limit=12`, {
            headers: API_HEADERS
        });
        return await response.json();
    } catch (err) {
        console.log("Возникла проблема с запросом: ", err);
        alert("Возникла проблема с запросом!");
    }
};

const getCarsCategories = async () => {
    try{
        const response = await fetch(`${API_URL}category`, {
            headers: API_HEADERS
        });
        return await response.json();
    } catch (err) {
        console.log("Возникла проблема с запросом: ", err);
        alert("Возникла проблема с запросом!");
    }
};

const getRates = async () => {
    try{
        const response = await fetch(`${API_URL}rate`, {
            headers: API_HEADERS
        });
        return await response.json();
    } catch (err) {
        console.log("Возникла проблема с запросом: ", err);
        alert("Возникла проблема с запросом!");
    }
};

export {
    getAllCars, 
    getCarsCategories,
    getTowns,
    getPoints,
    getRates
};