import React from "react";
import ForwardButton from "../../shared/ForwardButton";

function MiniCard(props) {

    return (
        <div class="py-16">
            <p 
                class=""
                >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! 
            </p>
            <hr />

            <ForwardButton 
                additionalInfo={props.additionalInfo} 
                link={props.link} 
                value={props.value}
                btnStyle="rounded-full h-12 w-12 flex items-center justify-center bg-CustomColor-1 mx-4 text-gray-500"  />
        </div>
    );
}

export default MiniCard;