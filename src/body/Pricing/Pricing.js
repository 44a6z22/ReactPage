import React from 'react';
import Title from "../../shared/Title";
import PriceCard from "./PriceCard";
import Content from "./Content";

export default function Pricing(props){
    return (
        <div class="">
            <div class="text-center w-full">
                <Title
                    index={props.index}
                    value="Pricing"
                    theme="dark"
                />
            </div>
        </div>

    ); 
}