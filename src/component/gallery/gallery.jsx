import React, { useRef } from 'react'
import './gallery.css';
const gallery = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
   if(tx > -75){
    tx -= 25;
   }
   slider.current.style.transform=`translateX(${tx}%)`
  };

  const slidebackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="gallery">
      <img
        src="https://i.ibb.co/PsvGbj1M/next-icon.png"
        className="next-btn "
        onClick={slideForward}
      />
      <img
        src="https://i.ibb.co/21qpQfQQ/back-icon.png"
        className="back-btn "
        onClick={slidebackward}
      />
      <div className="slider" ref={slider}>
        <img src="https://i.ibb.co/Y75B8nt0/c5.jpg" alt="" />
        <img src="https://i.ibb.co/jkC4bLSX/c5.jpg" alt="" />
        <img src="https://i.ibb.co/DDbtBvyV/ui.jpg" alt="" />
        <img src="https://i.ibb.co/s98yfg11/m1.jpg" alt="" />
        <img src="https://i.ibb.co/9krH50tW/m2.jpg" alt="" />
        <img src="https://i.ibb.co/M5D81VNh/ima.jpg" alt="" />
        <img src="https://i.ibb.co/8DDzw4vf/r2.jpg" alt="" />
        <img src="https://i.ibb.co/pv4jGQ3B/download.jpg" alt="" />
        <img src="https://i.ibb.co/ycF6cc5B/c24.jpg" alt="" />
        <img src="https://i.ibb.co/Y4ppvg5s/rth.jpg" alt="" />
      </div>
    </div>
  );
}

export default gallery