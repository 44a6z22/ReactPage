import React from 'react';
// import logo from '../logo.svg';
// import GeneralInfo from '../GeneralInfo';
import './Layout.css';

import Logo from "../logo.svg";

// components
import Header from "../Header/Header";
import About  from "../body/about/About";
import HowItWorks from '../body/HowItWorks/HowItWorks';
import ServiceZone from '../body/ServiceZone/ServiceZone';

function Layout() {
    return (

        <div>
            <Header img={Logo} />
            <About img={Logo} />
            <HowItWorks />
            <ServiceZone />
        </div>
       
        
    );
}

export default Layout;
