import React from "react";
import "./About.css";

import RightSide from "./RightSide";
import LeftSide from "./LeftSide";
function About(props){
    return (
        <div id="About">
            <div class="container">
                <div class="grid grid-cols-2 gap-24 py-4">
                    <LeftSide rate="28" img={props.img} />
                    <RightSide index={props.index} />
                </div>
            </div>
        </div>
    ); 
}

export default About;