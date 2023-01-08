//today's forcast is 293 kelvin
const kelvin=0;
//celsius = kelvin -273
const celsius = kelvin - 273
//using template literals and the equation given
let fahrenheit= celsius * (9/5) + 32
//No need for let, this is to round down
fahrenheit= Math.floor(fahrenheit)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)
