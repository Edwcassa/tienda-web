import Card from "../../Components/Card";

export default function Mujer() {
   return (
      <>
         <br />
         <br />
         <div className=" mx-10">
         <p className=" text-xl font-semibold mb-3">Mujer</p>
         <span className=" text-sm font-semibold text-white bg-[#ff0058] p-1 rounded">REBAJAS HASTA 60%</span>
         </div>
         <br />
         <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
            {/* <Card
               img="https://i.postimg.cc/Wz193JyT/image.png"
               sub_img="https://i.postimg.cc/Hnn2H1JL/image.png"
               description="Skinny High Jeans"
               price={69.95}
               colors={[
                  { 'name': 'negro', 'code': '#000' },
                  { 'name': 'azul', 'code': '#091c47' },
                  { 'name': 'uva', 'code': '#7f4599' }
               ]}
            /> */}
            <Card
               img="https://static.bershka.net/4/photos2/2022/I/0/1/p/3805/551/427/3805551427_1_1_4.jpg?t=1654594220964"
               sub_img="https://static.bershka.net/4/photos2/2023/V/0/1/p/6712/644/800//02/6712644800_2_1_3.jpg?t=1671720904645"
               description="Skinny High Jeans"
               price={69.95}
               colors={[
                  { 'name': 'negro', 'code': '#000' },
                  { 'name': 'azul', 'code': '#091c47' },
                  { 'name': 'uva', 'code': '#7f4599' }
               ]}
            />
            <Card
               img="https://static.bershka.net/4/photos2/2023/V/0/1/p/6712/644/715/6712644715_1_1_4.jpg?t=1672135852131"
               sub_img="https://static.bershka.net/4/photos2/2023/V/0/1/p/6712/644/800//02/6712644800_2_1_3.jpg?t=1671720904645"
               description="Skinny High Jeans"
               price={69.95}
               colors={[
                  { 'name': 'negro', 'code': '#000' },
                  { 'name': 'azul', 'code': '#091c47' },
                  { 'name': 'uva', 'code': '#7f4599' }
               ]}
            />
            <Card
               img="https://static.bershka.net/4/photos2/2022/I/0/1/p/6945/644/600/6945644600_1_1_4.jpg?t=1663234241272"
               sub_img="https://static.bershka.net/4/photos2/2023/V/0/1/p/6712/644/800//02/6712644800_2_1_3.jpg?t=1671720904645"
               description="Skinny High Jeans"
               price={69.95}
               colors={[
                  { 'name': 'negro', 'code': '#000' },
                  { 'name': 'azul', 'code': '#091c47' },
                  { 'name': 'uva', 'code': '#7f4599' }
               ]}
            />
            <Card
               img="https://static.bershka.net/4/photos2/2022/I/0/1/p/3805/551/401/3805551401_1_1_4.jpg?t=1654594220858"
               sub_img="https://static.bershka.net/4/photos2/2023/V/0/1/p/6712/644/800//02/6712644800_2_1_3.jpg?t=1671720904645"
               description="Skinny High Jeans"
               price={69.95}
               colors={[
                  { 'name': 'negro', 'code': '#000' },
                  { 'name': 'azul', 'code': '#091c47' },
                  { 'name': 'uva', 'code': '#7f4599' }
               ]}
            />
            <Card
               img="https://static.bershka.net/4/photos2/2023/V/0/1/p/6712/644/800/6712644800_1_1_1.jpg?t=1671010907822"
               sub_img="https://static.bershka.net/4/photos2/2023/V/0/1/p/6712/644/800//02/6712644800_2_1_3.jpg?t=1671720904645"
               description="Skinny High Jeans"
               price={69.95}
               colors={[
                  { 'name': 'negro', 'code': '#000' },
                  { 'name': 'azul', 'code': '#091c47' },
                  { 'name': 'uva', 'code': '#7f4599' }
               ]}
            />
         </div>
      </>
   )
}