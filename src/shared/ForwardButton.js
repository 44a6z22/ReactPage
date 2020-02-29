import React from "react"; 

function ForwardButton(props){

   

    return (props.additionalInfo !== "") ? (
        <div class="flex py-4 flex items-center ">
            <button
                class={props.btnStyle}
            >
                <i class="fa fa-times fa-lg" ></i>
            </button>

            <div class="py-1 ">
                <p class="text-CustomColor-1" >{props.additionalInfo} </p>
                <a
                    class="text-CustomColor-1 hover:text-gray-700 hover:no-underline"
                    
                    href={props.link}
                >
                    {props.value}
                    <i class="fa fa-arrow-right ml-2 hover:no-underline"></i>
                </a>
            </div>
        </div>
    ) : (
            <div class="flex py-4 flex items-center">
                <button
                    class={props.btnStyle}
                >
                    <i class="fa fa-times fa-lg" ></i>
                </button>
                
            {
                    props.value !== "" && 
                    <div class="py-1">
                        <a
                            class="text-gray-700 hover:text-gray-700 hover:no-underline"
                            href={props.link}
                        >
                            {props.value}
                            <i class="fa fa-arrow-right ml-2 hover:no-underline"></i>
                        </a>
                    </div>
            }   
            </div>
           
            ) 
        ; 
}

export default ForwardButton;