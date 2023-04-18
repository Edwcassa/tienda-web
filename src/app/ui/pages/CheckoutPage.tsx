import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Product } from '../../api/interfaces/product/product.interface'
import ItemProductCheckout from '../components/ItemProductCheckout'

export default function CheckoutPage () {
  const navigate = useNavigate()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [itemProducts, setItemProducts] = useState<Product[]>(JSON.parse(window.localStorage.getItem('cart_shopping') ?? '[]'))

  return (
    <>
      <div className=' h-28 mx-40 flex justify-start items-center'>
        <img
          onClick={() => navigate('/')}
          className=' w-16 mr-3 md:mr-5 lg:mr-10 sm:w-20 cursor-pointer'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Bershka_logo.svg/1280px-Bershka_logo.svg.png'
        />
      </div>
      <hr />
      <div className=' px-10 bordeB bg-zinc-100 flex pt-10 font-Modern flex-col bordeC lg:px-40 lg:flex-row'>
        <div className='  h-auto bg-white flex flex-col bordeA p-5 w-full lg:w-8/12'>
          <div className=' flex justify-center w-full h-8 pb-5 border-b-2'>
            <p className=' w-7/12'>Producto</p>
            <p className=' w-2/12 text-center'>Cantidad</p>
            <p className=' w-2/12 text-center'>Precio</p>
            <p className=' w-1/12' />
          </div>
          {
            itemProducts.map((product, index) => (
              <ItemProductCheckout key={index} product={product} size='M' quantity={2} setItemProducts={setItemProducts} />
            ))
          }

        </div>
        <div className=' mx-10 w-4/12 h-52 bg-white'>
          subtotal
        </div>
      </div>
    </>
  )
}
