'use client'
import React, { useEffect, useState } from 'react'
import Header from './helper/Header'


export default function ContactUs() {

  const[name,setname]=useState<string>('')
  const[phone,setphone]=useState<string>('')
  const[jop,setjop]=useState<string>('')
  const[country,setcountry]=useState<string>('')
  const[email,setemail]=useState<string>('')
  const[validemail,setValidEmail]=useState<boolean>()
  const[validphone,setValidphone]=useState<boolean>(false)
  const[isDone,setIsDone]=useState<boolean>(false)
  const[sendData,setSendData]=useState<boolean>(false)
  
  const regemail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g
  const regphone=/^01\d{9}$/g

  
  function validation(reg: RegExp,val:string){
    return reg.test(val)
  }
  useEffect(()=>{
    setValidEmail(validation(regemail,email))
    setValidphone(validation(regphone,phone))
  },[email,phone,regemail,regphone])
  const data={
    name,
    phone,
    jop,
    country,
    email
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handelSebmit(e:any){
    e.preventDefault()
    setIsDone(true)
    
    // console.log(data)
    if(name.length>=2 && jop.length >=2 && validphone === true && country.length>=2 &&  validemail === true){
      setSendData(true)
      console.log(data)
    }else{
      setSendData(false)
      
    }
    console.log(validemail)
  }
  return (
    <div id='conectus' className='text-black p-10 text-center'>
      {sendData?
      <div className='fixed top-0 left-0 w-full h-[100vh] bg-black/50'>
        <div className='absolute top-[50%] left-[50%] min-w-[200px] h-[200px] flex items-center flex-col  justify-center translate-x-[-50%] translate-y-[-50%] bg-white rounded-lg p-5'>
          <div className='absolute top-2 right-4 cursor-pointer text-red-700' onClick={()=>setSendData(false)}>X</div>
          <p className='text-xl font-semibold mb-5 '>ارسل لنا البيانات عن طريق الجيميل</p>
          <a className=' bg-green-800 text-white rounded-lg p-3' href={`mailto:Kahledamam@gmail.com?subject= مؤتمر الاعجاز العلمي &body=name:${data.name} %0A phone:${data.phone} %0Ajop:${data.jop} %0Acountry:${data.country} %0Aemail:${data.email}  `}>ارسال البيانات</a>
        </div>
      </div>
      :
      ''
      }

        <Header title={<h2 className='text-center text-[33px] md:text-[45px] font-bold '>تواصل معنا</h2>} color='text-green-800' background='bg-green-800'/>
        <p className='mt-8'>يمكنك التواصل مع الجمعيه والتسجيل في الفورم</p>
        <form  onSubmit={handelSebmit} className='flex flex-col gap-4 max-w-[450px] mx-auto mt-10 ' dir='ltr' >
          <h2 className='text-4xl font-bold'>ملف تسجيل البيانات</h2>
          {sendData=== true && isDone==true?
          <div className='text-white bg-green-800 p-2 rounded-xl'>تم ارسال الايميل &#x2713;</div>
          :''}
          <div className='text-right'>
            <label htmlFor="name">:الاسم</label>
            <br />
            <input type="text" required onChange={(e)=>setname(e.target.value)} id='name' placeholder='محمد ..'  className='p-2 border-b-2 bg-green-800 text-white text-xl md:text-2xl w-full  outline-none rounded-lg'/>
            {name.length <2  && isDone === true?
            <div className=' rounded-xl p-1 text-sm bg-red-500'>
            يجب ان يحتوي الاسم  علي اكثر من حرفين
            </div>
            :
            ''}
          </div>
          <div className='text-right'>
            <label htmlFor="phone">:التليفون</label>
            <br />
            <input type="phone" required  onChange={(e)=>setphone(e.target.value)} id='phone' placeholder='01********* '  className='p-2 border-b-2 bg-green-800 text-white text-xl md:text-2xl w-full  outline-none rounded-lg'/>
            {validphone === false && isDone === true?
              <div className=' rounded-xl p-1 text-sm bg-red-500'>
                01********* يجيب ان يكون رقم الهاتف
            </div>
            :
            ''}
          </div>
          <div className='text-right'>
            <label htmlFor="pass">:المهنه</label>
            <br />
            <input type="text" required  onChange={(e)=>setjop(e.target.value)} id='pass' placeholder='مهنتك'  className='p-2 border-b-2 bg-green-800 text-white text-xl md:text-2xl w-full  outline-none rounded-lg'/>
            {jop.length<2 && isDone === true?
              <div className=' rounded-xl p-1 text-sm bg-red-500'>
                يجب ان يحتوي المهنه علي اكثر من حرفين
            </div>
            :
            ''}
          </div>
          <div className='text-right'>
            <label htmlFor="country">:الدوله</label>
            <br />
            <input type="country" required  onChange={(e)=>setcountry(e.target.value)} id='country' placeholder='مصر'  className='p-2 border-b-2 bg-green-800 text-white text-xl md:text-2xl w-full  outline-none rounded-lg'/>
            {country.length<2 && isDone === true?
              <div className=' rounded-xl p-1 text-sm bg-red-500'>
                يجب ان يحتوي المهنه علي اكثر من حرفين
            </div>
            :
            ''}
          </div>
          <div className='text-right'>
            <label htmlFor="">:البريد الاكتروني</label>
            <br />
            <input type="jop" required  onChange={(e)=>setemail(e.target.value)} id='pass' placeholder='example@example.com'  className='p-2 border-b-2 bg-green-800 text-white text-xl md:text-2xl w-full  outline-none rounded-lg'/>
            {validemail === false && isDone === true?
              <div className=' rounded-xl p-1 text-sm bg-red-500'>
                يجب ان يكون الايميل مثل example@example.com
            </div>
            :
            ''}
          </div>
          <input type="submit" onClick={(e)=>handelSebmit(e)} className='p-1 bg-green-800 rounded-lg text-white w-[150px] mx-auto cursor-pointer hover:bg-white hover:text-green-800 hover:border-green-800  border-2 border-white transition-all duration-300' value={' سجل البيانات'} />
        </form>
    </div>
  )
}
