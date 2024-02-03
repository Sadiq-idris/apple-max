import React from 'react'
import leaf from "../Assets/images/leaf.jpg"

export default function Section1() {
  return (
    <section id="section1" className=' bg-white border-t-2  border-black'>
    <div className='w-[90%] mx-auto'>
        <div  className=' md:h-[100vh] flex items-center h-full '>
            <div className='md:flex my-10 items-start justify-between'>
                <div className='md:w-[40%] w-full'>
                    <img src={leaf} alt="leaf " className='md:w-[400px] w-full border-black border-2' />
                </div>
                <div className='md:w-[70%] md:pl-10'>
                    <h2 className='md:text-4xl text-3xl'>Lorem ipsum dolor sit amet consectetur.</h2>
                    <h3 className='md:text-2xl text-xl font-light'>Nature</h3>
                    <p className='text-lg'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quibusdam vero placeat, 
                        deleniti vitae eius sit molestias molestiae! Reiciendis deleniti nulla iure sapiente est corrupt
                        pariatur, officiis adipisci sunt dolores officia ipsa sit itaque quidem quas ullam porro eius 
                        iusto eum iste numquam labore. Voluptates consectetur eius quae, voluptatem temporibus non quasi,
                        Dicta incidunt reiciendis officiis architecto, quod minima ea numquam 
                        unde aperiam deserunt? Fugiat quod adipisci inventore, nisi iure ratione.
                    </p>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}
