let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2,
};

for (const prop in statistics) {
    // If name of property starts with a letter r
    if (prop.startsWith('r')) {
        console.log(`${prop}: ${statistics[prop]}`);
    }
    // If value of the property is an odd number
    // odd number % 2 = 1 (always)
    else if (statistics[prop] % 2 == 1) {
        console.log(`${prop}: ${statistics[prop]}`);
    }
}