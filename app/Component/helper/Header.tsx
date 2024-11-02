interface props{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  title:any,
  color:string,
  background:string,
}
export default function Header({title,background,color}:props) {
  return (
    <div className={color}>
      {title}
        {/* <h2 className='text-center text-[33px] md:text-[45px] font-bold '>{title}</h2> */}
        <div className={`w-[230px] mx-auto h-1 ${background} rounded-md mt-3`}></div>  
    </div>
        )

}
