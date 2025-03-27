import React from 'react';
import Navbar from './Component/NavbarComponent/NavbarComponent';
import './App.css';
import AmazonHeroComponent from './Component/Home/AmazonHeroComp/AmazonHeroComp';
function App() {
  return (
    <div className="App">
      <Navbar />
      <AmazonHeroComponent />
     
    </div>
  );
}

export default App;