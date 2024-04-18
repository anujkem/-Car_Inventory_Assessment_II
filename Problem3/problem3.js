function sortCarModelsAlphabetically(inventory) {
    return inventory.map(e=>e.car_model).sort();
}

module.exports = sortCarModelsAlphabetically;
