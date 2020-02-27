import React  from "react";

function Navbar(){
    return (
        <nav>
            <ul class="flex justify-between ">
                <li class="mr-2">
                    <a class="inline-block  py-4 px-4 text-black hover:text-black cursor-pointer" href="#">UpShift</a>
                </li>
                <li class="mr-3">
                    <form class="flex justify-between">
                        <div clas="inline-block px-4">
                            <input type="radio" />
                            <label class="py-4 px-2 text-gray-700 hover:text-gray-700">Personal</label>
                        </div>
                        <div clas="inline-block px-4">
                            <input type="radio" />
                            <label class="py-4 px-2 text-gray-700 hover:text-gray-700">Personal</label>
                        </div>    
                    </form>
                </li>

                <li class="mr-4">
                    <a class="inline-block  py-4 px-4 text-gray-700 hover:text-gray-700" href="#">About</a>
                    <a class="inline-block  py-4 px-4 text-gray-700 hover:text-gray-700" href="#">Pricing</a>
                    <a class="inline-block  py-4 px-4 text-gray-700 hover:text-gray-700" href="#">FAQ</a>
                    <a class="inline-block  py-4 px-4 text-gray-700 hover:text-gray-700" href="#">Contact Us</a>
                </li>

                <li class="mr-3">
                    <a class="inline-block  py-4 px-4 text-gray-700 hover:text-gray-700 hover:no-underline" href="#">Log In</a>
                    <a class="inline-block border border-gray-500  py-2 my-2 px-4 bg-gray-500 hover:bg-gray-700 hover:text-white  hover:no-underline text-black rounded-full" href="#">Join Now</a>
                </li>
            </ul>
        </nav>

    );
}

export default Navbar;