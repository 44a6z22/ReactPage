import React from 'react'; 
import LeftSide from './LeftSide';
import RightSide from './RightSide';

function ServiceZone(){
    return (
        <div class="grid grid-cols-2 gap-4" >
            <LeftSide />
            <RightSide />
        </div>
    );
}


export default ServiceZone;