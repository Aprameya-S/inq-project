import React from 'react'
import axios from 'axios';

const layout = async({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  axios.interceptors.request.use(
    config=> {
      config.withCredentials=true
      return config;
    },
    error => {
      return Promise.reject(error)
    }
  )

  const data = await axios.post("http://localhost:5174/api/auth/authAdmin",{},{withCredentials: true}).then((res:any) => {
    console.log(res.data)
  })

  return (
    <div>
      {children}
    </div>
  )
}

export default layout