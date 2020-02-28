import React from "react"; 

function ForwardButton(props){

    if(props.additionalInfo == ""){
        return (
            <div class="flex py-4 flex items-center">
                <button
                    class="rounded-full h-12 w-12 flex items-center justify-center bg-CustomColor-1 mx-4 text-gray-500"
                >
                    <i class="fa fa-times fa-lg" ></i>
                </button>

                <div class="py-1">
                    <a
                        class="text-gray-700 hover:text-gray-700"
                        href={props.link}
                    >
                        {props.value}
                    <i class="fa fa-arrow-right ml-2 hover:no-underline"></i>
                    </a>
                </div>
            </div>
        );
    }
    return (
        <div class="flex py-4 flex items-center">
            <button
                class="rounded-full h-16 w-16 flex items-center justify-center bg-CustomColor-1 mx-4 text-gray-500"
            >
                <i class="fa fa-times fa-lg" ></i>
            </button>

            <div class="py-1">
                <p>{props.additionalInfo} </p>
                <a
                    class="text-gray-700 hover:text-gray-700"
                    href={props.link}
                >
                    {props.value}
                    <i class="fa fa-arrow-right ml-2 hover:no-underline"></i>
                </a>
            </div>
        </div>
    );
}

export default ForwardButton;