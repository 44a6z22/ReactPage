import React from 'react';
// import logo from '../logo.svg';
// import GeneralInfo from '../GeneralInfo';
import './App.css';

import Logo from "../logo.svg";

// components
import Header from "../Header/Header";
import About  from "../body/about/About";
import HowItWorks from '../body/HowItWorks/HowItWorks';
import ServiceZone from '../body/ServiceZone/ServiceZone';
import Pricing from '../body/Pricing/Pricing';

export default function App() {
    let index = 0; 
    return (

        <div>
            <Header 
                img={Logo} 
                />
            <About 
                img={Logo} 
                index={++index}
                />
            <HowItWorks 
                index={++index}
                />
            <ServiceZone 
                img={Logo} 
                index={++index}
                />
            <Pricing 
                index={++index}
                />
        </div>
       
        
    );
}


