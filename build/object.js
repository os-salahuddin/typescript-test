"use strict";
const car = {
    type: "Toyota",
    model: "Corolla"
};
const anotherCar = {
    type: 'Toyota'
};
anotherCar.type = 'Ford';
const newCar = {
    type: 'Toyota'
};
newCar.speed = 23;
console.info(newCar);
