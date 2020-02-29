import React from "react"; 
import ForwardButton from "../../shared/ForwardButton";

function Step(props){
    return (
       <div class="step flex flex-col items-center ">

            <ForwardButton additionalInfo="" link="#" value="" btnStyle="rounded-full h-16 w-16 flex items-center justify-center bg-gray-100 mx-4 text-gray-500" />
           
            <div class="content  px-4 py-8">
                <h2 class="text-CustomColor-1" >{props.title}</h2>
                <p
                    class="py-4 text-base border-b  border-gray-300"
                >
                    {props.text}
                </p>
           </div>
       </div>
    ); 
}


export default Step;