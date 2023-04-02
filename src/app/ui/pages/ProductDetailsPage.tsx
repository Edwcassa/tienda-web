import React, { useEffect, useState } from 'react'
import ProductUsecase from '../../modules/productUsecase'
import { useParams } from 'react-router-dom'
import { Product } from '../../api/interfaces/product/product.interface'

interface ProductDetailsPageProps {
  addToCart: () => void
}

export default function ProductDetailsPage ({ addToCart }: ProductDetailsPageProps): JSX.Element {
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const [sizeSelected, setSizeSelected] = useState('')

  const [heartActive, setHeartActive] = useState(false)

  const [localCartShopping, setLocalCartShopping] = useState<Product[]>(() => {
    const cartShopping = window.localStorage.getItem('cart_shopping')
    if (cartShopping) {
      return JSON.parse(cartShopping)
    }
    return []
  })

  const { idProduct } = useParams()

  const getProduct = async (idProduct: string) => {
    try {
      setLoading(true)
      const response = await ProductUsecase.getProduct(idProduct)
      setProduct(response.product)
    } catch (error: any) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (idProduct) {
      getProduct(idProduct)
    }
  }, [])

  const handleAddToCart = () => {
    addLocalCart()
  }

  const addLocalCart = () => {
    if (product) {
      if (window.localStorage.getItem('cart_shopping') === null) {
        window.localStorage.setItem('cart_shopping', '[]')
        setLocalCartShopping(prev => [])
      }

      setLocalCartShopping(prevCartShopping => {
        const exist = prevCartShopping.find((e: Product) => e.code === product.code)
        if (!exist) {
          const updatedCart = prevCartShopping.concat(product)
          window.localStorage.setItem('cart_shopping', JSON.stringify(updatedCart))
          return updatedCart
        } else {
          return prevCartShopping
        }
      })

      const exist = localCartShopping.find((e: Product) => e.code === product.code)
      if (!exist) {
        addToCart()
      }
    }
  }

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error</p>
  }

  if (product) {
    return (
      <div className='flex'>
        <div className='w-[50%]'>
          <img src={product.image} alt={product.title} className='w-full h-[80%] object-cover' />
        </div>
        <article className='w-[50%] p-10 font-Modern'>
          <p className=' font-semibold text-3xl mb-2'>{product.title}</p>
          <small className=' text-gray-500'>Ref {product.code}</small>
          <p className='font-bold text-lg mt-2'>S/ {product.price}</p>
          {/* <p>{product.description}</p> */}

          <div>
            {product.colors.map((color, index) => (
              // <span
              //   key={index}
              //   className='w-6 h-6 rounded-full border border-gray-300 bg-gray-300 inline-block ml-2'
              //   // style={{ backgroundColor: color.hex }}

              // ></span>
              <span
                key={index}
                className='rounded-full border border-gray-300 bg-gray-300 inline-block ml-2'
              >
                {color.colorName}
              </span>
            )
            )}
          </div>

          <p className=' text-sm font-semibold my-5'>Selecciona talla</p>

          <div className='flex flex-row mb-3'>
            {
              product.sizes.map((e, i) => (
                <div className='form-check w-16' key={i}>
                  <input
                    className='form-check-input hidden' id={`radio${i}`} type='radio' name='img'
                    value={e}
                    onChange={(e) => setSizeSelected(e.target.value)}
                    checked={sizeSelected === e}
                  />
                  <label className='form-check-label' htmlFor={`radio${i}`}>
                    <span
                      className={`w-12 h-12 grid place-content-center rounded-full border-[1px] cursor-pointer
                                  border-gray-400 hover:border-gray-600
                                    ${e === sizeSelected && 'bg-gray-100 text-black'}`}
                    >
                      {e}
                    </span>
                  </label>
                </div>
              ))
            }
          </div>

          <small className=' font-normal mr-2'>Guia de tallas</small>
          <small>{product.description}</small>

          <div className='flex items-center'>
            <button className='button w-56' onClick={() => handleAddToCart()}>
              Añadir a la cesta
            </button>
            <div className='heart-btn'>
              <div
                className={`content ${heartActive ? 'heart-active' : ''}`}
                onClick={() => setHeartActive(!heartActive)}
              >
                <span className={`heart ${heartActive ? 'heart-active' : ''}`} />
              </div>
            </div>

          </div>

        </article>
      </div>
    )
  }

  return <span> </span>
}
