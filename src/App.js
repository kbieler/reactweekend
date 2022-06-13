import React from 'react';
import './css/App.css';
import Navbar from './components/navbar';
import {Routes, Route} from 'react-router-dom';
import Animalinv from './views/animals';
import Pack from './views/pack';
import Home from './views/home';



function App() {

  return (
    <React.Fragment>
      
      <Navbar />
        <div className = "container">
        <div className="App">
          <h1>Wild Assembly</h1>
          
        </div>
        </div>
      <Routes>
        <Route children path= '/' element={<Home />} />
        <Route children path= '/animals' element={<Animalinv />} />
        <Route children path= '/team' element={<Pack />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
