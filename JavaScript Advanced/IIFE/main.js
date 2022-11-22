// IIFE

const app = (function () {
    // Private functions
    const cars = []
    return {
        get(index) { return cars[index] },
        add(car) {
            cars.push(car)
        },
        edit(index, car) {
            cars[index]=car
        },
        delete(index) {
            cars.splice(index, 1)
        },
    }
})()