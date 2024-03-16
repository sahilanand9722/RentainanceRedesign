import React from "react";
import "./ProbDiv.scss";
import {ProbDivData} from "./ProbDivData.js";
import RedPin  from "../../Img/redPin.png";

function ProbDiv({btnClk}){

    // console.log(btnClk,"dfkjdbfjb");
    return(
        <div className="prob-right-manage">
           { ProbDivData.map((val)=>{
            return(
            <div className="cardP" style={{transform:!btnClk ? (val.id === 2 ? "translate(-37%,-50%) scale(0.9)" : val.id === 3 ? "translate(-24%,-50%) scale(0.75)" : val.id === 4 && "translate(-12%,-50%) scale(0.6)") : (val.id === 1 ? "translate(-100%,-70%) scale(0.6)" : val.id === 2 ? "translate(0%,-70%) scale(0.6)" : val.id === 3 ? "translate(-100%,0%) scale(0.6)" : val.id === 4 && "translate(0%,0%) scale(0.6)") ,filter:!btnClk && ((val.id === 2 || val.id === 3 || val.id === 4)&& "blur(5px)"), zIndex:val.id === 1 ? 3 : val.id === 2 ? 2 : val.id === 3 ? 1 : 0}}>   
            <img className="probR-manage" src={val.img} alt="" />
            <div className="probR-bottom">
                <div className="probR-p1">
                    <img className="redPin" src={RedPin} alt="" />
                    <p>{val.p1}</p>
                </div>
                <div className="probR-p1">
                    <img className="redPin" src={RedPin} alt="" />
                    <p>{val.p2}</p>
                </div>
                <div className="probR-p1">
                    <img className="redPin" src={RedPin} alt="" />
                    <p>{val.p3}</p>
                </div>
            </div>
            </div> 
            )
           })}

        </div>
    )
}

export default ProbDiv;