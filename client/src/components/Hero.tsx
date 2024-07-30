import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Hero = () => {

 

  return (
    <>
    <section className=' bg-[#e3e3e3] text-pri h-[calc(100dvh-32px)] m-4 p-5 relative rounded-b-[20px]'>

      <div className="mt-[100px] __className_24f709 text-8xl font-medium  leading-[1.2em]">
        <h1>Ensuring Quality</h1>
        <div className="flex items-baseline">
          <div className="bg-[url('/images/red.png')] h-[82px] mr-2 w-[300px] bg-cover bg-center"></div>
          <h1>Inspiring Trust</h1>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_210px] absolute bottom-5 left-0 px-5 items-end">

        <p className='w-[min(800px,100%)] mt-6 font-normal text-[20px]'>
          We specialize in delivering top-tier inspections across diverse industrial sectors. With a dedicated team of experts and a commitment to excellence, we ensure the highest standards of quality and safety in every project.
        </p>
        
        <Link href='/' className='flex border items-center group font-medium h-fit rounded-[15px] overflow-hidden border-gray-400 w-fit'>
          <span className='pl-3 pr-8'>Work with us</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="border-l border-gray-400 w-[50px] aspect-square group-hover:bg-ter transition-all"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
        </Link>
      </div>
      
    </section>
    </>
  )
}

export default Hero