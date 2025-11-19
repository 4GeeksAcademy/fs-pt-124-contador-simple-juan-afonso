import React from 'react'
import ReactDOM from 'react-dom/client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'))

let timer = 0;
let intervalId = null;
const startNumber = 999999;

function render() {
  root.render(
    <React.StrictMode>
      <Home
        timer={timer}
        onStart={startCounter}
        onCountdown={startCountdown}
        onStop={stopCounter}
        onReset={resetCounter}
        onResume={resumeCounter}
      />
    </React.StrictMode>
  );
}

function startCounter() {
  if (!intervalId) {
    intervalId = setInterval(() => {
      timer++;
      render();
    }, 1000);
  }
}

function startCountdown() {
  timer = startNumber;
  if (!intervalId) {
    intervalId = setInterval(() => {
      if (timer > 0) {
        timer--;
        render();
      } else {
        stopCounter();
      }
    }, 1000);
  }
}

function stopCounter() {
  clearInterval(intervalId);
  intervalId = null;
}

function resetCounter() {
  stopCounter();
  timer = 0;
  render();
}

function resumeCounter() {
  if (!intervalId) {
    intervalId = setInterval(() => {
      timer++;
      render();
    }, 1000);
  }
}

render();

