import React from "react";
import "./About.css";

import RightSide from "./RightSide";
import LeftSide from "./LeftSide";
function About(){
    return (
        <div>
            <div class="container ">
                <div class="grid grid-cols-2 gap-3 ">
                    <LeftSide />
                    <RightSide />
                </div>
            </div>
        </div>
    ); 
}

export default About;