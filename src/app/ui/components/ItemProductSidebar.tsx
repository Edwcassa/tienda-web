import React from 'react'
import { Product } from '../../api/interfaces/product/product.interface'

interface ItemProductSidebarProps {
  product: Product
}

export default function ItemProductSidebar ({ product }: ItemProductSidebarProps): JSX.Element {
  return (
    <div className=' flex mb-8 '>
      <div className='w-4/12'>
        {/* <img src='https://hmperu.vtexassets.com/arquivos/ids/3678704-96-auto' alt='' /> */}
        <img src={product.image} alt='' />
      </div>
      <div className=' w-6/12 pl-2'>
        <p className=' font-semibold my-2'>{product.title}</p>
        <p className=' text-gray-500 font-bold text-sm'>Talla: 34</p>
        <select name='quantity' id='quantity' className=' w-20 my-3 border-2 outline-none'>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          {/* <option value='4'>4</option> */}
        </select>
        <p className=' font-bold mt-5'>S/ {product.price}</p>
      </div>
      <div className=' w-2/12 flex justify-center pt-2'>
        <svg xmlns='http://www.w3.org/2000/svg' className='ionicon w-8 h-8 p-1 box-border hover:bg-gray-100 cursor-pointer' viewBox='0 0 512 512'>
          <path d='M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' />
          <path stroke='currentColor' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='32' d='M80 112h352' />
          <path d='M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' />
        </svg>
      </div>
    </div>
  )
}
