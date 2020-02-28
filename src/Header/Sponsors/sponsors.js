import React from "react";
import "./Sponsors.css"
function Sponsors(){

    return (
        <div class="flex items-stretch pt-0">
            <p class="flex-1 bg-white py-8 m-0 text-center">
                <i class="fa fa-lg text-6xl fa-github"></i>
            </p>
            <p class="flex-1 bg-white py-8 m-0 text-center">

                <i class="fa fa-lg text-6xl fa-facebook"></i>
            </p>
            <p class="flex-1 bg-white py-8 m-0 text-center">

                <i class="fa fa-lg text-6xl fa-instagram"></i>
            </p>
            <p class="flex-1 bg-white py-8 m-0 text-center">

                <i class="fa fa-lg text-6xl fa-twitter"></i>
            </p>
            <p class="flex-1 bg-white py-8 m-0 text-center">

                <i class="fa fa-lg text-6xl fa-linkedin"></i>
            </p>

            <p class="flex-1 bg-gray-200 py-8 text-center">
                <a
                    href="#About"
                    class="hover:no-underline hover:text-black text-black"
                    >
                    <i class="fa fa-arrow-down lg" ></i>
                </a>
            </p>
        </div>
    );

}

export default Sponsors;