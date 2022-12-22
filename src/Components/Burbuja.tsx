interface props {
   img: string,
   text: string,
   subtext: string
}
export default function Bubble({ img, text, subtext }: props) {
   return (
      <>
         <div className=" w-32 mx-10">
            <img className=" rounded-full mx-auto" src={img} alt="" />
            <div className="flex flex-col">
               <span className=" text-center text-sm font-semibold text-gray-700">{text}</span>
               <span className=" text-center text-sm font-semibold">{subtext}</span>
            </div>
         </div>
      </>
   )
}
