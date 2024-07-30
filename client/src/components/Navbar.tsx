"use client"
import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'

const Navbar = () => {

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);


  return (
    <nav className={`flex w-[calc(100%-32px)] justify-between items-center rounded-[0px] bg-[#ffffff54] m-4 pl-5 fixed ${show?'top-0':'top-[-110px]'} z-50 border border-gray-400 text-qua hover:text-ter transition-all duration-500 backdrop-blur-md text-black rounded-b-[20px] overflow-hidden`}>
        <Link href='/' className='font-semibold text-3xl text-black'>I&Q</Link>
        <div className="flex">
          <div className="w-[8px] border-l border-gray-400"></div>
          <Link className='bg-transparent hover:bg-ter px-7 py-6 uppercase text-[12px] font-semibold  items-center group border-l border-gray-400 text-black transition-all' href='/services'>
            Services
          </Link>
          <Link className='bg-transparent hover:bg-ter px-7 py-6 uppercase text-[12px] font-semibold  items-center group border-l border-gray-400 text-black transition-all' href='/about'>
            About
            
          </Link>
          <Link className='bg-transparent hover:bg-ter px-7 py-6 uppercase text-[12px] font-semibold  items-center group border-l border-gray-400 text-black transition-all' href=''>
            Pricing
            
          </Link>
          <Link className='bg-transparent hover:bg-ter px-7 py-6 uppercase text-[12px] font-semibold  items-center group border-l border-gray-400 text-black transition-all' href=''>
            Contact
          </Link>
        </div>
      </nav>
  )
}

export default Navbar