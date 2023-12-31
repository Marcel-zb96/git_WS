// Usage: node tasks.js

//-------------------------------------------------------------------------
// Task 1: getTargetBeer() should return the `name` of the first beer.
// Task 2: getTargetBeer() should return the `brewery` of the first beer.
//-------------------------------------------------------------------------

const getBeers = require('../data')

function getTargetBeer() {
    const beers = getBeers()
    const firstBeer = beers.at(0)
    return [firstBeer.name, beers[beers.length -1].name]
}

console.log(getTargetBeer())
