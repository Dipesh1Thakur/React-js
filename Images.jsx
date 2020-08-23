import React from "react";

function Image(props){
    // console.log(props );
      return(
    <>
      <div className="imgs">
        <div className="img">
          <img src={props.imgsrc} alt="mypic" className="img1"/>
          <div className="imginfo">
          <span className="title">{props.title}</span>
          <h3 className="imgname">{props.name}</h3>
          <a href=""> <button>click here to see more wallpaers</button></a>
         
          </div>
        </div>
      </div>
    </>
      );
    }
    export default Image;