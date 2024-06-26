import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <>
    <section className='rounded-[25px] bg-[#fbffe9] text-black h-[calc(100dvh-32px)] m-4 p-5 relative'>
      <nav className="flex justify-between">
        <Link href='/' className='font-semibold text-3xl '>I&Q</Link>
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

      <p className='w-[min(600px,100%)] mt-4'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur nostrum impedit unde modi, placeat magni, voluptate vel quas, soluta voluptatum laudantium autem officiis sed et rem quaerat incidunt libero officia?
      </p>
      
      <h2 className='mt-auto bg-sec absolute bottom-[16px] text-5xl font-semibold p-[40px] w-[calc(100%-36px)] text-center rounded-[20px]'>
        Lorem ipsum dolor sit amet consectetur
      </h2>
    </section>
    </>
  )
}

export default Hero