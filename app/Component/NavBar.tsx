'use client'
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import { FaBars } from "react-icons/fa";
// import FloateNav from './FloateNav';


export default function NavBar() {

    const [open,setOpen]=useState(false)
  return (
    <div className='p-7  bg-green-900 flex justify-between items-center relative '>
        <div className='flex gap-2 items-center'>
            <Image width='50' height='50' alt='aagje' src='/Images/avataaars.jpeg' className='rounded-full'/>
            <h1> جمعية الإعجاز العلمى   </h1>
        </div>
        <ul className=' gap-5 hidden lg:flex text-[23px]'>
            <li>
                <Link href='/' className='hover:scale-110 transition-all duration-300'>الرئيسية</Link>
            </li>
            <li>
            <Link href='#' className='hover:scale-110 transition-all duration-300'>المؤتمرات</Link>
            </li>
            <li>
                <Link href='#' className='hover:scale-110 transition-all duration-300'>القوائم</Link>
            </li>
            <li>
                <Link href='#' className='hover:scale-110 transition-all duration-300'>الملتقيات وورش العمل</Link>
            </li>
            <li>
                <Link href='#' className='hover:scale-110 transition-all duration-300'>من نحن </Link>
            </li>
            <li>
                <Link href='#' className='hover:scale-110 transition-all duration-300'>التواصل</Link>
            </li>
        </ul>

        <FaBars className='text-2xl font-bold cursor-pointer lg:hidden hover:scale-125 transition-all duration-300' onClick={()=>setOpen(!open)}/>
            <div className={` ${open?'opacity-1':'opacity-0 -z-20'} border-[20px] border-green-700 absolute top-[90px] left-6 border-t-transparent border-r-transparent border-l-transparent `}></div>
        <ul className={`${open?'opacity-1':'opacity-0 -z-20'} text-[23px] gap-5 flex flex-col  absolute top-[130px] left-4 bg-green-700  min-w-[300px] rounded-lg text-center p-3`}>
        <li>
                <Link href='/' className='hover:scale-110 transition-all duration-300'>الرئيسية</Link>
            </li>
            <li>
            <Link href='#' className='hover:scale-110 transition-all duration-300'>المؤتمرات</Link>
            </li>
            <li>
                <Link href='#' className='hover:scale-110 transition-all duration-300'>القوائم</Link>
            </li>
            <li>
                <Link href='#' className='hover:scale-110 transition-all duration-300'>الملتقيات وورش العمل</Link>
            </li>
            <li>
                <Link href='#' className='hover:scale-110 transition-all duration-300'>من نحن </Link>
            </li>
            <li>
                <Link href='#' className='hover:scale-110 transition-all duration-300'>التواصل</Link>
            </li>
        </ul>
    </div>
  )
}
