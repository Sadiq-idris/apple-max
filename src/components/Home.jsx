import React from "react";
import Hero from "./Hero";
import Section1 from "./Section1";
import Section2 from "./Section2";

const Home = () => {

    return ( 
        <section id="home">
            <Hero/>
            <Section1/>
            <Section2/>
        </section>
     );
}
 
export default Home;