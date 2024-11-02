'use client'

import { useState } from "react"
import Day1 from "./Day1"
import Day2 from "./Day2"

// const data=[
//   {
//       session:'الاوله',
//       info:[
//           {name:' عبدالله المصلح',dec:'اإلعجــاز العلمى تعـــريفه وضىابطه وثـمـاره',link:'https://www.youtube.com/embed/BjzZiHk_Oo4?si=GBEa4cs8mmAinIzk',pdf:'/document/Day1/sesion1/Presentation.pdf' },
//           {name:' يحي حسن وزيري',dec:'عدة احلامل احلكمة اإلهلية املعجسة النبوية واحلقيقة العلمية',link:'https://www.youtube.com/embed/BjzZiHk_Oo4?si=GBEa4cs8mmAinIzk',pdf:'/document/Day1/sesion1/presentation2.pdf'},
//           {name:'فوزي رمضان',dec:'توسط مكة املكرمة ليابسة الكرة األرضية',link:'https://www.youtube.com/embed/BjzZiHk_Oo4?si=GBEa4cs8mmAinIzk',pdf:'/document/Day1/sesion1/presentation3.pdf'},
//       ]
//   },
//   {
//       session:'الثانيه',
//       info:[
//           {name:' الدكتور ابراهيم الهدهد',dec:'توسط مكة املكرمة ليابسة الكرة األرضية',link:'https://www.youtube.com/embed/BjzZiHk_Oo4?si=GBEa4cs8mmAinIzk',pdf:'/document/Day1/sesion2/pr2.pdf'},
//           {name:' الدكتور حنفي مدبولي',dec:'اإلعحاز العلمى فى حديث الرباب',link:'https://www.youtube.com/embed/BjzZiHk_Oo4?si=GBEa4cs8mmAinIzk',pdf:'/document/Day1/sesion2/pr2.pdf'},
//           {name:'الدكتور مصطفي ابراهيم',dec:'خلق اإلنسان من ساللة من طني',link:'https://www.youtube.com/embed/BjzZiHk_Oo4?si=GBEa4cs8mmAinIzk',pdf:'/document/Day1/sesion2/pr3.pdf' },
//       ]
//   },
//   {
//       session:'الثالثه',
//       info:[
//           {name:' الدكتور حسن القصبي',dec:'اإلعجـاز البيـاني في السنـة النبـويــــة',link:'https://www.youtube.com/embed/BjzZiHk_Oo4?si=GBEa4cs8mmAinIzk',pdf:'/document/Day1/sesion3/pr1.pdf'},
//           {name:' الدكتور محمد أبراهيم',dec:'إعجـــاز السبــــق النبــــوي في حــديـث ال تغضب',link:'https://www.youtube.com/embed/BjzZiHk_Oo4?si=GBEa4cs8mmAinIzk',pdf:'/document/Day1/sesion3/pr2.pdf'},
//           {name:'الدكتور محمد العجرودي',dec:'االعجاز التشريعي يف قوانني األحوال الشخصية (اخللـع منـوذجـاً)',link:'https://www.youtube.com/embed/BjzZiHk_Oo4?si=GBEa4cs8mmAinIzk',pdf:'/document/Day1/sesion3/pr3.pdf' },
//       ]
//   },
//   // {
//   //     session:'الثانيه',
//   //     doctor:['الدكتور ابراهيم الهدهد' ,' الدكتور مصطفي ابراهيم','الدكتور حنفي مدبولي'],
//   //     desc:'سوف نتكلم عن الدين واهميته',
//   //     link:'https://www.youtube.com/embed/BjzZiHk_Oo4?si=GBEa4cs8mmAinIzk',
//   //     img:'/Images/Screenshot 2024-11-02 122124.png',
//   //     pdf:['/document/sesion1/Presentation.pdf','/document/sesion1/presentation2.pdf','/document/sesion1/Presentation.pdf']
//   // },
//   // {
//   //     session:'الثالثه',
//   //     doctor:['محمد احمد'],
//   //     desc:'سوف نتكلم عن الدين واهميته',
//   //     link:'https://www.youtube.com/embed/BjzZiHk_Oo4?si=GBEa4cs8mmAinIzk',
//   //     img:'/Images/Screenshot 2024-11-02 122124.png',
//   //     pdf:['/document/sesion1/Presentation.pdf','/document/sesion1/presentation2.pdf','/document/sesion1/Presentation.pdf']
//   // },
//   // {
//   //     session:'الرابعه',
//   //     doctor:['محمد احمد'],
//   //     desc:'سوف نتكلم عن الدين واهميته',
//   //     link:'https://www.youtube.com/embed/BjzZiHk_Oo4?si=GBEa4cs8mmAinIzk',
//   //     img:'/Images/Screenshot 2024-11-02 122124.png',
//   //     pdf:['/document/sesion1/Presentation.pdf','/document/sesion1/presentation2.pdf','/document/sesion1/Presentation.pdf']
//   // },
// ]

export default function BtnsHeader() {
    const[day,setDay]=useState(1)
  return (
    <div>
        <div className='flex justify-center items-center gap-5 my-4'>
            <button onClick={()=>setDay(1)} className={`rounded-lg p-2 hover:text-green-800 transition-all duration-300 hover:border-green-800 border-2 border-green-800  ${day===1?'bg-white text-green-800  ':'bg-green-800  text-white  hover:bg-white'} `}>اليوم الاول</button>
            <button onClick={()=>setDay(2)} className={`rounded-lg p-2 hover:text-green-800 transition-all duration-300 hover:border-green-800 border-2 border-green-800 ${day===2?'bg-white text-green-800 border-green-800 border-2 ':'bg-green-800  text-white  hover:bg-white'} `}>اليوم الثاني</button>
        </div>
        {day ===1?
        <div className="">
        <Day1/>
        </div>
        :
        <div>
            <Day2/>
        </div>}
    </div>
  )
}
