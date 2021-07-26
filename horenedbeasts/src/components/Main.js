import React from 'react';

import HornedBeast from "./HornedBeasts"

class Main extends React.Component {

    render (){
        return (
            <main>
                <HornedBeast 
                    title = "Markhor"
                    description ="The markhor, according to ARKive, lives in the mountains of central Asia, adeptly climbing craggy rocks with the grace of North America’s own mountain goat. It’s extremely endangered, with an estimated 2,500 left in the wild in part due to hunting for its absurdly spectacular corkscrewed horns, which can grow to more than five feet long."
                    img = "https://modernfarmer.com/wp-content/uploads/2014/08/saiga.jpg"
                
                />

                <HornedBeast
                    title = "Saiga"
                    description = "Native to the dusty steppes of Kazakhstan, Russia, and sometimes Uzbekistan during migrations, the saiga is a truly absurd-looking and delightful antelope. Its fleshy, shotgun-like nose is used to filter out dust in its habitat and also, we think, to warm cold winter air before it makes its way to the animal’s lungs. Its spiralled horns are a light, dusky pink, with the luster of jade. It’s also incredibly endangered; read this for more about the plight of the noble, floppy-nosed saiga."
                    img = "https://modernfarmer.com/wp-content/uploads/2014/08/nubianibex.jpg"
                
                />
                <HornedBeast
                    title = "Nubian Ibex"
                    description = "The Nubian ibex’s gigantic, backward-curling horns are even more impressive when you consider that the ibex uses them to smash into male competitors while on top of scary mountains in North Africa and Arabia. There are a few different types of ibex and nobody’s quite sure whether they’re the same species or not, so please, alpine ibex fans, don’t be upset that the Nubian variety is up here instead."
                    img = "https://modernfarmer.com/wp-content/uploads/2014/08/bharal.jpg"

                />

            </main>
        )
    }
}

export default Main;