'use strict';

let cars = [];

let brand = document.getElementById("fbrand-id");
let name =  document.getElementById("lname-id");
let year = document.getElementById("lyear-id");
let addBtn = document.getElementById("addCar-id");
let showListBtn = document.getElementById("carsLists-id");
const resetBtn = document.getElementById("reset-id");

//Table Elements
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');




let createTable = function() {
    table.appendChild(thead);
    table.appendChild(tbody)
    document.getElementById('body').appendChild(table);

    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Brand";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Name";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "Year";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    thead.appendChild(row_1);
}


createTable();

addBtn.onclick = function click() {
    if(brand != null && brand.value != '' && name != null && name.value != '', year != null && year.value !=''){
        createCarsList(brand.value, name.value, year.value);
        brand.value = "";
        name.value = "";
        year.value = "";
    }
};

showListBtn.onclick = function() {
    console.log(cars);
}

resetBtn.onclick = function click() {
    cars = [];
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