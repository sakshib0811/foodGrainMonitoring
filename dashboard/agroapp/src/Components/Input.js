import React, {useState} from 'react';
import { db } from '../firebase';

const Input = () => {
    const [distance, setDistance] = useState("");
    const [co2, setCO2] = useState("");
    const [moisture, setMoisture] = useState("");
    const [temperature, setTemperature] = useState("");
    const [humidity, setHumidity] = useState("");
    const clickHandler = (e) => {
        e.preventDefault();
        try{
            db.collection("sensordata").add({
                humidity: humidity,
                moisture: moisture, 
                temp: temperature, 
                gasLevel: co2,
                quantity: distance
            });
        } catch (err) {
            console.log(err);
        }
        setCO2("");
        setDistance("");
        setHumidity("");
        setTemperature("");
        setMoisture("");
    }
  return (
    <div>
        <form action="post">
            <ul style={{listStyle: "none"}}>
                <li>
                    <input type="text" placeholder='Distance' value={distance} onChange={
                        (e) => {
                            setDistance(e.target.value);
                        }
                    } />
                </li>
                <li>
                    <input type="text" placeholder='CO2 level' value={co2} onChange={
                        (e) => {
                            setCO2(e.target.value);
                        }
                    } />
                </li>
                <li>
                    <input type="text" placeholder='Humidity' value={humidity} onChange={
                        (e) => {
                            setHumidity(e.target.value);
                        }
                    } />
                </li>
                <li>
                    <input type="text" placeholder='Moisture' value={moisture} onChange={
                        (e) => {
                            setMoisture(e.target.value);
                        }
                    }/>
                </li>
                <li>
                    <input type="text" placeholder='Temperature' value={temperature} onChange={
                        (e) => {
                            setTemperature(e.target.value);
                        }
                    } />
                </li>
            </ul>
            <button onClick={clickHandler}>Submit</button>
        </form>
    </div>
  )
}

export default Input