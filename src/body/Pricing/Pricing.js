import React from 'react';
import Title from "../../shared/Title";
import PriceCard from "./PriceCard";
import Content from "./Content";

export default function Pricing(props){
    return (
        <div class="grid grid-cols-1  border-gray-300 border-2 gap-4">
            <div >
                <Title 
                    index={props.index} 
                    value="Pricing" 
                    theme="dark"
                    />
            </div>
            <div>
               <Content />
            </div>
            <div>
                <PriceCard />
            </div>
        </div>

    ); 
}