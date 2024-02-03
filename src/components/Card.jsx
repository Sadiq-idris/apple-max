import React from 'react'

export default function Card({src}) {
  return (
    <div className='flex-none'>
        <div>
            <img src={src} alt="pictures of imagess" className='w-[300px] h-[300px] border-black border-2 object-cover object-center'/>
        </div>
        <div className='w-[300px]  border-black border-2 bg-white mt-2 p-1'>
            <h3 className='text-2xl my-1 '>Lorem ipsum dolor sit.</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam earum illo harum! Aliquid, asperiores itaque.
            </p>
            <span className='font-bold text-gray-400 hover:decoraton-black hover:underline
             transition-all duration-500'>Learn more</span>
        </div>
    </div>
  )
}
