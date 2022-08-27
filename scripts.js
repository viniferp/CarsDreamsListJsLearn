'use strict';

let cars = [];

let brand = document.getElementById("fbrand-id");
let name =  document.getElementById("lname-id");
let year = document.getElementById("lyear-id");
let AddBtn = document.getElementById("addCar-id");
let ShowListBtn = document.getElementById("carsLists-id");
const resetBtn = document.getElementById("reset-id");


AddBtn.onclick = function click() {
    createCarsList(brand.value, name.value, year.value);
    
    
};

resetBtn.onclick = function click() {
    cars = [];
    console.log(cars);
    console.log('resetBen clicked!')
};



const createCarsList = function (brand = 'Renault', name = 'Megane Rs', year = '2020'){
    //ES5 - default values
    //brand = brand || 'Renault'

    const car = {
        brand,
        name, 
        year
    };

    console.log(car);
    cars.push(car);
};