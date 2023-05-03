function setTemp(temperature, isCelcius){
    const celsius = temperature-273.15
    const fahrenheit = (celsius*9/5)+32
    if(isCelcius){
        return celsius.toFixed(2)
    }
    return fahrenheit.toFixed(2)
}
export default setTemp;