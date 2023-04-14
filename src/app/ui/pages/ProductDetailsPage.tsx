import React, { useContext, useEffect, useState } from 'react'
import ProductUsecase from '../../modules/productUsecase'
import { useParams } from 'react-router-dom'
import { Product } from '../../api/interfaces/product/product.interface'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import MyContext from '../../../context/MyContext'
import Skeleton from '../components/skeleton/Skeleton'

export default function ProductDetailsPage (): JSX.Element {
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const [sizeSelected, setSizeSelected] = useState('')

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [storedValue, setValue] = useLocalStorage('cart_shopping', [])

  const { updateCountCart } = useContext(MyContext)

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
    window.scrollTo(0, 0) // Desplaza el scroll hacia la posición (0, 0) en la página
  }, [])

  useEffect(() => {
    if (idProduct) {
      getProduct(idProduct)
    }
  }, [])

  const handleAddToCart = () => {
    addLocalCart()
  }

  function addLocalCart () {
    try {
      if (product) {
        const item = JSON.parse(localStorage.getItem('cart_shopping') ?? '[]')
        const exist = item.find((e: Product) => e.code === product.code)
        if (!exist) {
          setValue([...item, product])
          console.log('se llama add to cart ')
          updateCountCart()
        }
      }
    } catch (error) {
      setValue([])
    }
  }

  if (loading) {
    return (
      <div className=' fcenter h-[30rem]'>
        <Skeleton />
      </div>
    )
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
          <br />

          <div>
            {product.colors.map((color, index) => (
              <span
                key={index}
                className='rounded-full border border-gray-300 bg-gray-300 inline-block'
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

          <small className=' font-normal mr-2'>Guia de tallas: </small>
          <small>{product.description}</small>

          <br />
          <br />

          <div className='flex items-center'>
            <button onClick={() => handleAddToCart()} className=' button border-2 w-56'>
              Añadir a la cesta
            </button>
            <button className=' bg-gray-400'>
              Add to fav
            </button>

          </div>

        </article>
      </div>
    )
  }

  return <span> </span>
}
