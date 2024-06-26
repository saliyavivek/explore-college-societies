import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import CardOne from "./components/CardOne/CardOne.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Navbar from "./components/Navbar/Navbar";
import data from "./data.js";
import Maintenance from "./Maintenance.jsx";

function App() {
  const [search, setSearch] = useState("");
  const [resultItems, setResultItems] = useState([]);
  const handleSearch = () => {
    const result = data.filter(
      (item) => item.title.toLowerCase() == search.toLowerCase()
    );
    setResultItems(result);
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
    if (e.key === "Backspace") {
      return setResultItems([]);
    }
  };
  return (
    <div className="App">
      {/* <Maintenance /> */}
      <Navbar />
      <Banner />
      <Hero />
      <div className="section">
        <h1 className="card-one-heading">Clubs & Societies</h1>
        <div className="search-container">
          <div className="search-club">
            <input
              type="text"
              placeholder="Search Clubs or Societies"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              onKeyUp={(e) => handleEnterPress(e)}
            />
            <i
              className="fa-solid fa-magnifying-glass"
              onClick={handleSearch}
            ></i>
          </div>
        </div>
        {resultItems.length ? (
          <div className="card-one-container">
            {resultItems.map((item) => (
              <CardOne key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="card-one-container">
            {data.map((item) => (
              <CardOne key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
