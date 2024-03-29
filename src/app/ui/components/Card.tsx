import React, { useState } from 'react'

interface props {
  img: string
  subImg?: string
  description: string
  price: number
  colors?: Array<{ name: string, code: string }>
}
export default function Card ({ img, subImg, description, price, colors }: props) {
  const [hover, setHover] = useState(false)
  return (
    <>
      <div className=' mb-10 flex flex-col items-center cursor-pointer'>
        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
          {!hover && <img src={img} alt='' className=' object-cover object-center h-[17rem] sm:h-[20rem] md:h-[25rem] lg:h-[31rem] ' />}
          {hover && <img src={subImg} alt='' className=' object-cover object-center h-[17rem] sm:h-[20rem] md:h-[25rem] lg:h-[31rem] ' />}
        </div>
        <div className=' flex flex-col font-Modern'>
          <span className=' text-base mt-1'>{description}</span>
          <div className=' flex mt-2'>
            <span className=' text-xs font-normal'>S/&nbsp;</span>
            <span className=' font-bold'>{`${price}`}</span>
          </div>
        </div>
      </div>
    </>
  )
}
