import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ItemProductCheckout from '../components/ItemProductCheckout'
import ProductUsecase from '../../modules/productUsecase'
import { ProductResponseBody } from '../../api/interfaces/product/product-reponse-body'
import { ItemLocalCart } from '../../api/interfaces/cart/localCart.interface'

export default function CheckoutPage () {
  const navigate = useNavigate()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cart, setCart] = useState<ItemLocalCart[]>(JSON.parse(window.localStorage.getItem('cart_shopping') ?? '[]'))

  const productIds = cart.map((itemProduct: ItemLocalCart) => itemProduct._id)

  const [productsCheckout, setProductsCheckout] = useState<ProductResponseBody[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const [step, setStep] = useState('products')

  useEffect(() => {
    setLoading(true)
    setError(false)

    const fetchData = async () => {
      try {
        const productDataArray = await Promise.all(productIds.map(async productId => await ProductUsecase.getProduct(productId)))
        setProductsCheckout(productDataArray)
        // console.log(productDataArray)
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

  function calculateResume (): number {
    let sum = 0
    cart.forEach(prodLocal => {
      const prod = productsCheckout.find(e => e.product._id === prodLocal._id)
      if (prod) {
        sum = sum + (prod.product.price) * prodLocal.quantity
      }
    })

    return sum
  }

  useEffect(() => {
    calculateResume()
  }, [productsCheckout, cart])

  // console.log("los prod: ", productsCheckout)
  // console.log("el cart: ", cart)

  return (
    <>
      <div className=' h-28 mx-40 flex justify-start items-center bordeC'>
        <img
          onClick={() => navigate('/')}
          className=' w-16 mr-3 md:mr-5 lg:mr-10 sm:w-20 cursor-pointer'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Bershka_logo.svg/1280px-Bershka_logo.svg.png'
        />
      </div>

      <div className=' font-Modern lg:px-40 min-h-[30rem] bg-zinc-100 bordeA py-5'>
        {
          step === 'products' && (
            <div>
              {
                loading && <p>loading</p>
              }
              {
                error && <p>error</p>
              }
              {
                !loading && !error && productsCheckout && (
                  <>
                    <Link to='/hombre' />
                    <div className=' flex flex-col h-56 lg:flex-row w-full'>
                      <div className=' lg:w-8/12 bg-white h-auto'>
                        <div className='  bg-white flex p-3 flex-col'>
                          <div className=' flex justify-center w-full py-2 border-b-2 font-semibold text-[0.95rem]'>
                            <p className=' w-7/12'>Producto</p>
                            <p className=' w-2/12 text-center'>Cantidad</p>
                            <p className=' w-2/12 text-center'>Precio</p>
                            <p className=' w-1/12' />
                          </div>
                          {
                            productsCheckout.map((product, index) => (
                              <ItemProductCheckout
                                key={index}
                                index={index}
                                product={product.product}
                                size={cart[index].size}
                                color={cart[index].color}
                                quantity={cart[index].quantity}
                                productsCheckout={productsCheckout}
                                setProductsCheckout={setProductsCheckout}
                                cartProduct={cart[index]}
                                setCart={setCart}
                              />
                            ))
                          }
                        </div>
                      </div>
                      <div className=' mx-10 w-4/12 h-64 p-5 bg-white'>
                        <div className=' flex justify-between'>
                          <span className=' text-sm'>Subtotal</span>
                          <span className=' text-sm'>S/. {calculateResume()}</span>
                        </div>
                        <hr className=' my-4' />
                        <div className=' flex justify-between'>
                          <span className=' text-xl font-bold'>Total</span>
                          <span className=' text-xl font-bold'>S/. {calculateResume()}</span>
                        </div>

                        <br />
                        <br />
                        <input className=' mr-5' type='checkbox' name='checkbox' id='checkbox_id' value='value' />
                        <label htmlFor='checkbox_id' className=' text-sm'>
                          He leído y acepto los
                          <a href='http://hola' target='_blank' rel='noopener noreferrer'><b className=' underline mx-1'>Términos y condiciones</b></a>
                        </label>

                        <br />
                        <br />
                        <button onClick={() => setStep('profile')} className=' button bg-black w-full'>
                          SIGUIENTE
                        </button>
                      </div>
                    </div>
                  </>
                )
              }
            </div>
          )
        }

        {
          step === 'profile' && (
            <>
              <div className=' flex'>
                <div className=' form_container'>
                  <div className='flex items-center'>
                    <div className=' bg-slate-300 w-9 h-9 rounded-full fcenter mr-3'>
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z' />
                      </svg>
                    </div>
                    <div className=' text-2xl my-5'>
                      Información del cliente
                    </div>
                  </div>

                  <div className='flex flex-col form'>
                    <main className='flex'>
                      <div>
                        <label htmlFor='nombre'>Nombre</label>
                        <input type='text' id='nombre' />
                      </div>

                      <div>
                        <label htmlFor='apellido'>Apellido</label>
                        <input type='text' id='apellido' />
                      </div>
                    </main>

                    <main className='flex'>
                      <div>
                        <label htmlFor='dni'>Dni</label>
                        <input type='text' id='dni' />
                      </div>

                      <div>
                        <label htmlFor='telefono'>Celular</label>
                        <input type='text' id='telefono' />
                      </div>
                    </main>

                    <div>
                      <label htmlFor='info'>Informacion Adicional</label>
                      <input type='text' id='info' />
                    </div>

                  </div>

                  <div className='flex items-center mt-10 mb-5'>
                    <div className=' bg-slate-300 w-9 h-9 rounded-full fcenter mr-3'>
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75' />
                      </svg>
                    </div>
                    <div className=' text-2xl'>
                      Información de contacto
                    </div>
                  </div>

                  <div className='form'>
                    <div>
                      <label htmlFor='email' className=' flex items-center'>Email
                        <span className=' ml-2 text-black text-xs'>(Se le enviara una boleta de confirmacion)</span>
                      </label>
                      <input type='text' id='email' autoComplete='off' />
                    </div>
                  </div>

                  <div className='flex items-center mt-10 mb-5'>
                    <div className=' bg-slate-300 w-9 h-9 rounded-full fcenter mr-3'>
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z' />
                      </svg>
                    </div>
                    <div className=' text-2xl'>
                      Datos del responsable de compra
                    </div>
                  </div>

                  <div className='form'>
                    <main className='flex'>
                      <div>
                        <label htmlFor='nombre_yape'>Nombre</label>
                        <input type='text' id='nombre_yape' />
                      </div>
                      <div>
                        <label htmlFor='apellido_yape'>Apellido</label>
                        <input type='text' id='apellido_yape' />
                      </div>
                    </main>

                    <main className='flex'>
                      <div>
                        <label htmlFor='celular_yape'>Celular</label>
                        <input type='text' id='nombre_yape' />
                      </div>
                      <div>
                        <span>Método de pago</span>
                        <div className=' select '>
                          <img className=' rounded-md mr-1' width={30} src='/src/assets/yape.svg' alt='' />
                          <select name='' id='metodo_pago_yape' className=' w-100'>
                            <option value='yape' className='option '>
                              Yape
                            </option>
                          </select>
                        </div>
                      </div>
                    </main>
                  </div>
                </div>

                <div className=' resume_container mx-16 mt-7'>
                  <div className=' bg-white px-2'>
                    <p className=' py-3 text-2xl font-semibold'>Resumen</p>
                    <div className=' overflow-auto pl-2'>
                      {
                        productsCheckout.map((product, index) => (
                          <div key={index} className=' flex pb-2'>
                            <div className=' relative'>
                              <img width={50} className=' h-full object-cover' src={cart[index].color?.colorImages[0]} alt='' />
                              <small className=' absolute top-0 -left-2 rounded-full border-[1px] border-gray-300 bg-white w-4 h-4 text-center'>{cart[index].quantity}</small>
                            </div>
                            <div className=' w-full mx-3'>
                              <p className=' text-sm font-semibold mb-2'>{product.product.title}</p>
                              <div className=' flex justify-between'>
                                <span className=' text-xs'>{cart[index].size}</span>
                                <p className=' text-sm font-Design'>S/ {product.product.price * cart[index].quantity}</p>
                              </div>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  </div>

                  <div className=' flex justify-between mt-3 '>
                    <button onClick={() => setStep('products')} className=' button bg-slate-600'>
                      Anterior
                    </button>

                    <button className=' button'>
                      Pagar
                    </button>
                  </div>
                </div>

              </div>

            </>
          )
        }

        {
          step === 'congratulations' && (
            <div>ok</div>
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
