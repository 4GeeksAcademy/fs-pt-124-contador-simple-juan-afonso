import React from "react";
import "../../styles/index.css";

const Digit = ({digit}) => {
    return (
        <div className="digit-square bg-dark text-white p-3 m-1 rounded ">
            {digit}
        </div>
    )
}

export default Digit