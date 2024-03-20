import React,{useState,useEffect} from 'react';
import "./thankYou.scss"
import TycardBg from "../../Img/tycardBG.png";
import TyBoy from "../../Img/ty-boyImg.png";
import TYMail from "../../Img/mail.png";
import TYLocation from "../../Img/location.png";
import TYPhone from "../../Img/phone.png";
import TYImg from "../../Img/tyImg.png";
import LinkedIn from "../../Img/linkedinty.png";
import Facebook from "../../Img/facebookty.png";
import Youtube from "../../Img/youtubety.png";
import Instagram from "../../Img/instagramty.png";
import RlogoSol from "../../Img/RlogoSol.png";

const ThankYou = ({navID}) => {
  const [flag,setFlag]=useState(false);
  const [flag1,setFlag1]=useState(false);

  useEffect(()=>{
  
 let x = setTimeout(()=>{
    setFlag1(true);
  },1500);

    if(navID !== 13)
    setTimeout(()=>{setFlag1(false)},400)

    return ()=>{
    clearTimeout(x);
    }
  })     

  return (
    <div className='thankyou-main-container'>
     
     <div className="ty-main-card" style={{transform: flag1 && "rotate3d(0, 1, 0,0deg)"}}>
     <img className='ty-img' src={TycardBg} alt="" />
     <div className="rlogo-ty" style={{opacity: flag1 && 0}}>
      <img className='r-logoSol-ty' src={RlogoSol} alt="" />
      <h2>Invest-Nest-Rest</h2>
     </div>
     <div className="ty-circle">
      <img className="ty-boy" src={TyBoy} alt="" />
     </div>
     <div className="ty-card-data">
      <div className="ty-btn-outer-box">
       <div className="ty-btn-box">
          <h1 >Mark <span>Gary</span></h1>
          <h2>Founder</h2>
       </div>
       </div>
       <div className="ty-lower-box">
        <div className="ty-b1">
          <p>mark@rentainance.com</p>
          <img className="ty-com" src={TYMail} alt="" />
        </div>
        <div className="ty-b2">
          <p>+91-91xxxxxxxx</p>
          <img className="ty-com" src={TYPhone} alt="" />
        </div>
        <div className="ty-b3">
          <p>21,Bar Street,XYZ,Delhi.</p>
          <img className="ty-com" src={TYLocation} alt="" />
        </div>
       </div>
     </div>
     </div>
     <div className="ty-text">
      <h1>THANK</h1>
      <h1>YOU</h1>
     </div>
     <div className="ty-img-holder">
      
      <div className="ty-img-inside">
       <img className="thankY-Img" src={TYImg} alt="" />
      </div>
     </div>
     <div className="ty-service-txt">
        <h2>Our team is at your service</h2>
        <div className="ty-btn-container">
          <div className="ty-btn1" onClick={()=>{setFlag(false)}}>
            <div className="tyh2-txt1"> <h2 style={{backgroundColor:!flag && "#FD3A3A"}}>Schedule a Meeting</h2> </div>
            </div>
          <div className="ty-btn2" onClick={()=>{setFlag(true)}}>
          <div className="tyh2-txt2"> <h2 style={{backgroundColor:flag && "#FD3A3A"}}>Contact Us</h2> </div>
          </div>
        </div>
      </div>
      <div className="ty-topmost">
        <div className="ty-topmost-1">
         <h2>Our Handles</h2>
        <div className="ty-icons">
          <img className="icon-ty" src={LinkedIn} alt=""/>
          <img className="icon-ty" src={Youtube} alt=""/>
          <img className="icon-ty" src={Facebook} alt=""/>
          <img className="icon-ty" src={Instagram} alt=""/>
        </div>
        </div>
        <div className="ty-topmost-2">

        </div>
      </div>
    </div>
  )
}

export default ThankYou