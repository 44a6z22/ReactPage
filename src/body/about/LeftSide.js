import React from 'react'; 

function LeftSide(){

    return (
        <div id="left-section">
            <div class="h-64 w-48 bg-black py-24">
            </div>
            
            
            <div id="second-card" class="border-b border-gray-400 bg-card-purple m-4 p-2 flex flex-col justify-between ">
                <div class="mb-8 pl-4 pt-4">
                    <p class="text-gray-700 text-white border-l pl-4">"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."</p>
                </div>
                <div class="flex items-center justify-between text-white">
                    <div class="flex items-center">
                        <button
                            class="rounded-full h-10 w-10 flex items-center justify-center bg-CustomColor-1 ml-8 mr-3 ml-12 text-gray-500"
                        >
                            <i class="fa fa-times fa-lg" ></i>
                        </button>
                        <h7 class="text-CustomColor-1 " >SAM R.</h7>
                    </div>
                    <div class="py-3">
                        <div id="stars" class="float-right mr-12">
                            <i class="fa fa-star px-1"></i>
                            <i class="fa fa-star px-1"></i>
                            <i class="fa fa-star px-1"></i>
                            <i class="fa fa-star px-1"></i>
                            <i class="fa fa-star px-1"></i>
                        </div>
                        <p class="text-sm  text-CustomColor-1">
                            28 reviews at Yelp
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default LeftSide;