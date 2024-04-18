function countCarsOlderThan2000(inventory) {
    return inventory.filter(car=>car.car_year<2000).length;
}

module.exports = countCarsOlderThan2000;
