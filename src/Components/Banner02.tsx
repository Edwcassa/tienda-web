import { NavLink } from "react-router-dom"

interface props {
   img: string,
   text: string,
   text2: string,
   text3: string,
   text4: string,
   text5: string,
   link: string
}
export default function Banner02({ img, text, text2, text3, text4, text5, link }: props) {
   return (
      <>
         <div className=" relative border-0 border-blue-600 flex justify-center items-center">
            <img className="mx-auto select-none object-cover" src={img} alt="" />
            <div className="absolute flex flex-col text-black">
               <span className="text-center text-5xl font-semibold ">{text}</span>
               <span className="text-center text-2xl mt-8">{text2}</span>
               <span className="text-center text-2xl mt-2">{text3}</span>
               <span className="text-center text-2xl mt-2">{text4}</span>
               <span className="text-center text-2xl mt-2">{text5}</span>
               <NavLink className=" text-center bg-black text-white p-2 mt-7" to={link}>
                  Ver Todos
               </NavLink>
            </div>
         </div>

      </>
   )
}
