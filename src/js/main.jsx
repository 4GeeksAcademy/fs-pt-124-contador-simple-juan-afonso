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

let timer = 0

const root = ReactDOM.createRoot(document.getElementById('root'))
setInterval(() => {
  root.render(
      <React.StrictMode>
            <Home timer={timer} />
                </React.StrictMode>,
                  )
                    timer++
                    }, 1000)