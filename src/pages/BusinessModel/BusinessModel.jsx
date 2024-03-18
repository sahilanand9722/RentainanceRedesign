import React, { useState, useEffect } from "react";
import "./businessModel.scss";
import BMbg from "../../Img/bm-bg.png";
import ModelTxt from "../../Img/modelTxt.png";
import BMIcon from "../../Img/bmIcon.png";
import BMDot from "../../Img/bmDot.png";
import BMBorder from "../../Img/bmBorder.png";
import FwdBtn from "../../Img/forward.png";
import BwdBtn from "../../Img/backward.png";

import BmDivComp from "../../components/BmDivComp/BmDivComp";

const BusinessModel = ({ navID }) => {
  const [count, setCount] = useState(0);
  const [flag1, setFlag1] = useState(false);
  const [butClk, setButClk] = useState(false);

  useEffect(() => {
    let x = setTimeout(() => {
      if (count === 0) setCount(1);
    }, 500);

    let y = setTimeout(() => {
      setFlag1(true);
    }, 1000);

    let z = setTimeout(() => {
      if (count === 1) setCount(3);
    }, 1500);

    let l=setTimeout(()=>{
      if (count === 3) setCount(4);
    },2000);

    if (navID !== 10) {
      setCount(0);
      setFlag1(false);
    }

    console.log(count, "dskjhbdsojbsdkjb ");
    return () => {
      clearTimeout(x);
      clearTimeout(y);
      clearTimeout(z);
    };
  });

  return (
    <div className="bm-main-container">
      <img className="bm-bg" src={BMbg} alt="" />
      <div className="black-blanket"></div>
      <div className="head-div">
        <div
          className="semi-circle1"
          style={{
            transform: count >= 1 && "rotate(8deg)",
            translate: count >= 1 && "0.5vw",
          }}
        ></div>
        <div
          className="mid-red-part"
          style={{ width: count >= 1 && "44vw" }}
        ></div>
        <div
          className="semi-circle2"
          style={{
            transform: count >= 1 && "rotate(8deg)",
            translate: count >= 1 && "-0.5vw",
          }}
        ></div>
        <h2 className="business-txt" style={{ translate: flag1 && "-5vw" }}>
          BUSINESS
        </h2>
        <img
          className="model-txt"
          src={ModelTxt}
          style={{ translate: flag1 && "5vw" }}
          alt=""
        />
      </div>
      <div className="graph-page" style={{ transform: count >= 3 && "translateY(0vw)" }}>
        <div className="graph1">
          <div
            className="bm-height"
            style={{ height: count >= 4 && "3vw" }}
          ></div>
          <div className="base-circle"></div>
        </div>
        <div className="graph1">
          <div
            className="bm-height"
            // style={{ height: count >= 3 && "7vw" }}
          ></div>
          <div className="base-circle"></div>
        </div>
        <div className="graph1">
          <div
            className="bm-height"
            // style={{ height: count >= 3 && "11vw" }}
          ></div>
          <div className="base-circle"></div>
        </div>
        <div className="graph1">
          <div
            className="bm-height"
            // style={{ height: count >= 3 && "16vw" }}
          ></div>
          <div className="base-circle"></div>
        </div>
      </div>
      {/* <BmDivComp butClk={butClk}/> */}
        <div className="bmcc-outer" style={{transform:"translateX(8.5vw) scale(0.65)", filter:"blur(2px)"}}>
          <div className="bmcc-inner">

            <div className="bmcc-top">
              <img className="bm-icon" src={BMIcon} alt="" />
               <h2 style={{color:"#FD3A3A"}}>Adding <span style={{color:"white",fontStyle:"italic"}}>Property</span></h2>
               <img className="bm-border" src={BMBorder} alt="" />
            </div>
            <div className="bmcc-bottom">
              <div className="bmcc-txt">
                <img className="bm-dot" src={BMDot} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur Various vestibulum at dui convallis</p>

              </div>
              <div className="bmcc-txt">
                <img className="bm-dot" src={BMDot} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur Various vestibulum at dui convallis</p>

              </div><div className="bmcc-txt">
                <img className="bm-dot" src={BMDot} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur Various vestibulum at dui convallis</p>

              </div>
            </div>
          </div>
        </div>
        <div className="bmcc-outer" style={{transform:"translateX(6vw) scale(0.75)", filter:"blur(2px)"}}>
          <div className="bmcc-inner">

            <div className="bmcc-top">
              <img className="bm-icon" src={BMIcon} alt="" />
               <h2 style={{color:"#FD3A3A"}}>Adding <span style={{color:"white",fontStyle:"italic"}}>Property</span></h2>
               <img className="bm-border" src={BMBorder} alt="" />
            </div>
            <div className="bmcc-bottom">
              <div className="bmcc-txt">
                <img className="bm-dot" src={BMDot} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur Various vestibulum at dui convallis</p>

              </div>
              <div className="bmcc-txt">
                <img className="bm-dot" src={BMDot} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur Various vestibulum at dui convallis</p>

              </div><div className="bmcc-txt">
                <img className="bm-dot" src={BMDot} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur Various vestibulum at dui convallis</p>

              </div>
            </div>
          </div>
        </div>
        <div className="bmcc-outer" style={{transform:"translateX(3.5vw) scale(0.85)", filter:"blur(2px)"}}>
          <div className="bmcc-inner">

            <div className="bmcc-top">
              <img className="bm-icon" src={BMIcon} alt="" />
               <h2 style={{color:"#FD3A3A"}}>Adding <span style={{color:"white",fontStyle:"italic"}}>Property</span></h2>
               <img className="bm-border" src={BMBorder} alt="" />
            </div>
            <div className="bmcc-bottom">
              <div className="bmcc-txt">
                <img className="bm-dot" src={BMDot} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur Various vestibulum at dui convallis</p>

              </div>
              <div className="bmcc-txt">
                <img className="bm-dot" src={BMDot} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur Various vestibulum at dui convallis</p>

              </div><div className="bmcc-txt">
                <img className="bm-dot" src={BMDot} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur Various vestibulum at dui convallis</p>

              </div>
            </div>
          </div>
        </div>
        <div className="bmcc-outer" >
          <div className="bmcc-inner">

            <div className="bmcc-top">
              <img className="bm-icon" src={BMIcon} alt="" />
               <h2 style={{color:"#FD3A3A"}}>Adding <span style={{color:"white",fontStyle:"italic"}}>Property</span></h2>
               <img className="bm-border" src={BMBorder} alt="" />
            </div>
            <div className="bmcc-bottom">
              <div className="bmcc-txt">
                <img className="bm-dot" src={BMDot} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur Various vestibulum at dui convallis</p>

              </div>
              <div className="bmcc-txt">
                <img className="bm-dot" src={BMDot} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur Various vestibulum at dui convallis</p>

              </div><div className="bmcc-txt">
                <img className="bm-dot" src={BMDot} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur Various vestibulum at dui convallis</p>

              </div>
            </div>
          </div>
        </div>
       
       <div className="price-chart">
        <div className="bm-btn">
          <p>Price Chart</p>
        </div>
       </div>
       
      </div>
  );
};

export default BusinessModel;
