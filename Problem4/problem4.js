
function getCarYears(inventory) {
    return inventory.map(car => car.car_year);
}

module.exports = getCarYears;
