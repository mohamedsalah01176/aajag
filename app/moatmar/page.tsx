import Header from '../Component/helper/Header'
import BtnsHeader from '../Component/moatmar/BtnsHeader'

export default function page() {
  return (
    <div className='my-7'>
        <Header title={<h1 className='text-center text-[33px] md:text-[45px] font-bold '>مؤتمرات الاعجاز العلمي</h1>} color='text-green-800' background='bg-green-800'/>
        <BtnsHeader/>
    </div>
  )
}
