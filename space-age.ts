export function age(planet: string, seconds: number): number {
    // find earth age
    const earthAge = seconds / 31557600

    // create an object for planet to Orbital period in Earth Years
    const planetToEarthYears: {[key: string]: number} = {
        'mercury' : 0.2408467,
        'venus' : 0.61519726,
        'earth' : 1.0,
        'mars' : 1.8808158,
        'jupiter' : 11.862615,
        'saturn' : 29.447498,
        'uranus' : 84.016846,
        'neptune' : 164.79132
    }

    // time's the Earth age to the corresponding planet conversion ammount
    const planetAge = earthAge / planetToEarthYears[planet]
    return Number(planetAge.toFixed(2))
}

//testing for saturn
console.log(age('saturn', 2000000000))