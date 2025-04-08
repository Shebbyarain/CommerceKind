import React from 'react';
import './App.css';
import Services from "./Components/Services/Services";
import Store from "./Components/FreeStore/FreeStore";
import Footer from "./Components/Footer/Footer";


function App() {


  return (    
    <div className="App">
      <Services/>
      <Store/>
      <Footer/>
    </div>
  )
}


export default App
