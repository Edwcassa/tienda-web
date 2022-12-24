import { NavLink } from "react-router-dom"

interface props {
   img: string,
   text: string,
   subtext: string,
   link: string
}
export default function Banner({ img, text, subtext, link }: props) {
   return (
      <>
         <div className=" relative border-0 border-blue-600 flex justify-center h-[680px] mx-auto">
            <img className=" w-full object-cover" src={img} alt="" />
            <div className="absolute bottom-0 flex flex-col text-white">
               <span className=" text-center text-4xl font-semibold ">{text}</span>
               <span className="text-center text-lg my-5 font-semibold">{subtext}</span>
            </div>
         </div>

      </>
   )
}
