"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { cookies } from 'next/headers'; // Import cookies
import Navigate from '@/components/Navigate';
import Loader from '@/components/Loader';
import DashMenu from '@/components/DashMenu';
import { useRouter } from 'next/navigation';


const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isLoading, setIsLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)

  const links = [
    {
      title:"link_1",
      href:"/Admin/link_1"
    },
    {
      title:"link_2",
      href:"/Admin/link_2"
    },
  ]

  const auth = async() => {
    try {
      const data = await axios.post(
        "http://localhost:5174/api/auth/authAdmin",
        {},
        {withCredentials:true}
      ).then((res:any) => {
        setAuthenticated(res.data)
        setIsLoading(false)
      })
    } catch (error) {
      console.error(error)
    }
  }

  const {push} = useRouter()

  const handleLogout = async() => {
    const data = await axios.post(
      "http://localhost:5174/api/auth/logoutAdmin",
      {},
      {withCredentials:true}
    ).then((res:any) => {
      setAuthenticated(false)
      push('/SignIn')
    })
  }

  useEffect(() => {
    auth()
  },[])

  if(isLoading)return(<Loader/>)

  return authenticated ? (
    <div>
      <DashMenu links={links} logoutFunction={handleLogout}>
        {children}
      </DashMenu>
    </div>
  ) : (
    <Navigate to='/SignIn/admin' replace/>
  )
}

export default Layout