import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='px-[10px] w-[250px] border-r bg-white dark:bg-transparent border-gray-300 dark:border-gray-800'>
      <div className="title px-2 flex gap-[5px] my-4">
        <img src="https://free-react-demo.tailadmin.com/assets/logo-icon-7e6ff7aa.svg" alt="//" />
        <h1 className='text-[25px] font-semibold'>continental</h1>
      </div>
      <Link className='flex bg-transparent px-3 py-2 text-[16px] font-semibold items-center gap-2 rounded-[5px] hover:bg-slate-200 dark:hover:bg-slate-800'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pie-chart-fill" viewBox="0 0 16 16">
          <path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 0 0 8.5.015z"/>
        </svg>
        Dashboard
      </Link>
    </div>
  )
}

export default Sidebar