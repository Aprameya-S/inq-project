import Link from 'next/link'
import React from 'react'

const Page = () => {
  const roles = [
    {
      roleName:"admin",
      link:"SignIn/admin",
      icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    },
    {
      roleName:"role_2",
      link:"SignIn/role_2",
      icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    },
    {
      roleName:"role_3",
      link:"SignIn/role_3",
      icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    },
    {
      roleName:"role_4",
      link:"SignIn/role_4",
      icon:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    },
  ]

  return (
    <div className='w-[600px] mx-auto'>
      <h1 className='text-[24px] font-semibold mb-4'>Select user</h1>
      <div className="grid grid-cols-2 gap-3">
        {
          roles.map((item,index) => (
            <Link href={item.link} key={index} className='border-2 border-input bg-transparent hover:border-blue-600 rounded-md transistion-all duration-200 flex gap-2 p-3 hover:shadow-md'>
              {item.icon}
              <p className=''>{item.roleName}</p>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Page