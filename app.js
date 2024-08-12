// a662e6271b614161a4e231231240708

const date = document.getElementById("date");
const city = document.getElementById("city");
const temp = document.getElementById("temp");
const tempImg = document.getElementById("tempImg");
const description = document.getElementById("Description");
const tempMax = document.getElementById("tempMax");
const tempMin = document.getElementById("tempMin");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let dateObj = new Date();
let month = months[dateObj.getUTCMonth()];
let day = dateObj.getUTCDate() - 1;
let year = dateObj.getUTCFullYear();

date.innerHTML = `${month} ${day}, ${year}`;

const app = document.getElementById("app");

const getWeather = async () => {
  try {
    const cityName = document.getElementById("searchBarInput").value;
    const weatherDataFetch = await fetch(
      // `http://api.openweathermap.org/data/2.5/weather?q=${cityName}id=524901&appid=03ee240c61aa4398186a0bf3ec4a5708`,
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=03ee240c61aa4398186a0bf3ec4a5708`,

      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    const weatherData = await weatherDataFetch.json();
    console.log(weatherData);
    city.innerHTML = `${weatherData.name}`;
    description.innerHTML = `${weatherData.weather[0].main}`;
    tempImg.innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png" />`;
    temp.innerHTML = `<h2>${Math.round(weatherData.main.temp - 273.15)}°c</h2>`;
    tempMax.innerHTML = `${Math.round(weatherData.main.temp_max - 273.15)}°c`;
    tempMin.innerHTML = `${Math.round(weatherData.main.temp_min - 273.15)}°c`;
  } catch (error) {
    console.log(error);
  }
};
