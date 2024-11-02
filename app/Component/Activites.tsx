import React from 'react'
import Header from './helper/Header'

export default function Activites() {
  return (
    <div className='text-white p-10 my-10 bg-green-800'>
        <Header title={<h2 className='text-center text-[33px] md:text-[45px] font-bold '>أنشطة الجمعية</h2>} color='text-white' background='bg-white'/>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 text-black mt-[20px]'>
            <p className='font-medium  text-center mt-[10px] text-[23px] p-5 bg-white rounded-lg'>
            عقد المؤتمرات والندوات والمحاضرات المتعلقة بالإعجاز العلمي في القرآن والسنة، داخل وخارج مصر.
            </p>
            <p className='font-medium text-center mt-[10px] text-[23px] p-3 bg-white rounded-lg'>
            نشر الأبحاث العلمية المتعلقة بالإعجاز العلمي المتنوع في القرآن والسنة.
            </p>
            <p className='font-medium text-center mt-[10px] text-[23px] p-3 bg-white rounded-lg'>
            عقد ندوات علمية دعوية للدفاع والرد على الشبهات المثارة فيما يتعلق بالإعجاز العلمي.
            </p>
            <p className='font-medium text-center mt-[10px] text-[23px] p-3 bg-white rounded-lg'>
            تخصيص برامج متنوعة للإعجاز العلمي ليصبح وسيلة من وسائل الدعوة.
            </p>
            <p className='font-medium text-center mt-[10px] text-[23px] p-3 bg-white rounded-lg'>
            فتح فصول لتحفيظ القرآن الكريم، وبرامج براعم الإعجاز.
            </p>
            <p className='font-medium text-center mt-[10px] text-[23px] p-3 bg-white rounded-lg'>
            إصدار مجلة لتناول قضايا الإعجاز العلمي والتعريف بأنشطة الجمعية وهى مجلة &quot;إعجاز&ldquo; بترخيص من المجلس الأعلى للصحافة.            </p>
        </div>
    </div>
  )
}
