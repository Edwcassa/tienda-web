import { useState } from 'react'
import { NavLink } from 'react-router-dom'


export default function Navbar() {

   const [links, setLinks] = useState<any>([])
   const [open, setOpen] = useState(false)

   const rutasA = [
      { "name": "Servicio al cliente", "ruta": "/servicio-al-cliente" },
      { "name": "Devoluciones", "ruta": "/devoluciones-de-compras-online" },
      { "name": "Encontrar una tienda", "ruta": "/tiendas" },
   ]

   const rutasB = [
      { "name": "Mujer", "ruta": "/mujer" },
      { "name": "Hombre", "ruta": "/hombre" },
      { "name": "Sale", "ruta": "/sale" },
   ]

   const rutasHombre = [
      {
         nuevosProductos: [
            { "name": "⚡ Novedades", "ruta": "/hombre/novedades" },
            { "name": "🧢 Accesorios", "ruta": "/hombre/accesorios" },
            { "name": "👞 Zapatos", "ruta": "/hombre/zapatos" },
         ],
         compraPorProducto: [
            { "name": "Ver todo", "ruta": "/hombre" },
            { "name": "Polos", "ruta": "/hombre/polos" },
            { "name": "Poleras", "ruta": "/hombre/poleras" },
            { "name": "Pantalones", "ruta": "/hombre/pantalones" },
            { "name": "Camisas", "ruta": "/hombre/camisas" },
            { "name": "Basicos", "ruta": "/hombre/basicos" },
            { "name": "Abrigos y casacas", "ruta": "/hombre/abrigos-y-casacas" },
            { "name": "Jeans", "ruta": "/hombre/jeans" },
            { "name": "Joggers", "ruta": "/hombre/joggers" },
            { "name": "Chompas", "ruta": "/hombre/chompas" },
         ]
      }
   ]

   const rutasMujer = [
      {
         nuevosProductos: [
            { "name": "⚡ Novedades", "ruta": "/mujer/novedades" },
            { "name": "🧢 Accesorios", "ruta": "/mujer/accesorios" },
         ],
         compraPorProducto: [
            { "name": "Ver todo", "ruta": "/mujer" },
            { "name": "Poleras", "ruta": "/mujer/poleras" },
            { "name": "Blazers", "ruta": "/mujer/blazers" },
            { "name": "Polos y tops", "ruta": "/mujer/polos-y-tops" },
            { "name": "Basicos", "ruta": "/mujer/basicos" },
         ]
      }
   ]

   const rutasSale = [
      {
         compraPorProducto: [
            { "name": "Ver Todo", "ruta": "/sale" },
            { "name": "Mujer", "ruta": "/sale/mujer" },
            { "name": "Hombre", "ruta": "/sale/hombre" },
         ]
      }
   ]

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

   return (
      <>
         <div className='flex justify-between mx-20'>
            <div>
               {
                  rutasA.map((item, index) => (
                     <NavLink to={item.ruta} key={index} className='mr-8'>
                        <span>
                           {item.name}
                        </span>
                     </NavLink>
                  ))
               }
            </div>
            <div>
               <button className='mr-8'>Iniciar Sesion</button>
               <NavLink to={'/favoritos'} className='mr-8'>favoritos</NavLink>
               <button>Carrito de compras</button>
            </div>
         </div>

         <img
            className='logo w-20 mx-auto my-8'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/640px-H%26M-Logo.svg.png"
         />

         <button style={{ display: open ? 'block' : 'none' }} tabIndex={-1} onMouseEnter={() => setOpen(false)} onClick={() => setOpen(false)} className=' fixed inset-0 h-full w-full  cursor-default ' />
         <div className='flex justify-center relative'>
            {
               rutasB.map((item, index) => (
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

         {/* <div className='flex justify-center my-5'>
            <button className='mr-8'>Envios gratis sobre S/190</button>
            <button className='mr-8'>Suscríbete a Fashion News</button>
            <button className='mr-8'>Devoluciones sin costo</button>
         </div> */}


      </>
   )
}
