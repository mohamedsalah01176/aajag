import Aboute from "./Component/Aboute";
import Activites from "./Component/Activites";
import ContactUs from "./Component/ContactUs";
import Templat from "./Component/helper/Templat";
import Section1 from "./Component/Section1";
import { FaWhatsapp } from "react-icons/fa";


export default function Home() {
  return (
   <section className="">
    <a href="http://wa.me/+201029870060" rel="noopener noreferrer" target="_blank" className="bg-[#ccc] p-3 rounded-full text-[35px] hover:scale-110 transition-all duration-300 fixed bottom-5 left-8 text-green-900"><FaWhatsapp/></a>
    <Section1/>
    <Aboute/>
    <Activites/>
    <Templat id="kwam" color={'text-green-800'} background={'bg-white'} colorOpp={'text-white'} backgroundOpp={'bg-green-800'} title={<h1 className='text-center text-[33px] md:text-[45px] font-bold '>مؤتمر الاعجاز العلمي</h1>} link={'moatmar'} des="هذذا هوتمر الاعجاز العلمي  " />
    <Templat id="mrayat" color={'text-white'} background={'bg-green-800'} colorOpp={'text-green-800'} backgroundOpp={'bg-white'} title={<h2 className='text-center text-[33px] md:text-[45px] font-bold '>المرئيات</h2>} link={'#'} des="هذذا هوتمر الاعجاز العلمي  "/>
    <Templat id="mltka" color={'text-green-800'} background={'bg-white'} colorOpp={'text-white'} backgroundOpp={'bg-green-800'} title={<h2 className='text-center text-[33px] md:text-[45px] font-bold '>الاصدارات و المطبوعات</h2>} link={'#'} des="هذذا هوتمر الاعجاز العلمي  "/>
    <Templat id="" color={'text-white'} background={'bg-green-800'} colorOpp={'text-green-800'} backgroundOpp={'bg-white'} title={<h2 className='text-center text-[33px] md:text-[45px] font-bold '>الملتقيات و ورش العمل</h2>} link={'#'} des="هذذا هوتمر الاعجاز العلمي  "/>
    <ContactUs/>
   </section>
  ); 
}
