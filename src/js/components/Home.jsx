import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


//include images into your bundle
import Digit from "./Digit";
import { faClock } from "@fortawesome/free-regular-svg-icons";

//create your first component
const Home = ({timer}) => {

	const digits = String(timer % 10000).padStart(6, "0").split("");

	return (
		<div className="d-flex justify-content-center align-items-center bg-dark text-white p-3">
      <div className="p-3 m-1 digit-square rounded">
        <FontAwesomeIcon icon={faClock} />
		
      </div>
	  
      {digits.map((d, index) => (
        <Digit key={index} digit={d} />
      ))}
    </div>
	);
};



export default Home;