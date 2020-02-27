import React from "react";

function SubscribeForm(props){

    return (
        <div class="container grid grid-cols-2 py-24">
            <div>
                <div>
                    <h1 class="text-purple-900 text-6xl py-4">
                        Just drive. 
                        <br/>
                        We'll do the rest.
                    </h1>
                    <p class="text-purple-900 py-4" >
                        All-inclusive, usage-based car subscriptions.
                    </p>
                </div>
                <form class="py-3">
                    <input 
                        class="bg-gray-200 appearance-none border-2 rounded border-gray-200 py-3 px-4 text-gray-700 leading-tight"
                        type="text" 
                        placeholder="Phone Number ..." 
                        />
                    <input 
                        class="inline-block border border-gray-500  py-3 px-8 my-2 mx-4 bg-gray-500 hover:bg-gray-700 hover:text-white text-black rounded-full"
                        type="submit" 
                        value="get Started" 
                        />
                </form>
            </div>
            <div class="px-5" >
                <img src={props.img} alt="Some Image"/>
            </div>
        </div>
    );
}

export default SubscribeForm; 