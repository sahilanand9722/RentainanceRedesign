import React from 'react';
import "./thankYou.scss"
import TycardBg from "../../Img/tycardBG.png";

const ThankYou = () => {
  return (
    <div className='thankyou-main-container'>
     
     <img className='ty-img' src={TycardBg} alt="" />
     <div className="ty-card">
       {/* <div className="whity"></div> */}
     </div>

    </div>
  )
}

export default ThankYou