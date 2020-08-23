import React from "react";

const currentDate= new Date().toLocaleDateString();
const currentTime= new Date().toLocaleTimeString();
function Heading()
{
    return  (
    <>
    
    <span className="heading"> Welcome to React </span>
    <span> 
    <h3 className="greeting">Today's date is <u> {currentDate}</u> and time <u>{currentTime}</u> .</h3>        
    </span>
    
    </>
    );
}
export default Heading;