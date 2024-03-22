import React, { useState, useEffect } from "react";
import "./scope.scss";
import LappyScope from "../../Img/LappySol.png"
import ScopeBg from "../../Img/scopeBg.png"
import FirstE from "../../Img/firsteye.png"
import SecondE from "../../Img/secondeye.png"
import ThirdE from "../../Img/lasteye.png"

const Scope = ({ navID }) => {
  const [count, setcount] = useState(0);
  useEffect(() => {
    if (navID === 4) {
      let x = setTimeout(() => {
        setcount(1);
      }, 500);
      let y = setTimeout(() => {
        setcount(2);
      }, 1000);
      let z = setTimeout(() => {
        setcount(3);
      }, 1500);
      let l = setTimeout(() => {
        setcount(4);
      }, 2000);
      return () => {
        clearTimeout(x);
        clearTimeout(y);
        clearTimeout(z);
        clearTimeout(l);
      };
    } else setcount(0);
  }, [navID]);

  let arr1 = [];
  for (let i = 1; i < 20; i++) {
    if(i<10){
      arr1.push("0" + i);
    }
    else
    arr1.push(i);
  }

  // console.log(count, "sdfhjkbsdijh");

  return (
    <div className="scope-main-container">
      <div className="left-scope">
        <img className="lappy-scope" src={LappyScope} alt="" />
        <div className="scope-heading">
        <h2 > MARKET</h2>
        <h2 > ANALYSIS</h2>
        </div>
        <div className="left-Sbottom">
         <img className="first-eye" src={FirstE} alt="" />
         <img className="second-eye" src={SecondE} alt="" style={{transform:count >= 1 && "translateX(27vw)"}} />
         <img className="third-eye" src={ThirdE} alt=""  style={{transform:count >= 1 && "translateX(54vw)"}}/>
         <div className="Stxt-container" style={{opacity:count >=1 && 1}}>
         <div className="Stxt-head">
            <h2>TAM</h2>
            <h2>Total Available <br/> Market</h2>
            <div className="Scope-lg-border"></div>
          </div>
          <div className="Sbtn-filler" style={{transform:count >=1 && "scale(1)"}}>
            <div className="Sbtn-part-filler"></div>
          </div>
          <h1>4.6 <span>CR</span></h1>
         </div>
         <div className="Stxt-container" style={{transform:"translateX(33vw)",opacity:count >=1 && 1}}>
         <div className="Stxt-head">
            <h2>TAM</h2>
            <h2>Total Available <br/> Market</h2>
            <div className="Scope-lg-border"></div>
          </div>
          <div className="Sbtn-filler" style={{transform:count >=1 && "scale(1)"}}>
            <div className="Sbtn-part-filler"></div>
          </div>
          <h1>4.6 <span>CR</span></h1>
         </div>
         <div className="Stxt-container" style={{transform:"translateX(65vw)",opacity:count >=1 && 1}}>
         <div className="Stxt-head">
            <h2>TAM</h2>
            <h2>Total Available <br/> Market</h2>
            <div className="Scope-lg-border"></div>
          </div>
          <div className="Sbtn-filler" style={{transform:count >=1 && "scale(1)"}}>
            <div className="Sbtn-part-filler"></div>
          </div>
          <h1>4.6 <span>CR</span></h1>
         </div>
         </div>
      </div>
      <div className="right-scope">
      <img className="scope-Bg" src={ScopeBg} alt="" />
      <div className="cylinder-box">
      <div className="cylinder">
        <div
          className="scope-txt"
          style={{ transform: count >= 1 && "translateY(-7vw)" }}
        >
          <div
            className="num-txt1"
            style={{ transform: count >= 1 && "translateY(-72vw)" }}
          >
            {arr1.length !== 0 &&
              arr1.map((val) => {
                return <p>{val}</p>;
              })}
          </div>
          <h2>M</h2>
        </div>
        <div
          className="top"
          style={{ transform: count >= 1 && "translateY(-7vw)" }}
        ></div>
        <div
          className="heightt"
          style={{ transform: count >= 1 && "scaleY(8)" }}
        ></div>
        <div className="bott"></div>
      </div>
      <div className="cylinder">
      <div
          className="scope-txt"
          style={{ transform: count >= 1 && "translateY(-3vw)" }}
        >
          <div
            className="num-txt1"
            style={{ transform: count >= 1 && "translateY(-28.3vw)" }}
          >
            {arr1.length !== 0 &&
              arr1.map((val) => {
                return <p>{val}</p>;
              })}
          </div>
          <h2>M</h2>
        </div>
        <div
          className="top"
          style={{ transform: count >= 1 && "translateY(-3vw)" }}
        ></div>
        <div
          className="heightt"
          style={{ transform: count >= 1 && "scaleY(4)" }}
        ></div>
        <div className="bott"></div>
      </div>
      <div className="cylinder">
      <div
          className="scope-txt"
          style={{ transform: count >= 1 && "translateY(-6vw)" }}
        >
          <div
            className="num-txt1"
            style={{ transform: count >= 1 && "translateY(-48.2vw)" }}
          >
            {arr1.length !== 0 &&
              arr1.map((val) => {
                return <p>{val}</p>;
              })}
          </div>
          <h2>M</h2>
        </div>
        <div
          className="top"
          style={{ transform: count >= 1 && "translateY(-6vw)" }}
        ></div>
        <div
          className="heightt"
          style={{ transform: count >= 1 && "scaleY(7)" }}
        ></div>
        <div className="bott"></div>
      </div>
      <div className="cylinder">
      <div
          className="scope-txt"
          style={{ transform: count >= 1 && "translateY(-10vw)" }}
        >
          <div
            className="num-txt1"
            style={{ transform: count >= 1 && "translateY(-60vw)" }}
          >
            {arr1.length !== 0 &&
              arr1.map((val) => {
                return <p>{val}</p>;
              })}
          </div>
          <h2>%</h2>
        </div>
        <div
          className="top"
          style={{ transform: count >= 1 && "translateY(-10vw)" }}
        ></div>
        <div
          className="heightt"
          style={{ transform: count >= 1 && "scaleY(11)" }}
        ></div>
        <div className="bott"></div>
      </div>
      </div>
      <div className="lorem-scope" 
      // style={{opacity:count >= 1 && 1}}
      >
        <p>Lorem ipsum <br/> dolor</p>
        <p>Lorem ipsum <br/> dolor</p>
        <p>Lorem ipsum <br/> dolor</p>
        <p>Lorem ipsum <br/> dolor</p>
      </div>
      <div className="tam-txt" style={{transform: count >= 1 && "scale(0)"}}>
        <h1>TAM, SAM, SOM</h1>
        <h1 className="tam-analysis">ANALYSIS</h1>
      </div>

      </div>
    </div>
  );
};

export default Scope;
