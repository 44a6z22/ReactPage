import React from "react";

import "./HowItWorks.css";
import Title from "../../shared/Title";
import MiniCard from "./MiniCard";
import Step from "./Step";

function HowItWorks(props){
    return (
        <div id="How">
            <div class="container">
                <div class="grid grid-cols-3 gap-4 py-8">
                    <div>
                        <Title index={props.index} value="How it works" theme="dark"/>
                        <h1
                            class="text-CustomColor-2 pr-16 pt-4 leading-normal"
                        >Simple and handy rental process.
                        </h1>
                    </div>

                    <MiniCard additionalInfo="" link="#" value="check the available accessories" />
                    <MiniCard additionalInfo="" link="#" value="Read our FAQ" />
                </div>

                <div class="grid grid-cols-4 gap-8 text-center ">
                    <Step title="Text us" text="text when you want your car. No app needed, just an online account, real human opperator."/>
                    <Step title="Text us" text="text when you want your car. No app needed, just an online account, real human opperator."/>
                    <Step title="Text us" text="text when you want your car. No app needed, just an online account, real human opperator."/>
                    <Step title="Text us" text="text when you want your car. No app needed, just an online account, real human opperator."/>
                </div>
            </div>
        </div>
    );
}

export default HowItWorks;