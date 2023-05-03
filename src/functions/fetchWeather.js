import axios from "axios";
const fetchWeather = async (cityName) => {
	const key = "7355004621882f3bd7938a0a689e67b8";
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`;
	let errorMessage=null;
	let fetchedData=null;
	await axios(url)
		.then((response) => {
			fetchedData = response.data;
		})
		.catch((error) => {
			errorMessage = error;
		});
	return [fetchedData, errorMessage];
};
export default fetchWeather;
