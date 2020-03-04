import React from "react";

function Title(props){
    
    let textColor = " text-black ",
        bgColor = " bg-black ",
        base = "flex font-mono ";

    if (props.theme !== "dark") {
        textColor = " text-white ";
        bgColor = " bg-white ";
    }
    
    return (
        <div id="title" class={ base + textColor}>
            <span>0{props.index}</span>
            
            <div id="space" class={"mx-3" + bgColor}>
            </div>
            <span>{props.value}</span>
        </div>
    ) ;
}

export default Title;