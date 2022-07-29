import "./App.css";
import Nav from "./Components/Nav.js";
import About from "./Components/About";
import { Routes, Route } from "react-router-dom";
import Input from "./Components/Input";
// import Dashboard from "./Components/Dashboard";
function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <Routes>
        <Route exact path="/" element={<Nav />} />
        <Route path="about" element={<About />} />
        <Route path="input" element={<Input />} />
      </Routes>
    </div>
  );
}

export default App;
