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

            <ForwardButton additionalInfo={props.additionalInfo} link={props.link} value={props.value} />
        </div>
    );
}

export default MiniCard;