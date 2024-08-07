"use client"
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-dropdown-menu'
import React, { useContext, useState } from 'react'
import axios from 'axios'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify'
import { AuthContext } from '@/context/AuthContext'

const Page = () => {
  const [form, setForm] = useState({username:"",pass:""})
  const { push } = useRouter();

  const { login } = useContext(AuthContext)

  const handleSubmit = async(e:any) => {
    e.preventDefault()
    try {
      const val = await login(form.username, form.pass, 3)
      if(val === 1){
        push("/Role3")
      }else if(val === -10){
        alert("You do not have these permissions")
      }else if(val === -11){
        alert("Incorect credentials")
      }else{
        alert("No such user exists")
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="grid items-center h-screen">
        <div className='grid grid-cols-[200px_1fr] w-[min(800px,100%)] m-auto border-2 border-input shadow-md p-8 rounded-[20px]'>
        <div className="">
          <h1 className='text-[24px] font-medium'>Login</h1>
          <h2 className='text-[18px] font-medium text-blue-600'>Role 3</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <Label className='text-sm'>Username</Label>
          <Input type='text' onChange={(e) => setForm({...form,['username']:e.target.value})} className='mb-3'/>
          <Label className='text-sm'>Password</Label>
          <Input type='password' onChange={(e) => setForm({...form,['pass']:e.target.value})} className=''/>
          <Link href={'SignIn/role3/forgotPassword'} className='text-blue-600 text-[12px]'>Forgot password?</Link><br/>
          <Button type='submit' className='mt-3'>Submit</Button>
        </form>
      </div>
    </div>
    
  )
}

export default Page