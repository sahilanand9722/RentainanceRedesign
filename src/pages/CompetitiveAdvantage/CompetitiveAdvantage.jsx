import React from 'react';
import "./CompetitiveAdvantage.scss";
import NoBroker from "../../Img/nobroker.png";
import Housing from "../../Img/housing.png";
import RentainanceTxt from "../../Img/rentainanceTxt.png";
import UBS from "../../Img/Ctxt2.png";
import BrokerNetwork from "../../Img/Ctxt4.png";
import YesTick from "../../Img/YesTick.png";
import NoTick from "../../Img/NoTick.png";

const compyData=[{
text:"Scoring System",
img1:YesTick,
img2:NoTick,
img3:NoTick,
img4:NoTick,
img5:NoTick
},
{
  text:"Tenant Profiling",
  img1:YesTick,
  img2:NoTick,
  img3:NoTick,
  img4:NoTick,
  img5:NoTick
},
{
text:"Rent Agreement",
img1:YesTick,
img2:YesTick,
img3:YesTick,
img4:YesTick,
img5:YesTick

},
{
  text:"Move In Photos",
  img1:YesTick,
  img2:NoTick,
  img3:NoTick,
  img4:NoTick,
  img5:NoTick
},
{
  text:"Raise Compliant",
  img1:YesTick,
  img2:NoTick,
  img3:NoTick,
  img4:NoTick,
  img5:NoTick
}]

const CompetitiveAdvantage = () => {
  return (
    <div className='comp-adv-main-container'>
      <div className="comp-adv-heading">
        <div className="comp-adv-heading-inner">
          <h2>Competitors</h2>
          <h2>ADVANTAGE</h2>
        </div>
      </div>
      <div className="comp-adv-txt">
        <div className="comp-adv-top1">
          <div className="comp-adv-top-b1">
          <h2>Features</h2>
          <img src={RentainanceTxt} alt=""/>
          <img src={NoBroker} alt=""/>
          <img src={Housing} alt=""/>
          <img src={UBS} alt=""/>
          <img src={BrokerNetwork} alt=""/>
          </div>
          <div className="under-top-b1"></div>
          <div className="under-top-b1 vertical-comp"></div>
        </div>
        <div className="comp-adv-top2">
          {compyData.map((val)=>{
            return(
           <div className="comp-p">
            <div className="comp-adv-outer">
              <div className="comp-adv-inner">
                 <h2>{val.text}</h2>
              </div>
            </div>
            <img src={val.img1} alt="" />
            <img src={val.img2} alt="" />
            <img src={val.img3} alt="" />
            <img src={val.img4} alt="" />
            <img src={val.img5} alt="" />
           </div>
            )
          })}
        </div>
      </div>
      <div className="comp-adv-vertical">

      </div>
    </div>
  )
}

export default CompetitiveAdvantage;
