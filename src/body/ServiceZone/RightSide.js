import React from 'react';

import Title from '../../shared/Title';
import DeliveryInformation from './DeliveryInformation';
import ForwardButton from "../../shared/ForwardButton";

function RightSide(props) {
    return (
        <div class="bg-card-purple big-card-2 text-white mx-64 my-16 pl-48 pt-32  pr-32 pb-16">
          
            <Title index={props.index} value="Service Zone" />
                <h1
                    class="py-4"                
                    >
                        We've got SF Covered
                </h1>

                <h7
                class="py-4 text-CustomColor-1"
                    >
                        We provide Two delivery options for any trip.         
                </h7>

                <div class="border-b border-gray-100 pb-8">
                    <DeliveryInformation
                        title="random title (8am - 8pm daily)"
                        value="We provide Two delivery options for any trip. We provide Two delivery options for any trip. We provide Two delivery options for any trip. "
                    />
                    <DeliveryInformation
                        title="Self service. "
                        value="We provide Two delivery options for any trip. We provide Two delivery options for any trip. We provide Two delivery options for any trip. "
                    />

                </div>
               <div class="pt-4">
                <ForwardButton
                    theme="light"
                    additionalInfo="Outside of SF?"
                    link="#"
                    value="Tell us where to expand "
                    btnStyle="rounded-full h-12 w-12 flex items-center justify-center bg-CustomColor-1  mx-4 text-gray-500"
                />
               </div>
        </div>
    );
}


export default RightSide;