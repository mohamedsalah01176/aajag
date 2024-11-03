// import Image from 'next/image'
import React from 'react'

export default function Day1() {
    const data=[
        {
            session:'الاوله',
            info:[
                {name:' عبدالله المصلح',dec:'اإلعجــاز العلمى تعـــريفه وضىابطه وثـمـاره',link:'https://www.youtube.com/embed/BjzZiHk_Oo4?si=GBEa4cs8mmAinIzk',pdf:'/document/Day1/sesion1/Presentation.pdf' },
                {name:' يحي حسن وزيري',dec:'عدة احلامل احلكمة اإلهلية املعجسة النبوية واحلقيقة العلمية',link:'https://www.youtube.com/embed/BjzZiHk_Oo4?si=GBEa4cs8mmAinIzk',pdf:'/document/Day1/sesion1/presentation2.pdf'},
                {name:'فوزي رمضان',dec:'توسط مكة املكرمة ليابسة الكرة األرضية',link:'https://www.youtube.com/embed/BjzZiHk_Oo4?si=GBEa4cs8mmAinIzk',pdf:'/document/Day1/sesion1/presentation3.pdf'},
            ]
        },
        {
            session:'الثانيه',
            info:[
                {name:'  ابراهيم الهدهد',dec:'توسط مكة املكرمة ليابسة الكرة األرضية',link:'https://www.youtube.com/embed/BjzZiHk_Oo4?si=GBEa4cs8mmAinIzk',pdf:'/document/Day1/sesion2/pr2.pdf'},
                {name:'  حنفي مدبولي',dec:'اإلعحاز العلمى فى حديث الرباب',link:'https://www.youtube.com/embed/BjzZiHk_Oo4?si=GBEa4cs8mmAinIzk',pdf:'/document/Day1/sesion2/pr2.pdf'},
                {name:' مصطفي ابراهيم',dec:'خلق اإلنسان من ساللة من طني',link:'https://www.youtube.com/embed/BjzZiHk_Oo4?si=GBEa4cs8mmAinIzk',pdf:'/document/Day1/sesion2/pr3.pdf' },
            ]
        },
        {
            session:'الثالثه',
            info:[
                {name:'  حسن القصبي',dec:'اإلعجـاز البيـاني في السنـة النبـويــــة',link:'https://www.youtube.com/embed/BjzZiHk_Oo4?si=GBEa4cs8mmAinIzk',pdf:'/document/Day1/sesion3/pr1.pdf'},
                {name:'  محمد أبراهيم',dec:'إعجـــاز السبــــق النبــــوي في حــديـث ال تغضب',link:'https://www.youtube.com/embed/BjzZiHk_Oo4?si=GBEa4cs8mmAinIzk',pdf:'/document/Day1/sesion3/pr2.pdf'},
                {name:' محمد العجرودي',dec:'االعجاز التشريعي يف قوانني األحوال الشخصية (اخللـع منـوذجـاً)',link:'https://www.youtube.com/embed/BjzZiHk_Oo4?si=GBEa4cs8mmAinIzk',pdf:'/document/Day1/sesion3/pr3.pdf' },
            ]
        },
        // {
        //     session:'الثانيه',
        //     doctor:['الدكتور ابراهيم الهدهد' ,' الدكتور مصطفي ابراهيم','الدكتور حنفي مدبولي'],
        //     desc:'سوف نتكلم عن الدين واهميته',
        //     link:'https://www.youtube.com/embed/BjzZiHk_Oo4?si=GBEa4cs8mmAinIzk',
        //     img:'/Images/Screenshot 2024-11-02 122124.png',
        //     pdf:['/document/sesion1/Presentation.pdf','/document/sesion1/presentation2.pdf','/document/sesion1/Presentation.pdf']
        // },
        // {
        //     session:'الثالثه',
        //     doctor:['محمد احمد'],
        //     desc:'سوف نتكلم عن الدين واهميته',
        //     link:'https://www.youtube.com/embed/BjzZiHk_Oo4?si=GBEa4cs8mmAinIzk',
        //     img:'/Images/Screenshot 2024-11-02 122124.png',
        //     pdf:['/document/sesion1/Presentation.pdf','/document/sesion1/presentation2.pdf','/document/sesion1/Presentation.pdf']
        // },
        // {
        //     session:'الرابعه',
        //     doctor:['محمد احمد'],
        //     desc:'سوف نتكلم عن الدين واهميته',
        //     link:'https://www.youtube.com/embed/BjzZiHk_Oo4?si=GBEa4cs8mmAinIzk',
        //     img:'/Images/Screenshot 2024-11-02 122124.png',
        //     pdf:['/document/sesion1/Presentation.pdf','/document/sesion1/presentation2.pdf','/document/sesion1/Presentation.pdf']
        // },
    ]
  return (
    <div className='text-green-800 text-center'>
        <div className='flex justify-center items-center gap-3'>
            <div className='w-[50px] h-[3px] bg-green-800 '></div> 
            <h2 className='text-[35px] font-semibold my-5'>اليوم الاول</h2>
            <div className='w-[50px] h-[3px] bg-green-800 '></div> 
        </div>
        {data.map((item,index:number)=>
        <div key={index} >
            <div className='text-center p-10'>
                    <h2 className='text-[35px] font-semibold  mx-auto w-[250px] '>الجلسه {item.session}</h2>
                    <div className='w-[250px] h-[5px] rounded-lg bg-green-800 mx-auto'></div>
            </div>
                {item.info.map((doc,index)=>
                <div key={index} className='mt-9 mb-14'>
                    <div className='flex flex-col md:flex-row mx-auto justify-center items-center  gap-7 mb-20'>
                        <div className='w-full md:w-5/12  py-12 flex gap-3 flex-col text-center'> 
                            <h2  className='text-black text-2xl'><span className='text-[30px] text-green-800'>الدكتور:</span> {doc.name}</h2>
                            <p className='text-black'><span className='text-[30px] text-green-800'>الوصف:  </span> {doc.dec} </p>
                            <a target='_blank' href={doc.pdf}  className='cursor-pointer my-5 mx-auto  w-[160px] text-center  bg-green-800 rounded-lg text-white p-2 hover:bg-white hover:text-green-800 transition-all duration-300 hover:border-green-800 border-2 border-white  '>تحميل الملف </a>
                        </div>
                        <div className='w-full md:w-6/12 px-5'>
                            <iframe loading='lazy' width="" height="315" className='w-[330px] md:w-[560px] h-[290px] md:h-[315px]' src={doc.link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
                )}
                {/* <div className='w-[500px] h-[2px] bg-green-800 mx-auto'></div> */}
        </div>
        )}
        
    </div>
  )
}
