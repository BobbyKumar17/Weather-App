import React,{useEffect,useState} from "react";
import { Weather } from "./components/Weather";
import './style.css';
export default function App(){
  const [lat,setlat]=useState([]);
  const [long,setlong]=useState([]);
  const [data,setData]=useState([]);
 useEffect(()=>{
  const fetchData=async()=>{
    navigator.geolocation.getCurrentPosition(function(position){
      setlat(position.coords.latitude);
      setlong(position.coords.longitude);
    });
    // console.log("latitude is ",lat);
    // console.log("longitude is ",long);
    await fetch('https://api.openweathermap.org/data/2.5/weather?lat=28.7156702&lon=77.277957&units=Metric&appid=f3c764c8ddaf38a4ecf709789e1be5dd')
    .then(res => res.json())
    .then(result => {
      setData(result)
      console.log(result);
    });
  }
        fetchData();
        
  },[lat,long])
  
   
  return(
    <div className="App">
    {(typeof data.main != 'undefined') ? (
      
      <Weather weatherData={data}/>
    ): (
      <div></div>
    )}
    
  </div>
  );
}
