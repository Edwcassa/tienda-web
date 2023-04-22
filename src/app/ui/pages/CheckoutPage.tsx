import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Product } from '../../api/interfaces/product/product.interface'
import ItemProductCheckout from '../components/ItemProductCheckout'
import ProductUsecase from '../../modules/productUsecase'
import { ProductResponseBody } from '../../api/interfaces/product/product-reponse-body'

export default function CheckoutPage () {
  const navigate = useNavigate()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [itemProducts, setItemProducts] = useState<Product[]>(JSON.parse(window.localStorage.getItem('cart_shopping') ?? '[]'))

  const productIds = itemProducts.map((itemProduct: Product) => itemProduct._id)

  const [productsCheckout, setProductsCheckout] = useState<ProductResponseBody[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError(false)

    const fetchData = async () => {
      try {
        const productDataArray = await Promise.all(productIds.map(async productId => await ProductUsecase.getProduct(productId)))
        setProductsCheckout(productDataArray)
        console.log(productDataArray)
      } catch (error: any) {
        console.error(error)
        setError(error.toString())
      } finally {
        setLoading(false)
      }
    }

    if (productIds.length > 0) {
      fetchData()
    }
  }, [])

  const totalPrice = productsCheckout.reduce((acc, item) => acc + item.product.price, 0)

  return (
    <>
      <div className=' h-28 mx-40 flex justify-start items-center'>
        <img
          onClick={() => navigate('/')}
          className=' w-16 mr-3 md:mr-5 lg:mr-10 sm:w-20 cursor-pointer'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Bershka_logo.svg/1280px-Bershka_logo.svg.png'
        />
      </div>
      <div className=' font-Modern flex flex-col lg:px-40 min-h-[20rem] bg-zinc-100'>
        {
          loading && <p>loading</p>
        }
        {
          error && <p>error</p>
        }
        {
          !loading && !error && productsCheckout && (
            <>
              <Link to='/hombre' className='my-5'>
                <div className=' flex items-center'>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-4 h-4'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
                  </svg>
                  <p className=' text-sm font-semibold '>Continuar comprando</p>
                </div>
              </Link>
              <div className=' flex flex-col lg:flex-row w-full'>
                <div className=' lg:w-8/12 bg-white'>
                  <div className='  h-auto bg-white flex flex-col p-5'>
                    <div className=' flex justify-center w-full h-8 pb-5 border-b-2'>
                      <p className=' w-7/12'>Producto</p>
                      <p className=' w-2/12 text-center'>Cantidad</p>
                      <p className=' w-2/12 text-center'>Precio</p>
                      <p className=' w-1/12' />
                    </div>
                    {
                      productsCheckout.map((product, index) => (
                        <ItemProductCheckout key={index} product={product.product} size='M' quantity={2} setItemProducts={setItemProducts} />
                      ))
                    }
                  </div>
                </div>
                <div className=' mx-10 w-4/12 h-64 p-5 bg-white'>
                  <div className=' flex justify-between'>
                    <span className=' text-sm'>Subtotal</span>
                    <span className=' text-sm'>S/. {totalPrice.toFixed(2)}</span>
                  </div>
                  <hr className=' my-4' />
                  <div className=' flex justify-between'>
                    <span className=' text-xl font-bold'>Total</span>
                    <span className=' text-xl font-bold'>S/. {totalPrice.toFixed(2)}</span>
                  </div>

                  <br />
                  <br />
                  <input className=' mr-5' type='checkbox' name='checkbox' id='checkbox_id' value='value' />
                  <label htmlFor='checkbox_id' className=' text-sm'>
                    He leído y acepto los
                    <a href='http://hola' target='_blank' rel='noopener noreferrer'><b className=' underline mx-1'>Términos y condiciones</b></a>
                    y la
                    <a href='http://hola' target='_blank' rel='noopener noreferrer'><b className=' underline mx-1'>Política de Privacidad</b></a>
                  </label>

                  <br />
                  <br />
                  <button className=' button bg-black w-full'>
                    FINALIZAR COMPRA
                  </button>
                </div>
              </div>
            </>
          )
        }
      </div>

      <div className=' px-44 pt-20 font-Modern font-bold text-gray-800 text-center bg-zinc-100'>
        <hr />
        <br />
        <br />
        <br />
        <small className=' text-xs'>
          El contenido de esta página web está protegido por copyright y es propiedad de Bershka La idea de negocio de Bershka consiste en ofrecer moda y calidad al mejor precio de manera sustentable. Desde que se fundó en 1986, Bershka ha crecido hasta convertirse en una de las principales compañías de moda a nivel nacional.
        </small>
        <br />
        <br />
        <br />
        <div className=' w-full flex justify-center'>
          <img
            onClick={() => navigate('/')}
            className=' w-16 mr-3 md:mr-5 lg:mr-10 sm:w-20 cursor-pointer'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Bershka_logo.svg/1280px-Bershka_logo.svg.png'
          />
        </div>
        <br />
        <br />
      </div>
    </>
  )
}
