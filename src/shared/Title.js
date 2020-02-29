import React from "react";

function Title(props){
    
    return props.theme === "dark" ? (
        <div id="title" class="flex font-mono text-black">
            <span>0{props.index}</span>
            
            <div id="space" class="mx-3">
            </div>
            <span>{props.value}</span>
        </div>
    ) : (
            <div id="title" class="flex font-mono text-white">
            <span>0{props.index}</span>
                <div id="space" class="mx-3 bg-white">
            </div>
            <span>{props.value}</span>
        </div>
    );
}

export default Title;