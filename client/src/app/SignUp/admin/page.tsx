"use client"
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-dropdown-menu'
import React, { useContext, useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth, db } from "../../../../firebase"
import { addDoc, collection, doc, setDoc } from 'firebase/firestore'
import { AuthContext } from '@/context/AuthContext'
const Page = () => {
  const [form, setForm] = useState({email: "",username:"",pass:"",name:""})
  const { push } = useRouter();

  const { CoordSignup } = useContext(AuthContext)

  const handleSubmit = async(e:any) => {
    e.preventDefault()
    try {
      const val = await CoordSignup(form.email, form.pass, form.name, 1)
      
    //   if(val === 1){
    //     push("/Admin")
    //   }else if(val === -10){
    //     alert("You do not have these permissions")
    //   }else if(val === -11){
    //     alert("Incorect credentials")
    //   }else{
    //     alert("No such user exists")
    //   }
    } catch (error) {
      
    }
  }

  return (
    <div className="grid items-center h-screen">
        <div className='grid grid-cols-[200px_1fr] w-[min(800px,100%)] m-auto border-2 border-input shadow-md p-8 rounded-[20px]'>
        <div className="">
          <h1 className='text-[24px] font-medium'>Sign Up</h1>
          <h2 className='text-[18px] font-medium text-blue-600'>Admin</h2>
        </div>
        <form onSubmit={handleSubmit}>
        <Label className='text-sm'>Name</Label>
        <Input type='text' onChange={(e) => setForm({...form,['name']:e.target.value})} className='mb-3'/>
          <Label className='text-sm'>Email</Label>
          <Input type='text' onChange={(e) => setForm({...form,['email']:e.target.value})} className='mb-3'/>
          <Label className='text-sm'>Password</Label>
          <Input type='password' onChange={(e) => setForm({...form,['pass']:e.target.value})} className='mb-3'/>
          <Label className='text-sm'>
            Re-enter Password</Label>
          <Input type='password' onChange={(e) => setForm({...form,['pass']:e.target.value})} className=''/>
          <Link href={'/SignIn/admin'} className='text-blue-600 text-[12px]'>Already have an account?</Link><br/>
          <Button type='submit' className='mt-3'>Submit</Button>
        </form>
      </div>
    </div>
    
  )
}

export default Page