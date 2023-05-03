import WeatherData from "./WeatherData";

function WeatherComponent({data}){
    const content = data===null ? <div></div> : <WeatherData data={data}/>
    return <div>
        {content}
    </div>
}
export default WeatherComponent;