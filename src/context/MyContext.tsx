import { createContext, useState } from 'react'
import { Product } from '../app/api/interfaces/product/product.interface'
import { useLocalStorage } from '../app/hooks/useLocalStorage'

interface MyContextProps {
  storedValue: Product[]
  countCartProducts: number
  updateCountCart: () => void
  deleteToCart: (id: string) => void
  calculateResume: () => void

  showSidebar: Boolean
  resumeCart: number
  openSidebar: () => void
  closeSidebar: () => void
}

interface MyContextProviderProps {
  children: React.ReactNode
}

export const initialContextValue: MyContextProps = {
  storedValue: [],
  countCartProducts: 0,
  updateCountCart: () => {},
  deleteToCart: (id: string) => {},
  calculateResume: () => {},

  showSidebar: false,
  resumeCart: 0,
  openSidebar: () => {},
  closeSidebar: () => {}
}

export const MyContext = createContext<MyContextProps>(initialContextValue)
export default MyContext

export const MyContextProvider = ({ children }: MyContextProviderProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [storedValue, setValue] = useLocalStorage('cart_shopping', [])

  const [countCartProducts, setCountCartProducts] = useState(JSON.parse(window.localStorage.getItem('cart_shopping') ?? '[]').length)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [resumeCart, setResumeCart] = useState(0)

  const [showSidebar, setShowSidebar] = useState(false)

  const updateCountCart = () => {
    const numberCart = JSON.parse(window.localStorage.getItem('cart_shopping') ?? '[]').length
    setCountCartProducts(Number(numberCart))
  }

  const deleteToCart = (idProduct: string) => {
    const productsCart = JSON.parse(window.localStorage.getItem('cart_shopping') ?? '[]')
    const newArray = productsCart.filter((obj: Product) => obj._id !== idProduct)
    setValue(newArray)
    updateCountCart()
    calculateResume()
  }

  const calculateResume = () => {
    const productsCart = JSON.parse(window.localStorage.getItem('cart_shopping') ?? '[]')
    const priceTotal = productsCart.reduce((acumulador: number, item: Product) => acumulador + item.price, 0)
    setResumeCart(priceTotal)
  }

  const openSidebar = () => {
    setShowSidebar(true)
  }

  const closeSidebar = () => {
    setShowSidebar(false)
  }

  const contextValue = {
    storedValue,
    countCartProducts,
    showSidebar,
    resumeCart,

    updateCountCart,
    deleteToCart,
    calculateResume,
    openSidebar,
    closeSidebar
  }

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  )
}
