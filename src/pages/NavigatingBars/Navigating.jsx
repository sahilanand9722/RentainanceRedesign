import React,{useState} from "react";
import "./Navigating.scss";
import { RxCross2 } from "react-icons/rx";
// import Bm from "../../Img/bm.svg";
// import Scope from "../../Img/scope.svg";
// import Home from "../../Img/home.svg";
// import Problem from "../../Img/problem.svg";
// import Solution from "../../Img/solution.svg";
// import Flow from "../../Img/flow.svg";
// import Marketing from "../../Img/marketing.svg";
// import GTM from "../../Img/gtm.svg";
// import GTMI from "../../Img/GTMIcon.png";
// import Ask from "../../Img/ask.svg";
// import CompAdv from "../../Img/comp-adv.svg";
// import Comp from "../../Img/comp.svg";
// import JoinUs from "../../Img/join-us.svg";
// import USP from "../../Img/usp.svg";
// import RoadMap from "../../Img/roadmap.svg";
// import Comp from "../../imgs/home/comp.svg"
import { navigatingBarData } from "./NavigatingData";

const Navbar = ({ navToggle,setNavToggle,HandleTryClick,setNavID,navID}) => {


  let [itemID, setItemID] = useState(0);

  function handleItemId(id) {
    setItemID(id)
  } 
 
  return (
    // <div className="nav-section">
    //   <div className="nav-close" onClick={() => setNavToggle(false)}>
    //     <span>
    //       <RxCross2 />
    //     </span>
    //   </div>
    //   <div className="nav-wrapper">
    //     {navigatingBarData.map((navItem,index) => {
    //       return (
    //         <div className="nav-item" key={navItem.id}>
    //           <div className="nav-line">
    //             <img src={navItem.icon} alt="" />
    //             {/* <img src={GTMI} alt="" /> */}
    //           </div>
    //           <div
    //             className="nav-text"
    //             // onClick={()=>{setNavID(navItem.id)}}
    //             onClick={()=>{HandleTryClick(index);setNavToggle(false)}}
    //             onMouseEnter={() => {
    //                 handleItemId(index)
    //               }}
    //               onMouseLeave={() => {
    //                 handleItemId(-1)
    //               }}
    //             style={{
    //               color: navItem.id  === navID + 1 && "#1458fa",
    //               fontSize: navItem.id === navID + 1 && "1.3vw",
    //               fontWeight: navItem.id === navID + 1 && "600",
    //             }}
    //           >
    //             {navItem.title}
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
};

export default Navbar;
