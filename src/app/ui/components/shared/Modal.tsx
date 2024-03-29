import { useEffect } from 'react'

interface prop {
  small?: boolean
  visible: boolean
  setVisible: (flag: boolean) => void
  children: any
}

export default function Modal ({ small, visible, setVisible, children }: prop) {
  useEffect(() => {
    if (visible) document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [visible])

  const ocultar = () => {
    setVisible(false)
    document.body.classList.remove('overflow-hidden')
  }

  return (
    <>
      {visible && (
        <div>
          <button onClick={() => ocultar()} tabIndex={-1} className='fixed inset-0 w-full h-full bg-black opacity-20 z-10 cursor-default' />
          <div className={` absolute ${small ? 'w-3/12 h-3/6' : 'w-7/12 h-4/6'} bg-white inset-0 my-auto z-50 rounded mx-auto `}>
            <div className='relative h-full'>
              <div onClick={() => ocultar()} className=' absolute right-0 cursor-pointer'>
                {/* <img className='w-10 p-1' src={close} alt='' /> */}
                X
              </div>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
