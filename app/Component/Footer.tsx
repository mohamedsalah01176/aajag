import { FaFacebook } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";



export default function Footer() {
  return (
        <footer className=" footer text-center bg-green-900 p-10" >
            <div className="flex flex-col gap-7 md:flex-row justify-around  items-center">
                <div className="">
                    <h4 className="text-3xl font-bold mb-4">موقعنا</h4>
                    <i className="fa-solid fa-location-dot fs-4"></i>
                    <a href="https://www.google.com/maps?q=30.0632095336914,31.3769283294678" rel="noopener noreferrer" target="_blank"
                        className=" text-white  hover:text-green-500 transition-all duration-300">
                        مدينة نصر - شارع مصطفى النحاس- خلف مسجد المعصراوي
                        <br />
                        بلوك 17- مدينة الطيران عمارة 4أ-فيلا 2
                    </a>
                </div>
                <div className="">

                    <h4 className="text-3xl font-bold mb-4">تواصل معنا عبر الميديا</h4>
                    <div className="flex gap-3 justify-center">
                        <a className="hover:scale-125 transition-all duration-300 mx-1 text-3xl" rel="noopener noreferrer"
                            href="https://www.facebook.com/profile.php?id=100064457868930&mibextid=ZbWKwL"
                            target="_blank"><FaFacebook/></a>
                        <a className="hover:scale-125 transition-all duration-300 mx-1 text-3xl" rel="noopener noreferrer"
                            href="https://youtube.com/channel/UC_3xz2x7RSjCNkh_6OGahbA?si=8OL0oXbLQln1221s"
                            target="_blank"><FaYoutube/></a>
                        {/* <a className="hover:scale-125 transition-all duration-300 mx-1 text-3xl" href="http://wa.me/+201029870060"
                            target="_blank"><i className="fa-brands fa-whatsapp"></i></a> */}
                        <a className="hover:scale-125 transition-all duration-300 mx-1 text-3xl" href="tel:+201029870060" rel="noopener noreferrer" target="_blank">
                            <FaPhone/>
                        </a>
                    </div>
                </div>
        </div>
    </footer>
  )
}
