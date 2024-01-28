type Car = {
    type:string,
    model: string
};
const car: Car = {
    type: "Toyota",
    model: "Corolla"
}

console.info(car?.model);

const anotherCar = {
    type: 'Toyota'
};
anotherCar.type = 'Ford'


const newCar: { type: string, speed?:number} = {
    type: 'Toyota'
}

newCar.speed = 23;

console.info(newCar)