import React from 'react'; 


function DeliveryInformation(props){

    return(
        <div class="flex py-3">
            <i class="fa fa-check pt-2 pr-4 text-CustomColor-1" ></i>
            <div>
                <h6 class="font-sans pt-1 ">{props.title}</h6>
                <p class="font-normal font-light text-normal text-CustomColor-1">
                    {props.value}
                </p>
            </div>
        </div>
    ); 
}

export default DeliveryInformation; 