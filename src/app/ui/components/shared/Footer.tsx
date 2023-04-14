import React from 'react'

export default function Footer () {
  return (
    <>
      <div className=' px-16 py-16 bg-gray-200'>
        <div className='grid grid-cols-3'>
          <div className=' mx-auto'>
            <span className=' font-semibold'>INFORMACIÓN CORPORATIVA</span>
            <div className='flex flex-col text-sm'>
              <br />
              <span className=' mb-2'>Acerca del grupo H&M</span>
              <span className=' mb-2'>Política empresarial</span>
            </div>
          </div>
          <div className=' mx-auto'>
            <span className=' font-semibold'>AYUDA</span>
            <div className='flex flex-col text-sm'>
              <br />
              <span className=' mb-2'>Servicio al cliente</span>
              <span className=' mb-2'>Mi cuenta</span>
              <span className=' mb-2'>Nuestras tiendas</span>
              <span className=' mb-2'>Términos y condiciones</span>
            </div>
          </div>
          <div className=' mx-auto'>
            <span className=' font-semibold'>REDES SOCIALES</span>
            <div className='flex flex-col text-sm'>
              <br />
              <span className=' mb-2'>Facebook</span>
              <span className=' mb-2'>Instagram</span>
            </div>
          </div>
        </div>

        <br />
        <br />
        {/* <div className=' mx-52 text-center text-sm'>
          El contenido de esta página web está protegido por copyright y es propiedad de H&M Hennes & Mauritz AB. La idea de negocio de H&M consiste en ofrecer moda y calidad al mejor precio de manera sustentable. Desde que se fundó en 1947, H&M ha crecido hasta convertirse en una de las principales compañías de moda a nivel mundial.
          <br />
          <br />
          <br />
          <span className=' block'>Perú | S/.</span>
        </div> */}
      </div>
    </>
  )
}
