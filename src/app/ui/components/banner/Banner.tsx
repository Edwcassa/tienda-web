import React from 'react'
import { useNavigate } from 'react-router-dom'

interface props {
  img: string
  text: string
  subtext?: string
  link: string
  colorText: string
  imageOpacity?: string
}
export default function Banner ({ img, text, subtext, link, colorText, imageOpacity }: props) {
  const navigate = useNavigate()

  return (
    <>
      <div onClick={() => navigate(link)} className=' flex justify-center cursor-pointer w-full sm:h-[350px] md:h-[450px] lg:h-[600px] relative'>
        <img className={` w-full h-full object-cover ${imageOpacity}`} src={img} alt='' />
        <div style={{ color: colorText }} className='absolute bottom-1/3 flex flex-col font-Modern'>
          <span className=' uppercase text-center text-sm my-5 font-extrabold'>{subtext}</span>
          <span className=' uppercase text-center text-4xl sm:text-5xl md:text-6xl font-extrabold'>{text}</span>
        </div>
      </div>

    </>
  )
}
