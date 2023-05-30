import React, { useContext, useEffect } from 'react'
import { Product } from '../../api/interfaces/product/product.interface'
import MyContext from '../../../context/MyContext'
import { Color } from '../../api/interfaces/product/color.interface'
import { ProductResponseBody } from '../../api/interfaces/product/product-reponse-body'
import { ItemLocalCart } from '../../api/interfaces/cart/localCart.interface'

interface ItemProductSidebarProps {
  index: number
  product: Product
  size: string
  color: Color | null
  quantity: number
  productsCheckout: ProductResponseBody[]
  setProductsCheckout: (arr: any) => void
  cartProduct: ItemLocalCart
  setCart: (arr: any) => void
}

export default function ItemProductCheckout({ index, product, size, color, quantity, productsCheckout, setProductsCheckout, cartProduct, setCart }: ItemProductSidebarProps): JSX.Element {
  const { deleteToCart, increaseQuantityCart, calculateResume } = useContext(MyContext)

  useEffect(() => {
    setCart(JSON.parse(window.localStorage.getItem('cart_shopping') ?? '[]'))
  }, [deleteToCart])

  function remove() {
    deleteToCart(index)
    const temp = productsCheckout
    temp.splice(index, 1)
    setProductsCheckout(temp)
    console.log(temp)
    console.log(index)
  }

  function onchange(event : any) {
    increaseQuantityCart(cartProduct, parseInt(event.target.value))
    calculateResume()
  }

  return (
    <>
      <div className=' font-Modern flex justify-center w-full my-3'>
        {/* <pre>{JSON.stringify(cartProduct.quantity, undefined, 2)}</pre>
        <pre>{JSON.stringify(cartProduct.color?.colorName, undefined, 2)}</pre> */}
        <div className='w-7/12'>
          <div className=' h-full flex items-center'>
            <img width={100} src={color?.colorImages[0]} alt='' />
            <div className=' pr-10 ml-5'>
              <p className=' font-bold mb-3 text-sm'>
                {product.title}
              </p>
              <small>Talla: </small>
              <small className=''>{size}</small>
              <br />
              <small>Color: </small>
              <small className=''>{color?.colorName}</small>
              <br />
              <br />
              <small className=' font-bold text-gray-700'>Bershka Perú</small>
            </div>
          </div>
        </div>
        <div className='w-2/12'>
          <div className=' h-full fcenter '>
            <select onChange={(event) => onchange(event)} value={quantity} name='quantity' id='quantity' className=' text-sm w-20 my-3 border-2 outline-none'>
              <option value='1'>1</option>
              <option value='2'>2</option>
            </select>
          </div>
        </div>
        <div className=' w-2/12'>
          <div className=' text-sm h-full fcenter'>
            <span className=' font-bold'>S/ {product.price*quantity}</span>
          </div>
        </div>
        <div className=' w-1/12'>
          <div className=' h-full fcenter '>
            <svg onClick={remove} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6 cursor-pointer'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}
