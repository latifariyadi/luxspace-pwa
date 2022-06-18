import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Browser from "./components/Browse.jsx";
import Arrived from "./components/Arrived.jsx";
import Clients from "./components/Clients.jsx";
import AssideMenu from "./components/AssideMenu.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Browser />
      <Arrived />
      <Clients />
      <AssideMenu />
      <Footer />
    </>
  );
}
export default App;
