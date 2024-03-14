import { useState, useEffect } from "react";
import "./click-to-continue-comp.scss";
import NavInstruction from  "../../Img/NavPage1.png"
// import NavInstruction1 from  "../../Img/NavPage.png"

export default function ClickToContinueComp(props) {

    const [upDownEffect, setUpDownEffect] = useState(false);
    const [ClickHereBtn, setClickHereBtn] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setUpDownEffect(prev => {
                return !prev
            })
        }, 800)

    }, [upDownEffect])

    useEffect(() => {
        setTimeout(() => {
            setClickHereBtn(true)
        }, 3000)
    }, [])

    return (<>

        <div className="click-to-continue-comp-main-container"
            style={{
                display: props.OnLoadEvent && "none"
            }}
        >
        
            <div className="instruction-bar-div" >
                
                <img className="instruction-img" src={NavInstruction} alt="" />

                <div className="click-to-continue-btn-div"
                    style={{
                        // visibility: !ClickHereBtn ? "hidden" : "visible",
                        animation: upDownEffect && "ClickHereToContinue-keyframe 0.2s",
                    }}
                >
                </div>

            </div>
        </div>



    </>)
}