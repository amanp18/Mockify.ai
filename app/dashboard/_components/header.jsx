"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'

const Header = () => {
  const path=usePathname();


  return (
    <div className=' flex p-3 items-center justify-between bg-secondary shadow-lg'>
    <Image src={'/logo.svg'} width={160} height={100} alt="logo" />
    <ul className='hidden md:flex gap-8'>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard'&& 'text-primary font-bold'}`}>Dashboard</li>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/questions'&& 'text-primary font-bold'}`}>Questions</li>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/upgrade'&& 'text-primary font-bold'}`}>Upgrade</li>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/how'&& 'text-primary font-bold'}`}>How it works?</li>
    </ul>
    <UserButton className=' mr-10' /> 
    </div>
  )
}

export default Header