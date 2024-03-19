import React,{useState} from 'react';
import "./flow.scss"
import FlowBg from "../../Img/flow-bg.png";
import DullKey from "../../Img/Dkey.png";
import BrightKey from "../../Img/Bkey.png";
import FlowMobile from "../../Img/FlowMobile.png";

const Flow = () => {

  const [count,setCount]=useState(1);
  let arr=[];
  for(let i=1;i<=10;i++){
   arr.push(i);
  }

  return (
    <div className='flow-main-container'>
      <img className='flow-bg' src={FlowBg} alt="" />
      <div className="ellipseR">
        <div className="ellipseW">

        </div>
      </div>
      <h1 className='flow-heading'>App Flow</h1>
      <div className="flow-semiC1"></div>
      <div className="flow-semiC2"></div>
      <div className="flow-semiC3"></div>
      <div className="flow-semiC4"></div>
      <div className="scope-text-container">
        <div className="ld1 ldc" onClick={()=>{setCount(1)}}>
          <div className="flow-inner-div"  style={{background:count === 1 && "white",boxShadow:count === 1 && "1px 1px 2.5vw 0.25vw rgba(255,255,255,1)"  }}>
            <p style={{color:count === 1 && "black",fontWeight: count === 1 && "400" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <img src={BrightKey} alt="" style={{opacity:count ===1 && 1}}/>
            <img className="dull-key" src={DullKey} alt="" />
          </div>
        </div>
        <div className="ld2 ldc" onClick={()=>{setCount(2)}}>
        <div className="flow-inner-div" style={{background:count === 2 && "white",boxShadow:count === 2 && "1px 1px 2.5vw 0.25vw rgba(255,255,255,1)"  }}>
            <p style={{color:count === 2 && "black",fontWeight: count === 2 && "400" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <img src={BrightKey} alt="" style={{opacity:count ===2 && 1}}/>
            <img className="dull-key" src={DullKey} alt="" />
          </div>
        </div>
        <div className="ld3 ldc" onClick={()=>{setCount(3)}}>
        <div className="flow-inner-div" style={{background:count === 3 && "white",boxShadow:count === 3 && "1px 1px 2.5vw 0.25vw rgba(255,255,255,1)"}}>
            <p style={{color:count === 3 && "black",fontWeight: count === 3 && "400" }}>Lorem ipsum dolor, sit amet. Eget adipisicing elit.</p>
            <img src={BrightKey} alt="" style={{opacity:count ===3 && 1}}/>
            <img className="dull-key" src={DullKey} alt="" />
          </div>
        </div>
        <div className="ld4 ldc" onClick={()=>{setCount(4)}}>
        <div className="flow-inner-div" style={{background:count === 4 && "white",boxShadow:count === 4 && "1px 1px 2.5vw 0.25vw rgba(255,255,255,1)"  }}>
            <p style={{color:count === 4 && "black",fontWeight: count === 4 && "400" }}>Lorem ipsum dolor, sit amet. Adipisicing elit.</p>
            <img src={BrightKey} alt="" style={{opacity:count ===4 && 1}}/>
            <img className="dull-key" src={DullKey} alt="" />
          </div>
        </div>
        <div className="ld5 ldc" onClick={()=>{setCount(5)}}>
        <div className="flow-inner-div" style={{background:count === 5 && "white",boxShadow:count === 5 && "1px 1px 2.5vw 0.25vw rgba(255,255,255,1)"  }}>
            <p style={{color:count === 5 && "black",fontWeight: count === 5 && "400" }}>Lorem ipsum dolor, sit amet. Eget adipisicing elit.</p>
            <img src={BrightKey} alt="" style={{opacity:count ===5 && 1}} />
            <img className="dull-key" src={DullKey} alt="" />
          </div>
        </div>
        <div className="rd1 rdc" onClick={()=>{setCount(6)}}>
          <div className="flow-inner-div" style={{background:count === 6 && "white",boxShadow:count === 6 && "1px 1px 2.5vw 0.25vw rgba(255,255,255,1)"  }}>
            <p style={{color:count === 6 && "black",fontWeight: count === 6 && "400" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <img src={BrightKey} alt="" style={{opacity:count ===6 && 1}}/>
            <img className="dull-key" src={DullKey} alt="" />
          </div>
        </div>
        <div className="rd2 rdc" onClick={()=>{setCount(7)}}>
        <div className="flow-inner-div" style={{background:count === 7 && "white",boxShadow:count === 7 && "1px 1px 2.5vw 0.25vw rgba(255,255,255,1)"  }}>
            <p style={{color:count === 7 && "black",fontWeight: count === 7 && "400" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <img src={BrightKey} alt="" style={{opacity:count === 7 && 1}}/>
            <img className="dull-key" src={DullKey} alt="" />
          </div>
        </div>
        <div className="rd3 rdc" onClick={()=>{setCount(8)}}>
        <div className="flow-inner-div" style={{background:count === 8 && "white",boxShadow:count === 8 && "1px 1px 2.5vw 0.25vw rgba(255,255,255,1)"  }}>
            <p style={{color:count === 8 && "black",fontWeight: count === 8 && "400" }}>Lorem ipsum dolor, sit amet. Eget adipisicing elit.</p>
            <img src={BrightKey} alt="" style={{opacity:count === 8 && 1}}/>
            <img className="dull-key" src={DullKey} alt="" />
          </div>
        </div>
        <div className="rd4 rdc" onClick={()=>{setCount(9)}}>
        <div className="flow-inner-div" style={{background:count === 9 && "white",boxShadow:count === 9 && "1px 1px 2.5vw 0.25vw rgba(255,255,255,1)"  }}>
            <p style={{color:count === 9 && "black",fontWeight: count === 9 && "400" }}>Lorem ipsum dolor, sit amet. Adipisicing elit.</p>
            <img src={BrightKey} alt="" style={{opacity:count === 9 && 1}}/>
            <img className="dull-key" src={DullKey} alt="" />
          </div>
        </div>
        <div className="rd5 rdc" onClick={()=>{setCount(10)}}>
        <div className="flow-inner-div" style={{background:count === 10 && "white",boxShadow:count === 10 && "1px 1px 2.5vw 0.25vw rgba(255,255,255,1)"  }}>
            <p style={{color:count === 10 && "black",fontWeight: count === 10 && "400" }}>Lorem ipsum dolor, sit amet. Eget adipisicing elit.</p>
            <img src={BrightKey} alt="" style={{opacity:count === 10 && 1}}/>
            <img className="dull-key" src={DullKey} alt="" />
          </div>
        </div>
        {arr.map((val)=>{
          return(<img className="flow-mobile" src={FlowMobile} alt="" style={{ transform: (count  === val) && "translate(-50%,0%) scale(1)"}}/>)
        })}
      </div>
    </div>
  )
}

export default Flow