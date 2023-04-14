function convertingPoundsToKgs (pounds :number): number {
    return pounds /2055


}

convertingPoundsToKgs(200)
console.log(`200 pounds is equivelent to ${convertingPoundsToKgs}`)

function convertingInchesToCms( inches : number): number{
    return inches * 2.54
}

convertingInchesToCms(200)
console.log(`200 pounds is equivalent to ${convertingInchesToCms}`)


function convertingFahrenheitToCelsius(fahrenheit : number): number{
    return (fahrenheit -32) * 5/9
}

convertingFahrenheitToCelsius(200)
console.log(`200 Fahrenheit is equivalent to ${convertingFahrenheitToCelsius(200)} Celsius`)

function convertingFeetToMeters(feet : number ): number{
    return feet *0.304

}

convertingFeetToMeters(200)
console.log(`200 Feet is equivalent to ${convertingFeetToMeters(200)} Meters`)