"use client"
import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'

const Navbar = () => {

  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY || window.scrollY < window.innerHeight) { // if scroll down hide the navbar
      setShow(false); 
    } else { // if scroll up show the navbar
      setShow(true);  
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY); 
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    // cleanup function
    return () => {
       window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

    
    console.log(show)
  return (
    <nav className={`flex w-[calc(100%-36px)] justify-between items-center rounded-[25px] bg-[#fbffe9] m-4 p-5 fixed ${show?'top-0':'top-[-110px]'} z-50 border border-gray-400 transition-all duration-500 `}>
        <Link href='/' className='font-semibold text-3xl text-black'>I&Q</Link>
        <div className="flex gap-3">
          <Link className='bg-black rounded-full pl-4 pr-3 py-3 text-sec uppercase text-[12px] font-medium flex gap-2 items-center group' href=''>
            Our Services
            <svg height='20' width='20' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" className="text-ter rotate-[-90deg] group-hover:rotate-[-45deg] group-hover:text-sec transition-all"><path stroke="currentColor" strokeWidth="1.5" d="M17.868 8.073v9.795H8.073"></path><path stroke="currentColor" strokeWidth="1.5" d="M17.868 17.868 8.073 8.073"></path><path stroke="currentColor" strokeWidth="1.5" d="M24.97 12.97c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12 0 6.628 5.374 12 12 12 6.628 0 12-5.372 12-12Z"></path><path stroke="currentColor" strokeWidth="1.5" d="M24.97 12.97c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12 0 6.628 5.374 12 12 12 6.628 0 12-5.372 12-12Z"></path></svg>
          </Link>
          <Link className='bg-black rounded-full pl-4 pr-3 py-3 text-sec uppercase text-[12px] font-medium flex gap-2 items-center group' href=''>
            About
            <svg height='20' width='20' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" className="text-ter rotate-[-90deg] group-hover:rotate-[-45deg] group-hover:text-sec transition-all"><path stroke="currentColor" strokeWidth="1.5" d="M17.868 8.073v9.795H8.073"></path><path stroke="currentColor" strokeWidth="1.5" d="M17.868 17.868 8.073 8.073"></path><path stroke="currentColor" strokeWidth="1.5" d="M24.97 12.97c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12 0 6.628 5.374 12 12 12 6.628 0 12-5.372 12-12Z"></path><path stroke="currentColor" strokeWidth="1.5" d="M24.97 12.97c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12 0 6.628 5.374 12 12 12 6.628 0 12-5.372 12-12Z"></path></svg>
          </Link>
          <Link className='bg-black rounded-full pl-4 pr-3 py-3 text-sec uppercase text-[12px] font-medium flex gap-2 items-center group' href=''>
            Pricing
            <svg height='20' width='20' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" className="text-ter rotate-[-90deg] group-hover:rotate-[-45deg] group-hover:text-sec transition-all"><path stroke="currentColor" strokeWidth="1.5" d="M17.868 8.073v9.795H8.073"></path><path stroke="currentColor" strokeWidth="1.5" d="M17.868 17.868 8.073 8.073"></path><path stroke="currentColor" strokeWidth="1.5" d="M24.97 12.97c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12 0 6.628 5.374 12 12 12 6.628 0 12-5.372 12-12Z"></path><path stroke="currentColor" strokeWidth="1.5" d="M24.97 12.97c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12 0 6.628 5.374 12 12 12 6.628 0 12-5.372 12-12Z"></path></svg>
          </Link>
          <Link className='bg-black rounded-full pl-4 pr-3 py-3 text-sec uppercase text-[12px] font-medium flex gap-2 items-center group' href=''>
            Contact
            <svg height='20' width='20' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" className="text-ter rotate-[-90deg] group-hover:rotate-[-45deg] group-hover:text-sec transition-all"><path stroke="currentColor" strokeWidth="1.5" d="M17.868 8.073v9.795H8.073"></path><path stroke="currentColor" strokeWidth="1.5" d="M17.868 17.868 8.073 8.073"></path><path stroke="currentColor" strokeWidth="1.5" d="M24.97 12.97c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12 0 6.628 5.374 12 12 12 6.628 0 12-5.372 12-12Z"></path><path stroke="currentColor" strokeWidth="1.5" d="M24.97 12.97c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12 0 6.628 5.374 12 12 12 6.628 0 12-5.372 12-12Z"></path></svg>
          </Link>
        </div>
      </nav>
  )
}

export default Navbar