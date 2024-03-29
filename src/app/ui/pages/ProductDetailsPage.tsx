import React, { useContext, useEffect, useState } from 'react'
import ProductUsecase from '../../modules/productUsecase'
import { useParams } from 'react-router-dom'
import { Product } from '../../api/interfaces/product/product.interface'
import MyContext from '../../../context/MyContext'
import Skeleton from '../components/skeleton/Skeleton'
import SliderImages from '../components/SliderImages'

export default function ProductDetailsPage (): JSX.Element {
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const [imagesByColor, setImagesByColor] = useState<string[]>([])

  const { addToCart } = useContext(MyContext)

  const { idProduct } = useParams()

  const [colorSelected, setColorSelected] = useState<string>('')
  const [sizeSelected, setSizeSelected] = useState<string>('')

  const [formRequired, setFormRequired] = useState<string | null>('')

  const currentUrl = window.location.href

  const customText = 'Hola, estoy interesado en este productos.\n'

  const whatsappUrl = `https://wa.me/51930265689?text=${encodeURIComponent(`${customText}\n${currentUrl}\n${colorSelected ?? ''}`)}`

  const handleAddToCart = (product: Product, colorSelected: string, sizeSelected: string) => {
    if (colorSelected === '') {
      setFormRequired(() => 'Seleccione un color')
    } else if (sizeSelected === '') {
      setFormRequired(() => 'Seleccione una talla')
    } else {
      addToCart(product, colorSelected, sizeSelected, window.location.href)
    }
  }

  const handleChangeColor = (color: string) => {
    setFormRequired(null)
    setColorSelected(color)
    const allColors = product?.colors
    const imagesByColor = allColors?.filter((colorProduct) => colorProduct.colorName === color) ?? []
    setImagesByColor(imagesByColor[0].images)
  }

  const handleChangeSize = (size: string) => {
    setFormRequired(null)
    setSizeSelected(size)
  }

  const getProduct = async (idProduct: string) => {
    try {
      setLoading(true)
      const response = await ProductUsecase.getProduct(idProduct)
      setProduct(response.product)
      setImagesByColor(response.product.colors[0].images)
      setOgImagePageAfterImagesSet(response.product)
    } catch (error: any) {
      console.log(error)
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  const setOgImagePageAfterImagesSet = (product: Product) => {
    const ogImage: any = document.querySelector('meta[property="og:image"]')
    const ogImageW: any = document.querySelector('meta[property="og:image:width"]')
    const ogImageH: any = document.querySelector('meta[property="og:image:height"]')
    const ogImageType: any = document.querySelector('meta[property="og:image:type"]')
    const ogImageTitle: any = document.querySelector('meta[property="og:title"]')
    if (ogImage) {
      // ogImage.content = product.colors[0].images[0]
      ogImage.content = 'https://cuevana3.nu/wp-content/uploads/2023/08/k5SOA4ewxgZvj917PDhzJCXrHgf.jpg'
    }
    if (ogImageW) {
      ogImageW.content = 1080
    }

    if (ogImageH) {
      ogImageH.content = 1600
    }

    if (ogImageType) {
      ogImageType.content = 'image/jpeg'
    }

    if (ogImageTitle) {
      ogImageTitle.content = product.title
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
      <>
        <div className='flex flex-col sm:flex-row'>
          <div className='w-full'>
            <div className=' sm:hidden'>
              <SliderImages data={imagesByColor} />
            </div>
            <div className='w-full h-full hidden sm:block'>
              <img src={imagesByColor[0]} alt={product.title} className='w-full h-full object-cover' />
            </div>
          </div>
          <article className='w-full p-3 md:p-5 lg:p-10 font-Modern'>
            <p className=' font-semibold text-xl md:text-xl lg:text-3xl mb-2'>{product.title}</p>
            <small className=' text-gray-500'>Ref {product.code}</small>
            <p className='font-bold text-xl mt-2'>S/ {product.price}</p>
            <br />

            <div className=' flex '>
              {product.colors.map((color, index) => (
                <div className='form-check w-20 mr-3' key={index} title={color.colorName}>
                  <input
                    className='form-check-input hidden' id={`radio_color${index}`} type='radio' name='img'
                    value={color.colorName}
                    onChange={(e) => handleChangeColor(e.target.value)}
                    checked={colorSelected === color.colorName}
                  />
                  <label className='form-check-label' htmlFor={`radio_color${index}`}>
                    <img
                      src={color.colorImage} alt={color.colorName}
                      className={`w-20 object-cover cursor-pointer ${color.colorName === colorSelected && ' border-solid border-[1px] border-black '}`}
                    />
                  </label>
                </div>
              )
              )}
            </div>

            <div className='flex items-center'>
              <p className=' text-sm font-semibold my-5 mr-3'>Selecciona talla</p>
              {formRequired && <span onAnimationEnd={() => setFormRequired('')} className={`text-red-500 ml-3, ${formRequired !== null ? 'shakeX' : ''}`}> * {formRequired}</span>}
            </div>

            <div className='flex flex-row my-3'>
              {
                product.sizes.map((e, i) => (
                  <div className='form-check w-16' key={i}>
                    <input
                      className='form-check-input hidden' id={`radio_size${i}`} type='radio' name='img'
                      value={e}
                      onChange={(e) => handleChangeSize(e.target.value)}
                      checked={sizeSelected === e}
                    />
                    <label className='form-check-label bg-transparent' htmlFor={`radio_size${i}`}>
                      <span
                        className={`w-10 h-10 grid place-content-center rounded-full border-[1px] cursor-pointer
                                  border-gray-400 hover:border-gray-600
                                    ${e === sizeSelected && 'text-white bg-black'}`}
                      >
                        {e}
                      </span>
                    </label>
                  </div>
                ))
              }
            </div>

            <div className=' flex items-center mt-7'>
              <svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 24 24' fill='none' stroke='#000000' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                <path d='M16 2l6 6L8 22l-6-6L16 2' /> <path d='M7.5 10.5l2 2' /> <path d='M10.5 7.5l2 2' /> <path d='M13.5 4.5l2 2' /> <path d='M4.5 13.5l2 2' />
              </svg>

              <div>
                <small className=' font-normal mx-2'>Guia de tallas: </small>
                <small>{product.description}</small>
              </div>
            </div>

            <br />
            <br />

            <div className='flex items-center'>
              <button onClick={() => handleAddToCart(product, colorSelected, sizeSelected)} className=' button w-56'>
                AÑADIR A LA CESTA
              </button>
              <a href={whatsappUrl} target='_blank' rel='noreferrer'>
                <div className=' flex items-center justify-center bg-slate-100 p-[0.38rem] px-5 rounded-sm ml-2'>
                  <img width={30} src='https://i.ibb.co/HDFn5qw/whatsapp-1.png' alt='' />
                  <p className=' ml-2 font-Design'>Chat</p>
                </div>
              </a>
            </div>

          </article>
        </div>

        <div className=' mt-2 grid gap-2 grid-cols-2 grid-flow-row sm:grid-cols-3'>
          {
            imagesByColor.slice(1).map((image, index) => (
              <img src={image} key={index} className=' object-cover' />
            ))
          }
        </div>
      </>
    )
  }

  return <span> </span>
}
