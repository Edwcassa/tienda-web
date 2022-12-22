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
         <div className=" relative border-0 border-blue-600 flex justify-center">
            <img className="mx-auto" src={img} alt="" />
            <div className="absolute bottom-10 flex flex-col text-white">
               <span className=" text-center text-4xl font-semibold ">{text}</span>
               <span className="text-center text-lg my-5 font-semibold">{subtext}</span>
               <NavLink className=" text-center text-black bg-white p-2" to={link}>
                  Comprar ahora
               </NavLink>
            </div>
         </div>

      </>
   )
}
