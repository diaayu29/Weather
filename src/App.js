import React from 'react';
import EnterSearch from './HandleClick'
import './App.css';
import DisplayLocationInfo from './GetGeolocation';






function App() {

  return (
    <div className="App">
      <div className="Search-column">
        <input placeholder="Search a city" className="Keyword"></input>
        <i className="fas fa-search" onClick={EnterSearch}></i>
      </div>
        <div className="Result" id="Result"></div>
    </div>
  );
}




export default App

