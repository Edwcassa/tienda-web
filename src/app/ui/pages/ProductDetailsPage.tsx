import React, { useEffect, useState } from 'react'
import ProductUsecase from '../../modules/productUsecase'
import { useParams } from 'react-router-dom'
import { Product } from '../../api/interfaces/product/product.interface'

export default function ProductDetailsPage (): JSX.Element {
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const [sizeSelected, setSizeSelected] = useState('')

  const [heartActive, setHeartActive] = useState(false)

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
                                    ${e === sizeSelected && 'bg-slate-900 text-white'}`}
                    >
                      {e}
                    </span>
                  </label>
                </div>
              ))
            }
          </div>

          <div className='flex items-center'>
            <button className='button w-56'>
              Añadir a la cesta
            </button>

            {/* <button>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' className='w-6 h-6'>
                <path stroke-linecap='round' stroke-linejoin='round' d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z' />
              </svg>
            </button> */}
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
