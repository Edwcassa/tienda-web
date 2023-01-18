import { Link } from "react-router-dom"

interface props {
   img: string,
   links: { text: string, link: string }[],
   verTodo: string,
   positionLinks: string
}
export default function Banner02({ img, links, verTodo, positionLinks }: props) {
   return (
      <>
         <div className={` flex ${positionLinks} cursor-pointer w-full relative`}>
            <img className=" w-full h-full object-cover" src={img} alt="" />
            <div className="absolute h-full flex flex-col text-black font-Design02">
               <div className=" flex flex-col my-auto px-10 sm:px-20 md:px-28 lg:px-44 ">
                  {
                     links.map((e, i) => (
                        <Link className=" text-center text-md sm:text-[3vw] lg:text-4xl sm:mb-2 md:mb-3 lg:mb-7 hover:underline" to={e.link}>
                           {e.text}
                        </Link>
                     ))
                  }
                  <Link to={verTodo} className=' text-sm mt-2 sm:mt-4 md:mt-6 lg:mt-10 text-center font-Modern font-bold hover:underline'>
                     VER TODOS
                  </Link>
               </div>
            </div>
         </div>

      </>
   )
}
