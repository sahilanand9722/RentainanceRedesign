import React,{useState,useEffect} from 'react';
import "./solution.scss"
import BCSol from "../../Img/BCSol.png";
import BCSolR from "../../Img/BCSolR.png";
import SCSol from "../../Img/SCSol.png";
import SCSolR from "../../Img/SCSolR.png";
import CursorSol from "../../Img/cursorSol.png";
import LappySol from "../../Img/LappySol.png";
import RlogoSol from "../../Img/RlogoSol.png";
// import solDiv from "../../Img/solDiv.png";
// import solUserIcon from "../../Img/solUserIcon.png";


const Solution = ({navID}) => {

  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [flag3, setFlag3] = useState(false);
  const [flag4, setFlag4] = useState(false);
  const [flag5, setFlag5] = useState(false);
  const [flag6, setFlag6] = useState(false);

  useEffect(() => {

    const x= setTimeout(()=>{setFlag1(true)},1000);
    const y= setTimeout(()=>{setFlag2(true)},3000);
    const z= setTimeout(()=>{setFlag3(true)},3500);
    const l= setTimeout(()=>{setFlag4(true)},4000);
    const m= setTimeout(()=>{setFlag5(true)},4500);
    const n= setTimeout(()=>{setFlag6(true)},5000);

    if(navID !==2){
      setFlag1(false);
      setFlag2(false);
      setFlag3(false);
      setFlag4(false);
      setFlag5(false);
      setFlag6(false);
    }
    return () => {
      clearTimeout(x);
      clearTimeout(y);
      clearTimeout(z);
      clearTimeout(l);
      clearTimeout(m);
      clearTimeout(n);
    }
  })
  
  return (
    <div className='solution-main-comp'>
      <img className="lappy-sol" src={LappySol} alt="" style={{transform:flag4 && "scale(0.3)"}} />
      <div className="lap-screen" style={{transform:flag4 && "scale(0.3)"}}>
      <div className="solW" style={{transform:flag3 && "scale(65)"}}>
        <h1>SOLUTION</h1>
      </div>
      <div className="solR" 
      // style={{height:flag1 ? "30%" :"0%"}}
      style={{width:flag1 ? "100%" :"0%",transform:flag3 && "scale(65)"}}
      >
        <h1>SOLUTION</h1>
      </div>
      <img className='cursor-sol' src={CursorSol} alt="" style={{translate:flag2 && "-40% 55%",transform:flag3 && "translate(10%,-35%) scale(0.1)",opacity:flag3 && 0}}/>
      <img className="r-logo-sol" src={RlogoSol} alt="" style={{transform:flag3 && !flag4 ? "scale(1)" : flag4 && "translateY(20%) scale(1)"}} />
      </div>
      <img className="bc-sol" src={BCSol} alt="" style={{transform:flag5 && "rotate(90deg)", opacity:flag5 && 0}} />
      <img className="bc-solR" src={BCSolR} alt="" style={{transform:flag5 && "rotate(90deg)", opacity:flag5 && 1}} />
      <img className="sc-sol" src={SCSol} alt="" style={{transform:flag5 && "rotate(-90deg)", opacity:flag5 && 0}}/>
      <img className="sc-solR" src={SCSolR} alt="" style={{transform:flag5 && "rotate(-90deg)", opacity:flag5 && 1}}/>
    </div>
  )
}

export default Solution