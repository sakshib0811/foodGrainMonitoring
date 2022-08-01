import "./App.css";
import React from "react";
import Nav from "./Components/Nav.js";
import About from "./Components/About";
import { Routes, Route } from "react-router-dom";
import Result from "./Components/Result";
import Input from "./Components/Input";
// import { db } from "./firebase";
//import { collection, query, where, getDocs } from "firebase/firestore";
function App() {
  // const [posts, setPosts] = useState([]);
  // const [quantity, setQuantity] = useState([]);
  // const [temp, setTemp] = useState([]);
  // const [co2, setCO2] = useState([]);
  // const [humidity, setHumidity] = useState([]);
  // const [moisture, setMoisture] = useState([]);

  // useEffect(() => {
  //   fetchData();
  //   // db.collection("sensordata")
  //   //   .limit(25)
  //   //   .onSnapshot((napshot)
  //   //shot.docs.map((doc) > doc.daa()));
  // }, []);

  // const fetchData = () => {
  //   db.collection("sensordata")
  //     .limit(25)
  //     .onSnapshot((snapshot) => {
  //       setPosts(snapshot.docs.map((doc) => doc.data()));
  //     });
  //   console.log(posts);
  //   for (let i = 0; i < posts.length; i++) {
  //     let a = posts[i];
  //     let c = co2;
  //     setCO2([a.gasLevel, ...c]);
  //     let h = humidity;
  //     setHumidity([a.humidity, ...h]);
  //     let m = moisture;
  //     setMoisture([a.moisture, ...m]);
  //     let q = quantity;
  //     setQuantity([a.quantity, ...q]);
  //     let t = temp;
  //     setTemp([a.temp, ...t]);
  //   }
  //   console.log(co2, humidity, moisture, quantity, temp);
  // };
  return (
    <div className="App">
      {/* <Nav /> */}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Nav
            // humidity={humidity}
            // temp={temp}
            // moisture={moisture}
            // quantity={quantity}
            // co2={co2}
            />
          }
        />
        <Route path="about" element={<About />} />
        <Route path="result" element={<Result />} />
        <Route path="input" element={<Input />} />
      </Routes>
    </div>
  );
}

export default App;
