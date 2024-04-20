"use client"
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-dropdown-menu'
import React, { useState } from 'react'
import axios from 'axios'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Page = () => {
  const [form, setForm] = useState({username:"",pass:""})

  axios.interceptors.request.use(
    config=> {
      config.withCredentials=true
      return config;
    },
    error => {
      return Promise.reject(error)
    }
  )

  const handleSubmit = (e:any) => {
    e.preventDefault()
    try {
      axios.post('http://localhost:5174/api/auth/loginAdmin',form,{withCredentials: true}).then((res) => {
        console.log(res)
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='grid grid-cols-[200px_1fr] w-[min(800px,100%)] m-auto border-2 border-input shadow-md p-8 rounded-[20px]'>
      <div className="">
        <h1 className='text-[24px] font-medium'>Login</h1>
        <h2 className='text-[18px] font-medium text-blue-600'>admin</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Label className='text-sm'>Username</Label>
        <Input type='text' onChange={(e) => setForm({...form,['username']:e.target.value})} className='mb-3'/>
        <Label className='text-sm'>Password</Label>
        <Input type='password' onChange={(e) => setForm({...form,['pass']:e.target.value})} className=''/>
        <Link href={'SignIn/admin/forgotPassword'} className='text-blue-600 text-[12px]'>Forgot password?</Link><br/>
        <Button type='submit' className='mt-3'>Submit</Button>
      </form>
    </div>
  )
}

export default Page