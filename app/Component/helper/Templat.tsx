import React from 'react'
import Header from './Header'
import Link from 'next/link'
interface props{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  title: any  ,
  color:string,
  background:string,
  link:string,
  des:string,
  colorOpp:string,
  backgroundOpp:string,
  id:string
}

export default function Templat({title,color,background,colorOpp,backgroundOpp,link,des,id}:props) {
  return (
    <div id={id} className={`${background}  pt-14 pb-14 px-5 text-center mb-14`}>
      <Header title={title} color={color} background={backgroundOpp}/>
      <h2 className={`mt-10 w-[310px] sm:w-full leading-[50px]	mx-auto ${color}`}> {des}<Link href={`/${link}`} className={`${colorOpp} ${backgroundOpp} p-2 rounded-lg ${background === 'bg-white'?'hover:bg-white':'hover:bg-green-800'}  ${color === 'text-white'?'hover:text-white':'hover:text-green-800'} transition-all duration-300 ${background ==='bg-white'?'hover:border-green-800 ':'hover:border-white '}hover:border-green-800  border-2 border-white`}>لعرض المزيد</Link></h2>
    </div>
  )
}
