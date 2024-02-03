import React from "react"
import Card from "./Card"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
// images
import image1 from "../Assets/images/image1.jpg"
import image2 from "../Assets/images/image2.jpg"
import image3 from "../Assets/images/image3.jpg"
import image4 from "../Assets/images/image4.jpg"
import image5 from "../Assets/images/image5.jpg"
import image6 from "../Assets/images/image6.jpg"
import image7 from "../Assets/images/image7.jpg"

const Section2 = ()=>{

    const [emblaRef] = useEmblaCarousel({loop:true},[Autoplay()])

    return (
    <section id="section1"  className='  border-t-2  border-black'>
        <div className='w-[90%] mx-auto '>
            <div className='md:h-[100vh] py-20 md:py-0 flex items-center h-full '>
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-3">
                        <Card src={image1}/>
                        <Card src={image2}/>
                        <Card src={image3}/>
                        <Card src={image4}/>
                        <Card src={image5}/>
                        <Card src={image6}/>
                        <Card src={image7}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}


export default Section2