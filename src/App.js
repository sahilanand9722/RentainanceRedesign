import React,{ useState, useRef, useEffect } from "react";
import Ask from './pages/Ask/Ask'
import GTM from './pages/GTM/GTM';
import "./App.scss";
import ThankYou from './pages/ThankYou/ThankYou';
import CompetitiveAdvantage from './pages/CompetitiveAdvantage/CompetitiveAdvantage';
import BusinessModel from './pages/BusinessModel/BusinessModel';
import Flow from './pages/Flow/Flow';
import Usp from './pages/Usp/Usp';
import Problem from './pages/Problem/Problem';
import Solution from './pages/Solution/Solution';
import Competition from './pages/Competition/Competition';
import Marketing from './pages/Marketing/Marketing';
import RoadMap from './pages/RoadMap/RoadMap';
import Scope from './pages/Scope/Scope';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ClickToContinueComp from "./components/Click-To-Continue-Comp/click-to-continue-comp";
import PhoneRotationComp from "./components/Phone-Rotation-Comp/phone-rotation-comp";
import Home from "./pages/Home/Home";
import { navigatingBarData } from "./pages/NavigatingBars/NavigatingData";
// import Navigating from "./pages/NavigatingBars/Navigating";
// import useWidthHook from "./useWidth/useWidthHook";

