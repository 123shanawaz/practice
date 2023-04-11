
import React from 'react';
import Tours from './components/Tours';
import { useState } from 'react';
import data from './data';
import './index.css';

function App() {

  const [tours, setTours] = useState(data);


function removeTour(id){
  const newTours = tours.filter((tour) => tour.id !== id);
  setTours(newTours);
  }

  if(tours.length === 0){
    return (
      <div className="refresh">
        <h1>No Tours left</h1>
        <button className="btn-white" onClick={() => setTours(data)}>Refresh</button>
      </div>
      )
      };

  return (
    <div className="App">

     {/* <h1>Plan with shanawaz</h1> */}
     <Tours tours={tours} removeTour={removeTour}></Tours>
     
    </div>
  );
}

export default App;
