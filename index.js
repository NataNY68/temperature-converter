/* This function takes a temperature in Fahrenheit and returns the equivalent 
temperature in Celsius. */
const convertToCelsius = (tempInFahrenheit) => {
  let celsius = ((tempInFahrenheit - 32) * 5) / 9;
  //round celcium up to four decimal places
  celsius = Math.round(celsius * 10000) / 10000;
  return celsius;
};

const fahrenheits = 35;
console.log(fahrenheits, `°F is`, convertToCelsius(fahrenheits), `°C`);

/*
Write a function named describeTemperature which takes a temperature 
in Fahrenheit and returns a description according to this table: */
const describeTemperature = (tempInFahrenheit) => {
  const celsius = convertToCelsius(tempInFahrenheit);
  if (celsius < 0) {
    return `very cold`;
  } else if (celsius < 20) {
    return `cold`;
  } else if (celsius < 30) {
    return "warm";
  } else if (celsius < 40) {
    return `hot`;
  } else if (celsius >= 40) {
    return `very hot`;
  }
};

console.log(describeTemperature(130));

/* Prompt user */
const userInput = prompt("Please enter temperature in Fahrenheit");

if (userInput !== null) {
  console.log(`${userInput} °F is`, convertToCelsius(userInput), `°C`);
  console.log("The weather is", describeTemperature(userInput));
}
