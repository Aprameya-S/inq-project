import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='mx-4 rounded-t-[20px] flex items-center bg-pri p-[20px] text-sec mt-[120px] mb-4'>
      <h1 className='font-semibold text-3xl mr-5'>I&Q</h1>
      <div className="flex gap-2">
        <a href="https://www.linkedin.com/in/inq-consultancy-b27496196" target='_blank' className='hover:text-ter'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
      </div>

      <span className='text-sm font-medium ml-auto'>
        © {new Date().getFullYear()} I&Q
      </span>

    </footer>
  )
}

export default Footer