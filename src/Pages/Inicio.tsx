import { useState } from "react";
import { NavLink } from "react-router-dom";
import ModalNewsletter from "../Components/inicio/ModalNewsletter";
import ModalEnvios from "../Components/inicio/ModalEnvios";
import Bubble from "../Components/Burbuja";
import Banner from "../Components/Banner";
import Banner02 from "../Components/Banner02";
import Modal from "../Components/Modal";


export default function Inicio() {

   const [modal1, setModal1] = useState(true)
   const [modal2, setModal2] = useState(false)

   const tendencias = [
      {
         img: 'https://i.ibb.co/Fq1ZbbB/basico03.webp',
         text: 'Hombre',
         subtext: 'Polos desde S/25'
      },
      {
         img: 'https://i.ibb.co/Fq1ZbbB/basico01.webp',
         text: 'Hombre',
         subtext: 'Polos desde S/25'
      },
      {
         img: 'https://i.ibb.co/Fq1ZbbB/basico01.webp',
         text: 'Hombre',
         subtext: 'Polos desde S/25'
      },
      {
         img: 'https://i.ibb.co/pyS28TJ/basico01.webp',
         text: 'Hombre',
         subtext: 'Polos desde S/25'
      }
   ]

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
               view={modal1}
               setView={setModal1}
            />
         }

         {
            modal2 &&
            <ModalEnvios
               view={modal2}
               setView={setModal2}
            />
         }

         <br />
         <h3 className=" text-center text-2xl font-semibold">Las tendencias del momento</h3>
         <br /><br />

         <div className="flex justify-center">
            {
               tendencias.map((e, i) => (
                  <Bubble key={i}
                     img={e.img}
                     text={e.text}
                     subtext={e.subtext}
                  />
               ))
            }
         </div>

         <br />
         <br />
         <br />
         <br />

         <div className=" w-5/6 mx-auto grid grid-cols-2 bord gap-1">
            <Banner
               img="https://hmperu.vtexassets.com/assets/vtex.file-manager-graphql/images/7eaf901d-3eda-484b-9b97-c7956719a6f7___565628cf959a7d8ec1feb656c92efa2c.webp"
               text="Disfruta del verano ☀️"
               subtext="Ropa de baño desde S/39.95."
               link="/"
            />
            <Banner
               img="https://hmperu.vtexassets.com/assets/vtex.file-manager-graphql/images/7eaf901d-3eda-484b-9b97-c7956719a6f7___565628cf959a7d8ec1feb656c92efa2c.webp"
               // img="https://hmperu.vtexassets.com/assets/vtex.file-manager-graphql/images/07943aeb-9f4f-4b89-ba9f-21e0676671c2___c403c7fd04c1bf1b1cca93e595371f8d.webp"
               text="Disfruta del verano ☀️"
               subtext="Ropa de baño desde S/39.95."
               link="/"
            />
         </div>

         <br />

         <div className=" w-5/6 mx-auto">
            <Banner
               img="https://hmperu.vtexassets.com/assets/vtex.file-manager-graphql/images/6bda5577-97ca-4509-802f-04a6f2e21430___bf12805e20dcd640cc9f11313d672dfb.webp"
               // img="https://hmperu.vtexassets.com/assets/vtex.file-manager-graphql/images/07943aeb-9f4f-4b89-ba9f-21e0676671c2___c403c7fd04c1bf1b1cca93e595371f8d.webp"
               text="Disfruta del verano ☀️"
               subtext="Ropa de baño desde S/39.95."
               link="/"
            />
         </div>

         <br />

         <div className=" w-5/6 mx-auto">
            <Banner
               img="https://hmperu.vtexassets.com/assets/vtex.file-manager-graphql/images/fe0c0e92-4a97-4960-84ec-5b277a516ff1___23a84db185993be9e2aef892ce50fd08.webp"
               text="Disfruta del verano ☀️"
               subtext="Ropa de baño desde S/39.95."
               link="/"
            />
         </div>

         <br />

         <div className=" w-5/6 mx-auto h-[800px] overflow-hidden bordeA flex items-center justify-center">
            <Banner02
               img="https://static.bershka.net/4/static/images/home/2022/slidesHTML/basics-botonera/assets/M_slide_man_basics_-1.jpg?t=20221214164500"
               text="Básicos"
               text2="Polos"
               text3="Poleras"
               text4="Jeans"
               text5="Pantalones"
               link="/"
            />
         </div>


      </>
   )
}
