import React from "react";

function Title(props){
    return props.theme == "dark" ? (
        <div id="title" class="flex text-black">
            <span>0{props.id}</span>
            <div id="space" class="mx-3">
            </div>
            <span>{props.value}</span>
        </div>
    ) : (
        <div id="title" class="flex text-white">
            <span>0{props.id}</span>
            <div id="space" class="mx-3">
            </div>
            <span>{props.value}</span>
        </div>
    );
}

export default Title;