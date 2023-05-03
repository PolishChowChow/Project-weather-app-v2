import { useState } from "react";
import setTemp from "../functions/setTemp";

function WeatherData({ data }) {
    const [isCelcius, setIsCelcius] = useState(true);
    const baseTemp = data.main.temp
    const baseFeelsLike = data.main.feels_like
	const temperature = setTemp(baseTemp, isCelcius);
	const feelsLike = setTemp(baseFeelsLike, isCelcius);
	const symbol = isCelcius ? "°C" : "°F"
	const handleClick = () => {
		setIsCelcius(!isCelcius);
	};
    
	return (
		<div className="weather-data">
			<div className="grid">
				<div className="data">
					{data.name} ({data.sys.country}), {temperature}{isCelcius ? "°C" : "°F"}
				</div>
				<div className="data">Feels like: {feelsLike}{symbol}</div>
				<div className="border pointer switch" onClick={handleClick}>
					<div className={`${isCelcius ? "selected" : ""} switch-control`}>
                        °C
					</div>
					<div className={`${!isCelcius ? "selected" : ""} switch-control`}>
						°F
					</div>
				</div>
			</div>
			<div className="data">{data.weather[0].description}</div>
			<div className="data">Pressure: {data.main.pressure} hPa</div>
			<div className="data">WindSpeed: {data.wind.speed} km/h</div>
		</div>
	);
}
export default WeatherData;
