import React  from "react";
import "./Header.css";

import Navbar from "../shared/navebar/Navbar";
import SubscribeForm from "./midHeader/SubscribeForm";
import Sponsors from "./Sponsors/sponsors";

function Header(){
    return (
        // structure of this component .
        // navbar; 
        // Caption.
        // headerFooter.
            <header class="bg-gray-200">
                <div class="container mx-auto">
                    <Navbar />
                    <SubscribeForm img="C:\Users\Youcode\Desktop\personal-website\public\X.png" />
                </div>
                <Sponsors />
            </header>
      
        );
}

export default Header; 