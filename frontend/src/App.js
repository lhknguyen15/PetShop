import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import axios from "axios";
import { useEffect, useState } from "react";
import Home from "./Home/Home";
import DogsPage from "./Dogs/DogsPage";
import Cart from "./Cart/Cart";
import Navbar from "./Navbar/NavBar";
function App() {
  const [allDogs, setAllDogs] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await axios.get("http://localhost:8080/v1/dogs");
      return res;
    }
    getData().then((res) => setAllDogs(res.data));
    getData().catch((err) => console.log(err));
  }, []);
  return (
    <Router>
      <Navbar />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dogs" element={<DogsPage allDogs={allDogs} />} />
          <Route path="/checkout" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
