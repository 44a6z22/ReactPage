import React from 'react'; 

function RightSide(){
    return (
    
    <div id="right-side" class="py-24">
            <div id="title" class="flex">
                <span>01</span>
                <div id="space" class="mx-3">
                </div>
                <span>About Us</span>
            </div>

            <div class="py-4" >
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

            <div class="flex py-4">
                <button
                    class="rounded-full h-16 w-16 flex items-center justify-center bg-CustomColor-1 mx-4 text-gray-500"
                >
                    <i class="fa fa-times fa-lg" ></i>
                </button>

                <div class="py-1">
                    <p>Interested in our values? </p>
                    <a
                        class="text-gray-700 hover:text-gray-700"
                        href="#"
                    >
                        Learn more about our company
                    <i class="fa fa-arrow-right"></i>
                    </a>
                </div>
            </div>
    </div>
        

    ); 
}


export default RightSide; 