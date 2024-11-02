import Image from 'next/image'
import React from 'react'

export default function Section1() {
  return (
    <div className='text-white h-[80vh] bg-green-800  flex  flex-col gap-4 justify-center items-center'>
        <Image src={'/Images/avataaars.jpeg'} alt='aagaj' width={250} height={250} className=' rounded-full'/>
        <h1 >##############</h1>
    </div>
  )
}
