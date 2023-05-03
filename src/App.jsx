import { useState } from "react";
import fetchWeather from "./functions/fetchWeather";
import Form from "./components/Form";
import WeatherComponent from "./components/WeatherComponents";
import Modal from "./components/Modal";
function App() {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const onFormSubmit = async (cityName) => {
		const [fetchedData, error] = await fetchWeather(cityName);
		if(error !== null){
			console.log(error);
			setError(error.request.status);
			return;
		}
		setData(fetchedData);
		setError(null);
	};
	return (
		<div className="container">
			<h1>Weather Checking App</h1>
			<div className="content border"  style={{marginBottom: data===null ? "300px" : "100px"}}>
				<Form onSubmit={onFormSubmit} />
				<WeatherComponent data={data} />
				<Modal isError={error} />
			</div>
		</div>
	);
}

export default App;
