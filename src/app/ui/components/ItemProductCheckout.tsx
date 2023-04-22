import React, { useContext, useEffect } from 'react'
import { Product } from '../../api/interfaces/product/product.interface'
import MyContext from '../../../context/MyContext'

interface ItemProductSidebarProps {
  product: Product
  size: string
  quantity: number
  setItemProducts: (arr: any) => void
}

export default function ItemProductCheckout ({ product, size, quantity, setItemProducts }: ItemProductSidebarProps): JSX.Element {
  const { deleteToCart } = useContext(MyContext)

  useEffect(() => {
    setItemProducts(JSON.parse(window.localStorage.getItem('cart_shopping') ?? '[]'))
  }, [deleteToCart])

  return (
    <>
      <div className=' flex justify-center w-full mt-5'>
        <div className='w-7/12'>
          <div className=' h-full flex items-center'>
            <img width={130} src={product.image} alt='' />
            <div className=' pr-10 ml-5'>
              <p className=' font-semibold mb-3'>
                {product.title}
              </p>
              <span>Talla: </span>
              <span className=' font-semibold'>{size}</span>
              <br />
              <span>Color: </span>
              <span className=' font-semibold'>{size}</span>
              <br />
              <br />
              <small className=' font-bold text-gray-700'>H&M Perú</small>
            </div>
          </div>
        </div>
        <div className='w-2/12'>
          <div className=' h-full fcenter '>
            <select defaultValue={quantity} name='quantity' id='quantity' className=' w-20 my-3 border-2 outline-none'>
              <option value='1'>1</option>
              <option value='2'>2</option>
            </select>
          </div>
        </div>
        <div className=' w-2/12'>
          <div className=' h-full fcenter'>
            <span className=' font-bold'>S/ {product.price}</span>
          </div>
        </div>
        <div className=' w-1/12'>
          <div className=' h-full fcenter '>
            <svg onClick={() => deleteToCart(product._id.toString())} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6 cursor-pointer'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}
