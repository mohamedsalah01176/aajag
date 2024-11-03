import React from 'react'
import Header from './helper/Header'

export default function Aboute() {
  return (
    <div id='abuate' className='text-black p-6 my-10'>
        <Header title={<h2 className='text-center text-[33px] md:text-[45px] font-bold '>من نحن</h2>} color='text-black' background='bg-green-600'/>
        <p className='font-medium max-w-[800px] mx-auto text-center mt-[30px] text-[23px]'>
        أنشئت جمعية الإعجاز العلمى المتجدد بمصر عام 2013، تحت شعار: (فكر – علم – ثقافة – تنمية) كأول جمعية فى مصر متخصصة في قضايا الإعجاز، مستهدفة بيان أوجه الإعجاز العلمى فى القرآن الكريم وصحيح السنة والتأكيد على أنه لا تعارض بينه وما توصل إليه العلم الحديث.
        </p>
    </div>
  )
}
