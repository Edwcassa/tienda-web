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


   useEffect(() => {
      if (navMobile) document.body.classList.add('overflow-hidden');
   }, [navMobile])

   const ocultar = () => {
      setNavMobile(false)
      document.body.classList.remove('overflow-hidden')
   }

   const user = { 'name': 'user', 'role': 'regular' }



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

   const mostrar_menu = (link_name: string) => {
      setOpen(true);
      mostrar_links(link_name)
   }

   // movil
   const click = (link_name: string) => {
      mostrar_links(link_name)
      setTemp(link_name)
   }

   return (
      <>
         <div>
            <div className=' flex justify-between items-center font-HM px-16 py-4 shadow fixed w-full top-0 z-10 backdrop-blur-sm bg-white/80'>
               <div className=' flex items-center'>
                  <img
                     className=' w-20 mr-10'
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Bershka_logo.svg/1280px-Bershka_logo.svg.png"
                  />
                  <div>
                     {
                        rutasA.map((e, i) => (
                           <NavLink to={e.ruta} key={i} onClick={() => setNameButton(e.name.toLowerCase())}
                              className={` text-sm px-2 py-1 rounded mx-2 uppercase font-bold ${e.name.toLowerCase() == nameButton ? 'text-white bg-[#ff0058]' : ''}`}>
                              <span>
                                 {e.name}
                              </span>
                           </NavLink>
                        ))
                     }
                  </div>
               </div>

               <div className=' flex'>
                  <button className=' mr-4 flex my-auto items-center md:mr-8'>
                     <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                     </div>
                     <span className=' md:ml-2'>Entrar</span>
                  </button>

                  <NavLink to='/favoritos' className='mr-4 flex my-auto items-center md:mr-8'>
                     <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                     </div>
                     <span className=' md:ml-2 hidden lg:block'>Favoritos</span>
                  </NavLink>

                  <button className=' mr-4 flex my-auto items-center'>
                     <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                     </div>
                     <span className=' md:ml-2 hidden lg:block'>Carrito de compras</span>
                  </button>
                  <button>
                     <div>
                        <svg xmlns="http://www.w3.org/2000/svg" data-e2e="" viewBox="0 0 48 48" fill="currentColor" className=' w-6 h-6'>
                           <path fillRule="evenodd" clipRule="evenodd" d="M24 4C26.2091 4 28 5.79086 28 8C28 10.2091 26.2091 12 24 12C21.7909 12 20 10.2091 20 8C20 5.79086 21.7909 4 24 4ZM24 20C26.2091 20 28 21.7909 28 24C28 26.2091 26.2091 28 24 28C21.7909 28 20 26.2091 20 24C20 21.7909 21.7909 20 24 20ZM24 36C26.2091 36 28 37.7909 28 40C28 42.2091 26.2091 44 24 44C21.7909 44 20 42.2091 20 40C20 37.7909 21.7909 36 24 36Z"></path>
                        </svg>
                     </div>
                  </button>
               </div>
            </div>



            <button style={{ display: open ? 'block' : 'none' }} tabIndex={-1} onMouseEnter={() => setOpen(false)} onClick={() => setOpen(false)} className=' fixed inset-0 h-full w-full  cursor-defaul z-10 ' />

            {/* en version movil */}
            {/* <div style={{ display: navMobile ? 'block' : 'none' }} className=' overflow-auto fixed w-full h-full inset-0 p-5 bg-white z-10 md:hidden'>
               <button onClick={() => { setNavMobile(false); setTemp(''); ocultar() }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
               </button>
               <img
                  className='logo w-16 mx-auto mb-7'
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/640px-H%26M-Logo.svg.png"
               />
               <div className=' flex flex-col ml-1 mt-3'>
                  {
                     rutasB.map((item, index) => (
                        <div key={index}>
                           <button onClick={() => click(item.name)} className=' rounded bg-gray-300 w-full flex justify-between items-center px-3 py-2 mb-1'>
                              <span className=' text-xl uppercase'>
                                 {item.name}
                              </span>
                              <span>
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                 </svg>
                              </span>
                           </button>
                           <div className={`${temp == item.name ? 'block' : 'hidden'} px-3`}>
                              {
                                 links &&
                                 links.map((e: any, i: number) => (
                                    <div key={i}>
                                       {
                                          e.nuevosProductos && (
                                             <div>
                                                {
                                                   e.nuevosProductos.map((e: any, i: number) => (
                                                      <Link key={i} className=' block my-3 text-lg' to={e.ruta}>{e.name}</Link>
                                                   ))
                                                }
                                             </div>
                                          )
                                       }
                                       {e.nuevosProductos && <hr />}
                                       {
                                          e.compraPorProducto && (
                                             <div>
                                                {
                                                   e.compraPorProducto.map((e: any, i: number) => (
                                                      <Link key={i} className=' block my-3 text-lg' to={e.ruta}>{e.name}</Link>
                                                   ))
                                                }
                                             </div>
                                          )
                                       }
                                    </div>
                                 ))
                              }
                           </div>
                        </div>
                     ))
                  }
               </div>
            </div> */}

            {/* en version desktop */}
            <div className=' hidden md:block mt-20'>
               <div className='flex justify-center relative'>
                  {
                     rutasAyuda.map((item, index) => (
                        <NavLink onMouseEnter={() => mostrar_menu(item.name)} to={item.ruta} key={index} className='mx-6 z-20 font-semibold hover:underline'>
                           <span>
                              {item.name}
                           </span>
                        </NavLink>
                        // <button onMouseEnter={() => mostrar_menu(item.name)} className='px-6 font-semibold hover:underline z-10'>
                        //    {item.name}
                        // </button>
                     ))
                  }

                  {
                     open &&
                     <div className=' border-b-4 border-slate-600 bg-white absolute min-w-[50%] mt-4 py-10 z-10'>
                        {
                           links.map((item: any, index: any) => (
                              <div className='flex justify-center' key={index}>
                                 {
                                    item.nuevosProductos && (
                                       <div className='flex flex-col mx-5'>
                                          <span className=' font-bold mb-3'>Nuevos Productos</span>
                                          {
                                             item.nuevosProductos.map((e: any, i: any) => (
                                                <NavLink className=' mb-1 hover:underline' to={e.ruta} key={i}>
                                                   {e.name}
                                                </NavLink>
                                             ))
                                          }
                                       </div>
                                    )
                                 }
                                 <div className='flex flex-col mx-5'>
                                    <span className=' font-bold mb-3'>Compra por producto</span>
                                    {
                                       item.compraPorProducto?.map((e: any, i: any) => (
                                          <NavLink className=' mb-1 hover:underline' to={e.ruta} key={i}>
                                             {e.name}
                                          </NavLink>
                                       ))
                                    }
                                 </div>
                              </div>
                           ))
                        }
                     </div>
                  }
               </div>
            </div>
         </div>

         {/* <div className='flex justify-center my-5'>
            <button className='mr-8'>Envios gratis sobre S/190</button>
            <button className='mr-8'>Suscríbete a Fashion News</button>
            <button className='mr-8'>Devoluciones sin costo</button>
         </div> */}


      </>
   )
}
