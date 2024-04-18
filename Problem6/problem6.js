function findBMWAndAudiCars(inventory) {
    return inventory.filter(car=>(car.car_make==='BMW')||(car.car_make==='Audi'));
}

module.exports = findBMWAndAudiCars;
