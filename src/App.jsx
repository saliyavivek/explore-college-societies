import "./App.css";
import Banner from "./components/Banner/Banner";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Navbar from "./components/Navbar/Navbar";
import data from "./data.js";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Hero />
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
      <Footer />
    </>
  );
}

export default App;
