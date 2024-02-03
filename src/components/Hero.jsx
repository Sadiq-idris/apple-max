import React from "react"
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
import hero from "../Assets/images/hero.png"

const Hero = ()=>{

    return(
        <section id="hero" className="w-[90%] mx-auto">
        <div className="md:my-20 my-10 w-full h-full">
            <div className="md:flex items-center justify-between">
                <div className="md:w-[35%] w-full" >
                    <img src={hero} alt="portrait" className="w-full h-[400px]" style={{boxShadow:"-10px 10px 0px black",objectFit:"cover",objectPosition:'top'}} />
                </div>
                <div className="text-left md:w-[60%]">
                    <span className="text-lg text-white bg-black p-2">I am a</span>
                    <TypeAnimation 
                        sequence={[
                            "Developer",
                            2000,
                            "Graphic designer",
                            2000,
                            "UI/UX designer",
                            2000,
                            "Blogger",
                            2000,
                        ]}
                        speed={50}
                        wrapper="h1"
                        repeat={Infinity}
                        className="md:text-5xl text-4xl font-bold bg-white p-2"

                    />
                    <p className="my-5 text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus deleniti maxime 
                        officiis beatae cum quaerat ut natus nulla, ipsum quibusdam sequi
                         cupiditate asperiores perferendis fugiat quas, pariatur assumenda a ad.
                    </p>
                    <div>
                        <motion.button whileHover={{scale:1.1}} className="bg-black text-white px-[10px] py-[6px] hover:bg-white  border-2 border-black hover:border-black hover:text-black transition-all duration-300">
                            SIGN UP NOW
                        </motion.button>
                        <motion.button whileHover={{scale:1.1}} className="bg-white ml-2 text-black px-[10px] py-[6px] hover:bg-black  border-2 border-black  hover:text-white transition-all duration-300">
                            LEARN MORE
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Hero