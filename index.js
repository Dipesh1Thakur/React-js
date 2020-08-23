import React from 'react';
import ReactDOM from 'react-dom';
import Image from "./Images";
import "./webpage.css";
import Gallery from "./Gallery";
// console.log(Gallery[0]);

ReactDOM.render(
  <>
  <h1 className="heading">The windows 10 walpapers Gallery</h1>
  <Image
  imgsrc={Gallery[0].imgsrc}
  title={Gallery[0].title}
  name={Gallery[0].sname}
  />
  <Image
  imgsrc={Gallery[1].imgsrc}
  title={Gallery[1].title}
  name={Gallery[1].sname}
  />
  <Image
  imgsrc={Gallery[2].imgsrc}
  title={Gallery[2].title}
  name={Gallery[2].sname}
  />
  <Image
  imgsrc={Gallery[2].imgsrc}
  title={Gallery[2].title}
  name={Gallery[2].sname}
  />
  <Image
  imgsrc={Gallery[0].imgsrc}
  title={Gallery[0].title}
  name={Gallery[0].sname}
  />
   <Image
  imgsrc={Gallery[1].imgsrc}
  title={Gallery[1].title}
  name={Gallery[1].sname}
  />
  </>
  ,document.getElementById('root')
);
