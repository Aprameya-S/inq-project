import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import DarkModeSwitcher from './DarkModeSwitch'

const DashMenu = (props:any) => {

  return (
    <>
    <nav className='flex flex-col fixed h-[100vh] p-[25px] w-[300px] gap-4'>
      <div className=" bg-secondary rounded-[24px] p-6 h-full">
        <div className="flex items-center gap-1 mb-4">
        <svg width="30" height="26" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M33.1353 16.0683L17.5753 31.6544C17.4658 31.7642 17.3357 31.8512 17.1926 31.9106C17.0495 31.97 16.8961 32.0006 16.7412 32.0006C16.5863 32.0006 16.433 31.97 16.2899 31.9106C16.1467 31.8512 16.0167 31.7642 15.9072 31.6544L0.347156 16.0683C0.182406 15.903 0.0702326 15.6925 0.0248053 15.4634C-0.0206219 15.2343 0.0027372 14.9968 0.0919264 14.781C0.181116 14.5651 0.332137 14.3806 0.525917 14.2507C0.719697 14.1208 0.94754 14.0514 1.18067 14.0512H32.3007C32.534 14.0512 32.762 14.1205 32.9559 14.2503C33.1498 14.3801 33.301 14.5646 33.3903 14.7805C33.4797 14.9963 33.5031 15.2339 33.4577 15.4631C33.4123 15.6923 33.3001 15.9029 33.1353 16.0683Z" fill="#0846A1"/>
  <path d="M33.1354 9.04109L17.5753 24.6315C17.3588 24.8501 17.0652 24.9746 16.7578 24.9782L10.9753 7.02188H32.3008C32.5342 7.02196 32.7624 7.09137 32.9565 7.22136C33.1505 7.35135 33.3018 7.53608 33.3911 7.75219C33.4804 7.96829 33.5038 8.20607 33.4583 8.43549C33.4128 8.6649 33.3004 8.87565 33.1354 9.04109Z" fill="url(#paint0_linear_30_191)"/>
  <path d="M33.1354 9.04109L26.1894 16.0011L10.9753 7.02188H32.3008C32.5342 7.02196 32.7624 7.09137 32.9565 7.22136C33.1505 7.35135 33.3018 7.53608 33.3911 7.75219C33.4804 7.96829 33.5038 8.20607 33.4583 8.43549C33.4128 8.6649 33.3004 8.87565 33.1354 9.04109Z" fill="url(#paint1_linear_30_191)"/>
  <path d="M16.7587 24.9782C16.6007 24.9809 16.4439 24.9516 16.2975 24.8921C16.1512 24.8325 16.0184 24.7438 15.9071 24.6315L0.347045 9.04108C0.262881 8.95841 0.191162 8.8639 0.134141 8.76055C0.0675505 8.63767 0.0242411 8.50349 0.00639998 8.36481C-0.0160628 8.19751 -0.00256185 8.02734 0.0459969 7.86569C0.0945557 7.70404 0.177048 7.55465 0.287944 7.42757C0.39884 7.30049 0.535576 7.19863 0.688977 7.12884C0.842378 7.05905 1.0089 7.02296 1.17737 7.02295H10.9709L16.7587 24.9782Z" fill="url(#paint2_linear_30_191)"/>
  <path d="M7.44854 16.1599L0.342895 9.04102C0.258731 8.95834 0.187012 8.86384 0.129991 8.76049C0.0634011 8.63761 0.0200917 8.50343 0.00225054 8.36475C-0.0202122 8.19745 -0.00671535 8.02728 0.0418434 7.86563C0.0904022 7.70398 0.172898 7.55459 0.283794 7.42751C0.39469 7.30043 0.531423 7.19857 0.684823 7.12878C0.838224 7.05899 1.00475 7.0229 1.17322 7.02289H10.9668L7.44854 16.1599Z" fill="url(#paint3_linear_30_191)"/>
  <path d="M33.1354 2.01816L17.5754 17.6086C17.4658 17.7183 17.3358 17.8054 17.1927 17.8648C17.0496 17.9242 16.8962 17.9547 16.7413 17.9547C16.5864 17.9547 16.433 17.9242 16.2899 17.8648C16.1468 17.8054 16.0168 17.7183 15.9073 17.6086L0.347242 2.01816C0.182127 1.85294 0.0696352 1.64234 0.023998 1.41304C-0.0216393 1.18373 0.00163059 0.946015 0.0908632 0.729963C0.180096 0.51391 0.33128 0.32923 0.525288 0.199299C0.719296 0.0693675 0.947407 2.01347e-05 1.18076 3.10507e-05H32.3008C32.5343 -0.000191089 32.7625 0.0690092 32.9567 0.198859C33.1509 0.328709 33.3022 0.513362 33.3916 0.729458C33.4809 0.945554 33.5043 1.18337 33.4587 1.41278C33.4131 1.64218 33.3006 1.85287 33.1354 2.01816Z" fill="url(#paint4_linear_30_191)"/>
  <defs>
  <linearGradient id="paint0_linear_30_191" x1="10.9753" y1="16" x2="33.481" y2="16" gradientUnits="userSpaceOnUse">
  <stop stopColor="white"/>
  <stop offset="1" stopColor="#BAD3F8"/>
  </linearGradient>
  <linearGradient id="paint1_linear_30_191" x1="20.0676" y1="17.6263" x2="20.8319" y2="-4.55567" gradientUnits="userSpaceOnUse">
  <stop stopColor="white"/>
  <stop offset="1" stopColor="#BAD3F8"/>
  </linearGradient>
  <linearGradient id="paint2_linear_30_191" x1="17.5465" y1="16.0006" x2="-0.993158" y2="16.0006" gradientUnits="userSpaceOnUse">
  <stop stopColor="white"/>
  <stop offset="1" stopColor="#BAD3F8"/>
  </linearGradient>
  <linearGradient id="paint3_linear_30_191" x1="11.0875" y1="12.4686" x2="1.06965" y2="5.74247" gradientUnits="userSpaceOnUse">
  <stop stopColor="white"/>
  <stop offset="1" stopColor="#BAD3F8"/>
  </linearGradient>
  <linearGradient id="paint4_linear_30_191" x1="16.7413" y1="16.1593" x2="16.7413" y2="-0.179517" gradientUnits="userSpaceOnUse">
  <stop stopColor="#479FF7"/>
  <stop offset="1" stopColor="#1161FB"/>
  </linearGradient>
  </defs>
  </svg>
          <span className='text-[24px] font-semibold'>inq</span>
        </div>
        <div className="grid">
          {
            props.links.map((item:any,index:number) => (
              <Link href={item.href} key={index} className='font-medium text-sm mb-1'>
                {item.title}
              </Link>
            ))
          }
        </div>
      </div>
      <div className="place-self-end w-full flex gap-2 items-center">
        <DarkModeSwitcher/>
        <Button className='w-full rounded-full' onClick={props.logoutFunction}>Logout</Button>
      </div>
    </nav>
    <main className='ml-[300px] p-[25px]'>
      {props.children}
    </main>
    </>
  )
}

export default DashMenu