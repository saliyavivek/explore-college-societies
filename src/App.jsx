import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
// import Card from "./components/Card/Card";
import CardOne from "./components/CardOne/CardOne.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Navbar from "./components/Navbar/Navbar";
import data from "./data.js";

function App() {
  const [search, setSearch] = useState("");
  const [resultItems, setResultItems] = useState([]);
  const handleSearch = () => {
    const result = data.filter((item) => item.title.toLowerCase() === search);
    setResultItems(result);
  };
  return (
    <>
      <Navbar />
      <Banner />
      <Hero />
      {/* {data.map((item) => (
        <Card key={item.id} item={item} />
      ))} */}
      <div className="section">
        <h1 className="card-one-heading">Clubs & Societies</h1>
        <div className="search-container">
          <div className="search-club">
            <input
              type="text"
              placeholder="Search Club or Societies"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              onKeyUp={handleSearch}
            />
            <i className="fa-solid fa-magnifying-glass"></i>
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
    </>
  );
}

export default App;
