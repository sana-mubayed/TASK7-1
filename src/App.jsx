import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('#fff');
  const [popupMessage, setPopupMessage] = useState('');
  const [isIncrementing, setIsIncrementing] = useState(true);

  const handleIncrease = () => {
    if (count >= 1000) return;
    if (count >= 100) {
      setCount(count + 100);
    } else if (count >= 10) {
      setCount(count + 10);
    } else {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count <= 0) return;
    if (count > 100) {
      setCount(count - 100);
    } else if (count > 10) {
      setCount(count - 10);
    } else {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    if (count === 1000) {
      setIsIncrementing(false);
      setBackgroundColor('#ff7766');
      setPopupMessage('Incredible! You reached 1000!');
    } else if (count === 100) {
      setPopupMessage('Incredible! You reached 100!');
      setBackgroundColor('#ffcccc');

    }
    else if (count === 10) {
      setPopupMessage('Incredible! You reached 10!');
      setBackgroundColor('#ff9999');

    }
    else if (count === 0) {
      setIsIncrementing(true);
    } else {
      setPopupMessage('');
    }
  }, [count]);

  useEffect(() => {
    setPopupMessage('Welcome to the counter app!');
    const timer = setTimeout(() => setPopupMessage(''), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app" style={{ backgroundColor }}>
      <p>Count: {count}</p>
      {isIncrementing ? (<button onClick={handleIncrease}>Increase</button>) : (<button onClick={handleDecrease}>Decrease</button>)}
      {popupMessage && (<div className="popup">
        <div className="popup-content">
          <p>{popupMessage}</p>
        </div>
      </div>
      )}
    </div>
  );
}

export default App;
