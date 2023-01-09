import { useState } from "react"

interface props {
   img: string,
   sub_img: string,
   description: string,
   price: number,
   colors: { name: string, code: string }[]
}
export default function Card({ img, sub_img, description, price, colors }: props) {

   const [hover, setHover] = useState(false)
   return (
      <>
         <div className=" borde mb-10 mx-auto">
            <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
               {!hover && <img src={img} alt="" className=" object-cover object-center h-[17rem] sm:h-[20rem] md:h-[25rem] lg:h-[31rem]" />}
               {hover && <img src={sub_img} alt="" className=" object-cover object-center h-[17rem] sm:h-[20rem] md:h-[25rem] lg:h-[31rem]" />}
            </div>
            {/* <div className=" w-96 h-[26rem]">
               {!hover && <img src={img} alt="" className=" object-cover" />}
               {hover && <img src={sub_img} alt="" className=" object-cover" />}
            </div> */}
            <div className=" flex flex-col">
               <span className=" text-sm mt-1">{description}</span>
               <div className=" flex mt-2">
                  <span className=" text-xs font-normal">S/&nbsp;</span>
                  <span className=" font-semibold">{`${price}`}</span>
               </div>
            </div>
            <div className="flex">
               {
                  colors.map((e, i) => (
                     <div
                        title={e.name}
                        style={{ 'backgroundColor': `${e.code}` }} key={i}
                        className={` rounded-full w-3 h-3 mx-1 border`}>
                     </div>
                  ))
               }
            </div>

            

         </div>

         {/* <div className=" mb-10 mx-1 max-w-80 min-w-52 min-h-[34rem]" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <div className=" h-[88%]">
               {!hover && <img src={img} alt="" className=" w-full object-cover h-full" />}
               {hover && <img src={sub_img} alt="" className=" w-full object-cover h-full" />}
            </div> */}
      </>
   )
}
