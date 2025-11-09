/* This function takes a temperature in Fahrenheit and returns the equivalent 
temperature in Celsius. */
const convertToCelsius = (tempInFahrenheit) => {
  if (tempInFahrenheit == NaN) {
    return `${tempInFahrenheit} is innvalid input. Please enter a number.`;
  }
  const celsius = ((tempInFahrenheit - 32) * 5) / 9;
  //round celcium up to four decimal places
  return Math.round(celsius * 10000) / 10000;
};

console.log(convertToCelsius(55));

/*
Write a function named describeTemperature which takes a temperature 
in Fahrenheit and returns a description according to this table: */
const describeTemperature = (tempInFahrenheit) => {
  const celsius = convertToCelsius(tempInFahrenheit);
  if (celsius < 0) {
    return `very cold.`;
  } else if (celsius < 20) {
    return `cold.`;
  } else if (celsius < 30) {
    return `warm.`;
  } else if (celsius < 40) {
    return `hot.`;
  } else if (celsius >= 40) {
    return `very hot.`;
  }
};

console.log(describeTemperature(130));

/* Prompt user */
const userInput = prompt("Please enter temperature in Fahrenheit");
if (userInput === null) {
  alert(`Input is cancelled. Please click OK to close prompt.`);
} else if (userInput.trim() === "") {
  alert(`You didn't type anything. Please enter a temperature.`);
} else if (isNaN(userInput)) {
  alert(`'${userInput.trim()}' is invalid input. Please enter a number.`);
} else {
  alert(`${userInput.trim()} °F is ${convertToCelsius(userInput)} °C`);
  alert(`The weather is ${describeTemperature(userInput)}`);
}
