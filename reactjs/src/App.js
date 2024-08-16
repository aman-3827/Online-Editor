import { useState, useEffect } from 'react';
import './App.css';


const App = () => {
  const [counter, setCounter] = useState(100);

  useEffect(() => {
    setCounter(100);
    }
  )


  const isUserLoggedIN = true;
  return (
    <div className="App">
     <button onClick={() => setCounter((prevCount) => prevCount-1)}>-</button>
     <h1>{counter}</h1>
     <button onClick={() => setCounter((nextCount => nextCount+1))}>+</button>
     
    </div>
  );
}

export default App;
