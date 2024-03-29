import React, { useContext, useEffect, useState } from 'react'
import ItemProductSidebar from '../ItemProductSidebar'
import MyContext from '../../../../context/MyContext'
import { useNavigate } from 'react-router-dom'
import { ItemLocalCart } from '../../../api/interfaces/cart/localCart.interface'

export default function Sidebar (): JSX.Element {
  const [itemProducts, setItemProducts] = useState<ItemLocalCart[]>(JSON.parse(window.localStorage.getItem('cart_shopping') ?? '[]'))

  const { showSidebar, closeSidebar, resumeCart, calculateResume } = useContext(MyContext)

  const navigate = useNavigate()

  const generateWhatsappMessage = () => {
    const customText = 'Hola, estoy interesado en estos productos.\n'

    const local = window.localStorage.getItem('cart_shopping')
    const cartItems = local ? JSON.parse(local) : []

    const whatsappMessages = cartItems.map((product: ItemLocalCart) => {
      const { url, color, size } = product
      return `${url}\n${color?.colorName} ${size}\n`
    })

    const fullMessage = `${customText}${whatsappMessages.join('\n')}`

    const encodedMessage = encodeURIComponent(fullMessage)

    const whatsappUrl = `https://wa.me/51930265689?text=${encodedMessage}`

    return whatsappUrl
  }

  useEffect(() => {
    setItemProducts(JSON.parse(window.localStorage.getItem('cart_shopping') ?? '[]'))
    calculateResume()
  }, [showSidebar, closeSidebar, calculateResume])

  if (itemProducts.length === 0) {
    return (
      <div className=' font-Modern'>
        {showSidebar && <button onClick={() => closeSidebar()} className=' z-10 fixed inset-0 bg-black/20 h-screen w-screen cursor-default' />}
        <div className={`fixed z-10 top-0 right-0 bg-gray-000 bg-white h-full w-96 ${showSidebar ? 'w-96' : 'w-0'} transition-all duration-300`}>
          <div className=' p-5'>
            <svg onClick={() => closeSidebar()} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6 hover:bg-gray-100 cursor-pointer'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
            </svg>
          </div>
          <p className=' font-bold text-2xl mb-5 px-5'>Cesta</p>
          <div className=' fcenter flex-col mx-10 my-16 min-w-[20rem] overflow-hidden flex-nowrap'>
            <img width={200} height={200} src='https://i.postimg.cc/YqPYXT3r/empty-cart.png' alt='image cart empty' />
            <br />
            <p className=' font-bold'>Cesta Vacia</p>
            <br />
            <small className=' text-center font-semibold text-sm block'>Aún no tienes ningún artículo en la cesta, descubre todo lo que tenemos para ti</small>
            <br />
            <br />
            <button className=' button bg-black' onClick={() => navigate('/hombre')}>
              DESCUBRIR
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className=' font-Modern'>
      {showSidebar && <button onClick={() => closeSidebar()} className=' z-10 fixed inset-0 bg-black/20 h-screen w-screen cursor-default' />}
      <div className={`fixed z-10 top-0 right-0 bg-gray-000 bg-white h-full w-96 ${showSidebar ? 'w-96' : 'w-0'} transition-all duration-300`}>
        <div className=' p-5'>
          <svg onClick={() => closeSidebar()} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6 hover:bg-gray-100 cursor-pointer'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
          </svg>
        </div>
        <p className=' font-bold text-2xl mb-5 px-5'>Carrito</p>
        <div className='flex flex-col justify-between h-full min-w-[24rem] overflow-hidden'>
          <div className='  overflow-y-auto px-5 mb-2'>
            {
              itemProducts.map((item: ItemLocalCart, index: number) => (
                <ItemProductSidebar key={index} product={item} index={index} />
              ))
            }
          </div>
          <div className=' flex-shrink-0 h-72 m py-3 px-5 shadow-top block overflow-hidden text-[#292929]'>
            <div className=' flex justify-between font-bold text-xl my-4'>
              <span>Total</span>
              <span>S/ {resumeCart.toFixed(2)}</span>
            </div>
            <p className=' my-5 text-xs font-bold block'>Simula el costo de envío en el siguiente paso.</p>
            <a href={generateWhatsappMessage()} target='_blank' rel='noreferrer'>
              <div className=' flex items-center justify-center bg-slate-200 hover:bg-slate-300 p-[0.38rem] px-5 rounded-sm ml-2'>
                <img width={30} src='https://i.ibb.co/HDFn5qw/whatsapp-1.png' alt='' />
                <p className=' ml-2 font-Design'>Chat</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
