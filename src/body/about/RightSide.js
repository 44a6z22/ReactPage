import React from 'react'; 
import Title from '../../shared/Title';
import ForwardButton from '../../shared/ForwardButton';

function RightSide(props){
    return (
    
    <div id="right-side" class="py-24">
            <Title value="About Us" index={props.index} theme="dark"/>

            <div class="py-4 text-CustomColor-1" >
                <h2>Let's make cities better</h2>
                <p class="py-4">
                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
                    Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla
                    ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.
            </p>
                <p class="py-3">
                    Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique,
            </p>
            </div>

            <hr />

            <ForwardButton 
                additionalInfo="Interested in our values?" 
                link="#How" 
                value="Learn more about our company" 
                btnStyle="rounded-full h-16 w-16 flex items-center justify-center bg-CustomColor-1 mx-4 text-gray-500"
                />
    </div>
        

    ); 
}


export default RightSide; 