import React from 'react';
import './App.css';
import AmazonHeroComponent from './Component/Home/AmazonHeroComp/AmazonHeroComp';
import Navbar from './Component/NavbarComponent/NavbarComponent';
import Services from "./Components/Services/Services";
import Store from "./Components/FreeStore/FreeStore";
import Footer from "./Components/Footer/Footer";


function App() {


  return (    
    <div className="App">
      <Navbar />
      <AmazonHeroComponent />
      <Services/>
      <Store/>
      <Footer/>
    </div>
  )
}


export default App
