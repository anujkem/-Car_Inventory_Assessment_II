function findCarById(inventory, id) {
    const foundCars = inventory.filter(car => car.id === id);
    return foundCars.length > 0 ? foundCars[0] : null;
}

module.exports = findCarById;