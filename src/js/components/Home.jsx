import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


//include images into your bundle
import Digit from "./Digit";
import { faClock } from "@fortawesome/free-regular-svg-icons";

//create your first component
const Home = ({timer, onStart, onCountdown, onStop, onReset, onResume}) => {

	const digits = String(timer).padStart(6, "0").split("");

	return (
		<div className="text-center">
      <div className="d-flex justify-content-center align-items-center bg-dark text-white p-3 mb-3">
        <div className="digit-square rounded text-white">
          <FontAwesomeIcon icon={faClock} />
        </div>
        {digits.map((d, index) => (
          <Digit key={index} digit={d} />
        ))}
      </div>


      <div className="btn-group">
        <button className="btn btn-dark m-3 rounded" onClick={onStart}>Start</button>
        <button className="btn btn-dark m-3 rounded" onClick={onCountdown}>Countdown</button>
        <button className="btn btn-dark m-3 rounded" onClick={onStop}>Stop</button>
        <button className="btn btn-dark m-3 rounded" onClick={onReset}>Reset</button>
        <button className="btn btn-dark m-3 rounded" onClick={onResume}>Resume</button>
      </div>
    </div>
	);
};



export default Home;