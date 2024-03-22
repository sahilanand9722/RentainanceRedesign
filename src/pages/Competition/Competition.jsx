import React, { useState, useEffect } from "react";
import "./competition.scss";
import Atop from "../../Img/arrowTop.png";
import Aright from "../../Img/arrowRight.png";
import Abottom from "../../Img/arrowBottom.png";
import Aleft from "../../Img/arrowLeft.png";
import RCLogo from "../../Img/RCLogo.png";
import Atxt1 from "../../Img/Ctxt1.png";
import Atxt2 from "../../Img/Ctxt2.png";
import Atxt3 from "../../Img/Ctxt3.png";
import Atxt4 from "../../Img/Ctxt4.png";
import Atxt5 from "../../Img/Ctxt5.png";

const compData = [
  {
    id: 1,
    p1: "Property",
    p2: "AGGREGATION",
  },
  { id: 2, p1: "Legal", p2: "SERVICES" },
  { id: 3, p1: "Broker", p2: "MANAGEMENT" },
  { id: 4, p1: "Credit", p2: "BUREAU" },
];

const Competition = ({ navID }) => {
  const [flag, setFlag] = useState(0);
  const [flag1, setFlag1] = useState(false);

  useEffect(() => {
    let x = setTimeout(() => {
      setFlag(1);
    }, 500);

    let y = setTimeout(() => {
      setFlag1(true);
    }, 1000);

    if (navID !== 7) {
    setFlag(0);
    setFlag1(false);
    }

    return () => {
      clearTimeout(x);
      clearTimeout(y);
    };
  });

  return (
    <div className="competition-main-comp">
      <img
        className="rc-logo"
        src={RCLogo}
        alt=""
        style={{ transform: flag >= 1 && "rotate(0deg) scale(1)" }}
      />
      <img
        className="a-top"
        src={Atop}
        alt=""
        style={{ transform: flag >= 1 && "translateY(-80%) scale(1" }}
      />
      <img
        className="a-right"
        src={Aright}
        alt=""
        style={{ transform: flag >= 1 && "translateX(50%) scale(1" }}
      />
      <img
        className="a-bottom"
        src={Abottom}
        alt=""
        style={{ transform: flag >= 1 && "translateY(80%) scale(1" }}
      />
      <img
        className="a-left"
        src={Aleft}
        alt=""
        style={{ transform: flag >= 1 && "translateX(-50%) scale(1" }}
      />
      {compData.map((val)=>{
        return(
      <div
        className="comp-outer-circle"
        style={{
          transform:val.id === 1 ? (flag1 && "translate(-150%,-130%) rotate(0) scale(1)") : val.id === 2 ? ( flag1 && "translate(50%,-130%) rotate(0) scale(1)") : val.id === 3 ? (flag1 && "translate(50%,30%) rotate(0) scale(1)") : val.id === 4 && (flag1 && "translate(-150%,30%) rotate(0) scale(1)"),
          justifyContent: (val.id ===2 || val.id ===3) && "flex-start",
          background:val.id ===2 ? "linear-gradient(235deg, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 55%)" :  val.id ===3 ? "linear-gradient(325deg, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 55%)" : val.id ===4 &&  "linear-gradient(20deg, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 55%)"   
        }}
      >
        <div className="comp-inner-circle">
          <div className="comp-inner-most">
            <p>{val.p1}</p>
            <p>{val.p2}</p>
          </div>
        </div>
      </div>)

      })}
    
    </div>
  );
};

export default Competition;
