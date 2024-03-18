import React from 'react'
import {BMDivData} from "./BMDivData"
import RedPin  from "../../Img/redPin.png";

const BmDivComp = ({butClk}) => {
  return (
    <div className="bm-right-manage">
           { BMDivData.map((val)=>{
            return(
            <div className="cardBM" style={{transform:!butClk ? (val.id === 2 ? "translate(-37%,-50%) scale(0.9)" : val.id === 3 ? "translate(-24%,-50%) scale(0.75)" : val.id === 4 && "translate(-12%,-50%) scale(0.6)") : (val.id === 1 ? "translate(-100%,-70%) scale(0.6)" : val.id === 2 ? "translate(0%,-70%) scale(0.6)" : val.id === 3 ? "translate(-100%,0%) scale(0.6)" : val.id === 4 && "translate(0%,0%) scale(0.6)") ,filter:!butClk && ((val.id === 2 || val.id === 3 || val.id === 4)&& "blur(5px)"), zIndex:val.id === 1 ? 3 : val.id === 2 ? 2 : val.id === 3 ? 1 : 0}}>   
            <img className="BMR-manage" src={val.img} alt="" />
            <div className="BMR-bottom">
                <div className="BMR-p1">
                    <img className="redPinB" src={RedPin} alt="" />
                    <p>{val.p1}</p>
                </div>
                <div className="BMR-p1">
                    <img className="redPinB" src={RedPin} alt="" />
                    <p>{val.p2}</p>
                </div>
                <div className="BMR-p1">
                    <img className="redPinB" src={RedPin} alt="" />
                    <p>{val.p3}</p>
                </div>
            </div>
            </div> 
            )
           })}

        </div>
  )
}

export default BmDivComp
