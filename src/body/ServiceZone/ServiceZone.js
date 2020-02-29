import React from 'react'; 
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import "./ServiceZone.css";

function ServiceZone(props){
    return (
        <div class="py-24" >
            <RightSide index={props.index} />
            <LeftSide img={props.img} />
        </div>
    );
}

export default ServiceZone;