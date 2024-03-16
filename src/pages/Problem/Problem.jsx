import React,{useState} from 'react';
import "./problem.scss"
import ProbDiv from '../../components/ProbDivComp/ProbDiv';
import cross  from "../../Img/crossP.png";
import plus  from "../../Img/plusP.png";
import Landlord  from "../../Img/LandlordP.png";
import Broker from "../../Img/brokerP.png";
import Tenant  from "../../Img/TenantP.png";
import RLogo from "../../Img/Rlogo.png";

const Problem = () => {

  const [plusClk,setPlusClk]=useState(false);
  const [btnClk,setBtnClk]=useState(false);
  const [count,setCount]=useState(0);

  return (
    <div className='prob-main-container'>
    <div className="prob-left">
      <div className="pbleft-top">
        <div className="prob-btn-outer" style={{transform:count !==0 && "scale(0.1)",opacity:count!==0 && 0}}>
        <div className="prob-btn-inner">
          PROBLEM
        </div>
        </div>
        <h1 className='land-txt' style={{transform:count === 1 && "scale(1)",opacity:count === 1 && 1}}>LANDLORD</h1>
        <h1 className='land-txt' style={{transform:count === 2 && "scale(1)",opacity:count === 2 && 1}}>BROKER</h1>
        <h1 className='land-txt' style={{transform:count === 3 && "scale(1)",opacity:count === 3 && 1}}>TENANT</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, exercitationem, ut sed unde nesciunt sequi dignissimos tempora velit provident dolorem debitis ipsam praesentium? Ullam consequatur deserunt sed, eius tempore vero. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique nostrum ex voluptates modi voluptate dicta.</p>
   
      </div>
      <div className="pbleft-bottom"  style={{transform:plusClk && "translateY(10%)"}}>
        
       
       <div className="pbleft-outer" >
        <div className="pbleft-inner">
          <img className='landlord-prob icon-prob' src={Landlord} alt="" 
          style={{transform:plusClk && "translate(-50%,-330%)",zIndex:count === 1 && 2 }}
          onClick={()=>{setPlusClk(!plusClk);setBtnClk(true);setCount(1)}}
           />
          <img className='broker-prob icon-prob' src={Broker} alt="" style={{transform: plusClk && "translate(-280%,-250%)",zIndex:count === 2 && 2 }} 
          onClick={()=>{setPlusClk(!plusClk);setBtnClk(true);setCount(2)}} />
          <img className='tenant-prob icon-prob' src={Tenant} alt="" style={{transform: plusClk && "translate(180%,-250%)",zIndex:count === 3 && 2}} onClick={()=>{setPlusClk(!plusClk);setBtnClk(true);setCount(3)}}  />
          <img className='cross-prob icon-prob' src={cross} alt="" onClick={()=>{setPlusClk(false)}} style={{opacity:!plusClk ? 0 : 1,
            zIndex:!plusClk ? -1 : 0
            }} />
          <img className='plus-prob icon-prob' src={plus} alt="" onClick={()=>{setPlusClk(true)}} style={{opacity:plusClk ? 0 : 1,
            zIndex:plusClk ? -1 : 0
             }}/>
        </div>
       </div>
      </div>
    </div>
    <div className="prob-right">
      <ProbDiv btnClk={btnClk}/>
      <img className='rentainance-logo' src={RLogo} alt="" style={{transform:btnClk && "translate(50%,50%)"}} />
    </div>

    </div>
  )
}

export default Problem