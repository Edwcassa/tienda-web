import React, { useContext, useEffect, useState } from 'react'
import ItemProductSidebar from '../ItemProductSidebar'
import { Product } from '../../../api/interfaces/product/product.interface'
import MyContext from '../../../../context/MyContext'

export default function Sidebar (): JSX.Element {
  const [itemProducts, setItemProducts] = useState<Product[]>(JSON.parse(window.localStorage.getItem('cart_shopping') ?? '[]'))

  const { showSidebar, closeSidebar, resumeCart, calculateResume } = useContext(MyContext)

  useEffect(() => {
    setItemProducts(JSON.parse(window.localStorage.getItem('cart_shopping') ?? '[]'))
    calculateResume()
  }, [showSidebar, closeSidebar, calculateResume])

  return (
    <div className=' font-Modern'>
      {showSidebar && <button onClick={() => closeSidebar()} className=' z-10 fixed inset-0 bg-black/20 h-screen w-screen cursor-default' />}
      <div className={`fixed z-10 top-0 right-0 bg-gray-000 bg-white h-full w-96 ${showSidebar ? 'w-96' : 'w-0'} transition-all duration-300`}>
        <div onClick={() => closeSidebar()} className=' p-5'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6 hover:bg-gray-100 cursor-pointer'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
          </svg>
        </div>
        <p className=' font-bold text-2xl mb-5 px-5'>Carrito</p>
        <div className='flex flex-col h-full min-w-[24rem] overflow-hidden'>
          <div className='  overflow-y-auto px-5 mb-2'>
            {
              itemProducts.map((item: Product, index: number) => (
                <ItemProductSidebar key={index} product={item} />
              ))
            }
          </div>
          <div className=' flex-shrink-0 h-80 m py-3 px-5 shadow-top block overflow-hidden'>
            <div className=' flex justify-between font-semibold text-md my-2'>
              <span>Subtotal</span>
              <span>S/ {resumeCart.toFixed(2)}</span>
            </div>
            <div className=' flex justify-between font-bold text-xl my-4'>
              <span>Total</span>
              <span>S/ {resumeCart.toFixed(2)}</span>
            </div>
            <p className=' my-5 block'>Simula el costo de envío en el siguiente paso.</p>
            <button className=' button w-full'>
              <span>COMPRAR AHORA</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
