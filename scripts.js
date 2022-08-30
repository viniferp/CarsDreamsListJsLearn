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
table.setAttribute("id", "tableCars");
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');


let createUpdateTable = function() {
    table.appendChild(thead);
    table.appendChild(tbody)

    let InitialTable =  document.getElementById('tableCars');

    console.log(`initial: ${InitialTable}`);

    if(InitialTable === null) {
        document.getElementById('body').appendChild(table);
        let row_1 = document.createElement('tr');

        let heading_1 = document.createElement('th');   
        let heading_2 = document.createElement('th');
        let heading_3 = document.createElement('th');

        heading_1.innerHTML = "Brand";
        heading_2.innerHTML = "Name";
        heading_3.innerHTML = "Year";

        row_1.appendChild(heading_1);
        row_1.appendChild(heading_2);
        row_1.appendChild(heading_3);
        thead.appendChild(row_1);
    }

    if(cars.length > 0) {
        let row = document.createElement('tr');
        
        let column_1 = document.createElement('td');   
        let column_2 = document.createElement('td');
        let column_3 = document.createElement('td');

        console.log("tste:: " + cars[cars.length - 1].brand);
        column_1.innerHTML = cars[cars.length - 1].brand;
        column_2.innerHTML = cars[cars.length - 1].name;
        column_3.innerHTML = cars[cars.length - 1].year;

        row.appendChild(column_1);
        row.appendChild(column_2);
        row.appendChild(column_3);
        table.appendChild(row);
    }
}

addBtn.onclick = function click() {
    console.log(`brand: ${brand.value}`);
    if(brand != null && brand.value != '' && name != null && name.value != '', year != null && year.value !=''){
        createCarsList(brand.value, name.value, year.value);
        brand.value = "";
        name.value = "";
        year.value = "";
    } else {
        alert("Insert valid data!!");
    }
};

showListBtn.onclick = function() {
    createUpdateTable();
}

resetBtn.onclick = function click() {
    cars = [];
};

const createCarsList = function (brand, name, year){
    //ES5 - default values
    //brand = brand || 'Renault'

    const car = {
        brand,
        name, 
        year
    };
    cars.push(car);
};