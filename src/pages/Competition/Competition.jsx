import React,{useState,useEffect} from 'react';
import "./competition.scss"
import Atop from "../../Img/arrowTop.png";
import Aright from "../../Img/arrowRight.png";
import Abottom from "../../Img/arrowBottom.png";
import Aleft from "../../Img/arrowLeft.png";
import RCLogo from "../../Img/RCLogo.png";
import Atxt1 from "../../Img/Ctxt1.png"
import Atxt2 from "../../Img/Ctxt2.png"
import Atxt3 from "../../Img/Ctxt3.png"
import Atxt4 from "../../Img/Ctxt4.png"
import Atxt5 from "../../Img/Ctxt5.png"

const Competition = ({navID}) => {
  const[flag,setFlag]=useState(0);

  
  useEffect(()=>{
    let x=setTimeout(()=>{
      setFlag(1);
    },500);

    let y=setTimeout(()=>{
    setFlag(2);
    },1000);

    if(navID !== 8)
    setFlag(0);

    return ()=>{
      clearTimeout(x);
      clearTimeout(y);
    }
  })

  return (
    <div className='competition-main-comp'>
       <img className='rc-logo' src={RCLogo} alt="" style={{transform:flag >=1 && "rotate(0deg) scale(1)"}} />
       <img className='a-top' src={Atop} alt="" style={{transform:flag >=1 && "translateY(-80%) scale(1"}} />
       <img className='a-right' src={Aright} alt="" style={{transform:flag >=1 && "translateX(50%) scale(1"}} />
       <img className='a-bottom' src={Abottom} alt="" style={{transform:flag >=1 && "translateY(80%) scale(1"}} />
       <img className='a-left' src={Aleft} alt="" style={{transform:flag >=1 && "translateX(-50%) scale(1"}} />
       <div className='comp-outer-circle' 
       style={{transform: flag >=2 && "translate(-150%,-130%) rotate(0) scale(1)"}}
       >
        <div className='comp-inner-circle'>
          <div className='comp-inner-most'>
            <p>Property</p>
            <p>AGGREGATION</p>
          </div>
        </div>
       </div>
       <div className='comp-outer-circle' style={{transform:flag >=2 &&  "translate(50%,-130%) rotate(0) scale(1)",justifyContent:"flex-start",background: "linear-gradient(235deg, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 55%)"}}>
        <div className='comp-inner-circle'>
          <div className='comp-inner-most'>
            <p>Legal</p>
            <p>SERVICES</p>
          </div>
        </div>
       </div>
       <div className='comp-outer-circle' style={{transform:flag >=2 &&  "translate(50%,30%) rotate(0) scale(1)",justifyContent:"flex-start",background: "linear-gradient(325deg, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 55%)"}}>
        <div className='comp-inner-circle'>
          <div className='comp-inner-most'>
            <p>Broker</p>
            <p>MANAGEMENT</p>
          </div>
        </div>
       </div>
       <div className='comp-outer-circle' style={{transform:flag >=2 &&  "translate(-150%,30%) rotate(0) scale(1)",background: "linear-gradient(20deg, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 55%)"}}>
        <div className='comp-inner-circle'>
          <div className='comp-inner-most'>
            <p>Credit</p>
            <p>BUREAU</p>
          </div>
        </div>
       </div>

    </div>
  )
}

export default Competition