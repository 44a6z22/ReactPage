import React from 'react'; 
import ForwardButton from '../../shared/ForwardButton';

function LeftSide(props){

    return (
        <div id="left-section" class="mt-8 ml-0 ">
            <div id="first-card" class="great-backgroud-card bg-gray-200 my-10">
                <img src={props.img} alt="logo" class="py-8"/>
            </div>
            
            <div id="second-card" class="border-b border-gray-400 bg-card-purple ml-8 p-2 flex flex-col justify-between ">
                <div class="mb-8 pl-4 pt-4">
                    <p class="text-gray-700 text-white border-l pl-4">"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."</p>
                </div>
                <div class="flex items-center justify-between text-white">
                    <div class="flex items-center">
                        <ForwardButton
                            additionalInfo=""
                            link=""
                            value=""
                            btnStyle="rounded-full h-12 w-12 flex items-center justify-center bg-CustomColor-1  mx-4 text-gray-500"
                        />
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
                            {props.rate} reviews at Yelp
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default LeftSide;