const App = () => {
  let [navID, setNavID] = useState(0);
  const [navbarVisibility, setNavbarVisibility] = useState(false);
  const [navToggle, setNavToggle] = useState(false);
  // const [useCase, setUseCase] = useState(false);
// const width=useWidthHook()
// console.log(width,"DSKJFBSDKJFB")


  function handleNavbarVisibilityTrue() {
     setNavbarVisibility(true);
  }
  function handleNavbarVisibilityFalse() {
    setNavbarVisibility(false);
  }

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null); 

  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);

  const ref9 = useRef(null);
  const ref10 = useRef(null);
  const ref11 = useRef(null);
  const ref12 = useRef(null);

  const ref13 = useRef(null);
  const ref14 = useRef(null);

  const handleTryClick = (id) => {
    // id === -1 && ref12.current.scrollIntoView({ behavior: 'instant' });
    id === 0 && ref1.current.scrollIntoView({ behavior: "instant" });
    id === 1 && ref2.current.scrollIntoView({ behavior: "instant" });
    id === 2 && ref3.current.scrollIntoView({ behavior: "instant" });
    id === 3 && ref4.current.scrollIntoView({ behavior: "instant" });
    id === 4 && ref5.current.scrollIntoView({ behavior: "instant" });
    id === 5 && ref6.current.scrollIntoView({ behavior: "instant" });
    id === 6 && ref7.current.scrollIntoView({ behavior: "instant" });
    id === 7 && ref8.current.scrollIntoView({ behavior: "instant" });
    id === 8 && ref9.current.scrollIntoView({ behavior: "instant" });
    id === 9 && ref10.current.scrollIntoView({ behavior: "instant" });
    id === 10 && ref11.current.scrollIntoView({ behavior: "instant" });
    id === 11 && ref12.current.scrollIntoView({ behavior: "instant" });
    id === 12 && ref13.current.scrollIntoView({ behavior: "instant" });
    id === 13 && ref14.current.scrollIntoView({ behavior: "instant" });
    id === 14 && ref1.current.scrollIntoView({ behavior: "instant" });

    setNavID(id);
  };

  const handleClick = (id) => {
    id === -1 && ref14.current.scrollIntoView({ behavior: "instant" });
    id === 0 && ref1.current.scrollIntoView({ behavior: "smooth" });
    id === 1 && ref2.current.scrollIntoView({ behavior: "smooth" });
    id === 2 && ref3.current.scrollIntoView({ behavior: "smooth" });
    id === 3 && ref4.current.scrollIntoView({ behavior: "smooth" });
    id === 4 && ref5.current.scrollIntoView({ behavior: "smooth" });
    id === 5 && ref6.current.scrollIntoView({ behavior: "smooth" });
    id === 6 && ref7.current.scrollIntoView({ behavior: "smooth" });
    id === 7 && ref8.current.scrollIntoView({ behavior: "smooth" });
    id === 8 && ref9.current.scrollIntoView({ behavior: "smooth" });
    id === 9 && ref10.current.scrollIntoView({ behavior: "smooth" });
    id === 10 && ref11.current.scrollIntoView({ behavior: "smooth" });
    id === 11 && ref12.current.scrollIntoView({ behavior: "smooth" });
    id === 12 && ref13.current.scrollIntoView({ behavior: "smooth" });
    id === 13 && ref14.current.scrollIntoView({ behavior: "smooth" });
    id === 14 && ref1.current.scrollIntoView({ behavior: "instant" });
  
    setNavID(id);
  };
  function handleRightClick() {
    //  console.log(navID,"SDIKFJHDIOJUHB");
    if (navID === navigatingBarData.length - 1) {
      setNavID((navID = navID + 1));

      setTimeout(() => {
        setNavID(0);
      }, 100);
    } else {
     
      setNavID((navID = navID + 1));
    }
    handleClick(navID);
  }

  function handleLeftClick() {
    if (navID === 0) {
      setNavID((navID = navID - 1));

      setTimeout(() => {
        setNavID((navID = navigatingBarData.length - 1));
      }, 100);
    } else {
      // if (navID === 2) setUseCase(false);

      setNavID((navID = navID - 1));
    }
    handleClick(navID);
  }

  const [OnLoadEvent, setOnLoadEvent] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setOnLoadEvent(false);
    }, 1000);
  }, []);

  function handleOnLoadEvent() {
    setOnLoadEvent(true);
  }

  let mediaQuery = window.matchMedia(`(max-width: 630px)`);
  const [query, setQuery] = useState(mediaQuery.matches);

  useEffect(() => {
    window.onresize = () => {
      setQuery(mediaQuery.matches);
    };
  }, [mediaQuery]);


  return (
    <>
      <div className="app-main">
       
      
        <div
          className="click-to-continue-comp-div"
          onClick={handleOnLoadEvent}
          style={{
            visibility: OnLoadEvent && "hidden",
          }}
        >
          <ClickToContinueComp OnLoadEvent={OnLoadEvent} />
        </div>
        <div
          className="phone-rotation-indication-div"
          style={{
            display: !query && "none",
          }}
        >
          <PhoneRotationComp />
        </div>

        <div
          className="nav"
          style={{
            transform: navToggle && "translate(0%)"
          }}
          // onMouseEnter={handleNavbarVisibilityTrue}
        >
          {/* <Navigating
              navToggle={navToggle}
              setNavToggle={setNavToggle}
            HandleTryClick={handleTryClick}
            setNavID={setNavID}
            navID={navID}
          /> */}
        </div>

        <div className="app-left-btn-nav" onClick={handleLeftClick}>
          <ArrowBackIosIcon
            className="arrow-icon"
            style={{
              color: "#ffffff",
            }}
          />
          <p>BACK</p>
        </div>
        <div className="app-right-btn-nav" onClick={handleRightClick}>
          <p>NEXT</p>
          <ArrowForwardIosIcon
            className="arrow-icon"
            style={{
              color: "#ffffff",
            }}
          />
        </div>

        <div style={{ minWidth: "100%" }} ref={ref1}>
          <Home setNavToggle={setNavToggle} />
        </div>
        <div style={{ minWidth: "100%" }} ref={ref2}>
          <Problem  setNavToggle={setNavToggle}/>
        </div>
        <div style={{ minWidth: "100%" }} ref={ref3}>
          <Solution setNavToggle={setNavToggle} navID={navID}/>
        </div>
        <div style={{ minWidth: "100%" }} ref={ref4}>
          <Usp navID={navID} setNavToggle={setNavToggle} />
        </div>
        <div style={{ minWidth: "100%" }} ref={ref5}>
          <Flow setNavToggle={setNavToggle} />
        </div>
        <div style={{ minWidth: "100%" }} ref={ref6}>
          <Scope navID={navID} setNavToggle={setNavToggle} />
        </div>
        <div style={{ minWidth: "100%" }} ref={ref7}>
          <GTM navID={navID} setNavToggle={setNavToggle} />
        </div>
        <div style={{ minWidth: "100%" }} ref={ref8}>
        <Marketing setNavToggle={setNavToggle} />
          
        </div>
        <div style={{ minWidth: "100%" }} ref={ref9}>
        <Competition navID={navID} setNavToggle={setNavToggle} />
        </div>
        <div style={{ minWidth: "100%" }} ref={ref10}>
        <CompetitiveAdvantage setNavToggle={setNavToggle} />
        </div>
        <div style={{ minWidth: "100%" }} ref={ref11}>
        <BusinessModel navID={navID} setNavToggle={setNavToggle} />
        </div>
        <div style={{ minWidth: "100%" }} ref={ref12}>
        <RoadMap navID={navID} setNavToggle={setNavToggle} />
        </div>
        <div style={{ minWidth: "100%" }} ref={ref13}>
          <Ask navID={navID} setNavToggle={setNavToggle}/>
        </div>
        <div style={{ minWidth: "100%" }} ref={ref14}>
        <ThankYou setNavToggle={setNavToggle} />
        </div>
        
      </div>
    </>
  );
}

export default App;

 

 
