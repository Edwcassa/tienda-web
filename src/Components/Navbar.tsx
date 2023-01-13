import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { rutasA, rutasHombre, rutasMujer, rutasSale, rutasAyuda } from '../json/rutas.js'


export default function Navbar() {

   const [links, setLinks] = useState<any>([])
   const [open, setOpen] = useState(false)
   const [navMobile, setNavMobile] = useState(false)
   const [temp, setTemp] = useState('')

   // Para verificar en que boton genero nos encontramos
   const location = useLocation();
   var generoRutaActual = location.pathname.split('/')[1]
   const [nameButton, setNameButton] = useState(generoRutaActual)

   // Existe un usuario
   // const user = { 'name': 'user', 'role': 'regular' }
   const user = null

   // mostrar menu mas
   const [showMenu, setShowMenu] = useState(false)


   const mostrar_links = (link_name: string) => {
      if (link_name === 'Hombre') {
         setLinks(rutasHombre)
         return;
      } if (link_name === 'Mujer') {
         setLinks(rutasMujer)
         return;
      } if (link_name === 'Sale') {
         setLinks(rutasSale)
         return;
      }
   }

   return (
      <>
         <div className=' fixed w-full top-0 z-10 backdrop-blur-sm bg-white/80 shadow '>
            <div className=' flex justify-between items-center font-HM px-2 py-3 sm:px-10 md:px-16 '>
               <div className=' flex items-center'>
                  <img
                     className=' w-16 mr-3 md:mr-10 sm:w-20'
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Bershka_logo.svg/1280px-Bershka_logo.svg.png"
                  />
                  <div>
                     {
                        rutasA.map((e, i) => (
                           <NavLink to={e.ruta} key={i} onClick={() => setNameButton(e.name.toLowerCase())}
                              className={` text-xs px-2 py-1 rounded sm:mx-2 sm:text-sm uppercase font-bold ${e.name.toLowerCase() == nameButton ? 'text-white bg-[#ff0058]' : ''}`}>
                              <span>
                                 {e.name}
                              </span>
                           </NavLink>
                        ))
                     }
                  </div>
               </div>

               {/* entrar favoritos bolsa */}
               <div className=' flex items-center'>
                  <div className='hidden relative sm:block'>
                     <div className=' flex'>
                        <button className=' px-2 py-1 rounded mr-4 flex my-auto items-center hover:bg-gray-100 '>
                           <div>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-6 h-6">
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                              </svg>
                           </div>
                           <span className=' md:ml-2'>Entrar</span>
                        </button>

                        <NavLink to='/favoritos' className=' px-2 py-1 rounded mr-4 flex my-auto items-center hover:underline'>
                           <div>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                              </svg>
                           </div>
                           <span className=' md:ml-2 hidden lg:block'>Favoritos</span>
                        </NavLink>
                     </div>
                  </div>

                  <div className="relative">
                     <button onClick={()=>setShowMenu(true)} className=' flex items-center px-2 py-1 rounded my-auto hover:bg-gray-100'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                     </button>
                     {showMenu && <button onClick={() => setShowMenu(false)} className=' fixed inset-0 bg-black/10 h-screen w-screen'></button>}
                     {showMenu &&
                        <div className=' absolute right-0 mt-4 w-52 bg-white'>
                           <button className=' flex items-center w-full py-3 px-3 hover:bg-slate-500'>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                              </svg>
                              Ayuda
                           </button>
                           <button className=' flex items-center w-full py-3 px-3 hover:bg-slate-500'>
                              <div>
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                 </svg>
                              </div>
                              Cerrar Sesion
                           </button>
                        </div>
                     }
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
