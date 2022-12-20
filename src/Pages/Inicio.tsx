import Modal from "../Components/Modal";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ModalNewsletter from "../Components/inicio/ModalNewsletter";
import ModalEnvios from "../Components/inicio/ModalEnvios";


export default function Inicio() {

   const [modal1, setModal1] = useState(true)
   const [modal2, setModal2] = useState(false)

   return (
      <>
         <div className='flex justify-center my-10'>
            {/* <NavLink className='mx-10' to={'/envios'}>Envios gratis sobre S/190</NavLink> */}
            <button onClick={() => setModal2(true)} className='mx-10'>Envios gratis sobre S/190</button>
            <NavLink className='mx-10' to={'/newsletter'}>Suscríbete a Fashion News</NavLink>
            <NavLink className='mx-10' to={'/devoluciones-de-compras-online'}>Devoluciones sin costo</NavLink>
            {/* <button className='mr-8'>Suscríbete a Fashion News</button>
            <button className='mr-8'>Devoluciones sin costo</button> */}
         </div>

         {
            modal1 &&
            <ModalNewsletter
               setView={setModal1}
            />
         }

         {
            modal2 &&
            <ModalEnvios
               setView={setModal2}
            />
         }


      </>
   )
}
