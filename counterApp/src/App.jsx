import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const addCounter = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const removeCounter = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : prevCount));
  };

  return (
    <>
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>React Counter Application</h1>
      <div className="card">
        <div>
          <h2>Counter: {count}</h2>
          <button onClick={addCounter}>Increment Counter</button>
        </div>
        <br />
        <div>
          <button onClick={removeCounter} disabled={count === 0}>
            Decrement Counter
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
