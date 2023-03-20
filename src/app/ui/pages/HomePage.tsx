import React from 'react'
import Banner from "../components/banner/Banner";
import Banner02 from "../components/banner/Banner02";


export default function HomePage() {

   return (
      <>
         <h3 className=" font-Design text-center text-2xl font-semibold">Las tendencias del momento</h3>
         <br />

         <div className="  grid grid-cols-1 sm:grid-cols-3 place-items-center px-0 sm:px-2 md:px-5 lg:px-10 gap-1">
            <Banner
               // img="https://static.bershka.net/4/photos2/2018/I/0/2/p/6429/407/742//6429407742_1_1_3.jpg?t=15363483223101"
               // img="https://i.pinimg.com/736x/1d/68/89/1d688954a1026637106e92c10cf268b9.jpg"
               // img="https://www.lavanguardia.com/r/GODO/LV/p5/WebSite/2018/05/04/Recortada/img_jatienza_20180502-172343_imagenes_lv_otras_fuentes_bershka_2299_e-keSF--656x841@LaVanguardia-Web.jpg"
               img="https://static.bershka.net/4/photos2/2023/V/0/2/p/3349/019/811/3349019811_1_1_4.jpg?t=1675933402576"
               text="Hombre"
               subtext="Ir a moda de"
               link="/hombre"
               colorText="#fff"
               
            />
            <Banner
              //  img="https://static.bershka.net/4/photos2/2023/V/0/1/p/3478/851/800/3fb01b0f6671ef5eefd1c85a96812264-3478851800_2_7_0.jpg?cropfixwidth=2052&imwidth=750&impolicy=bershka-crop-fix-width-itxmediumhigh&imformat=chrome"
              //  img="https://i.pinimg.com/originals/17/42/73/17427385489dae999ad078cce6279e15.jpg"
               img="https://static.bershka.net/4/photos2/2023/V/0/2/p/3349/019/811/3349019811_1_1_4.jpg?t=1675933402576"
               text="Mujer"
               subtext="Ir a moda de"
               link="/mujer"
               colorText="#fff"
               
            />
            <Banner
               img="https://static.bershka.net/4/photos2/2023/V/0/2/p/3349/019/811/3349019811_1_1_4.jpg?t=1675933402576"
               text="Mujer"
               subtext="Ir a moda de"
               link="/mujer"
               colorText="#fff"
               
            />
         </div>

         <br />

         <div>
            <Banner02
               img="https://i.postimg.cc/qRRY6jq7/D-slide-man-basics2-1.jpg"
               links={[
                  { "text": "Basicos", "link": "/hombre/basicos" },
                  { "text": "Pantalones", "link": "/hombre/pantalones" },
                  { "text": "Polos", "link": "/hombre/polos" },
                  { "text": "Poleras", "link": "/hombre/poleras" },
                  { "text": "Camisas", "link": "/hombre/camisas" },
               ]}
               verTodo="/hombre"
               positionLinks=" justify-end"
            />
         </div>


      </>
   )
}
