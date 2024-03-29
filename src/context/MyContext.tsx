import { createContext, useState } from 'react'
import { Product } from '../app/api/interfaces/product/product.interface'
import { useLocalStorage } from '../app/hooks/useLocalStorage'
import { ItemLocalCart } from '../app/api/interfaces/cart/localCart.interface'
import { Color } from '../app/api/interfaces/product/color.interface'

interface MyContextProps {
  storedValue: ItemLocalCart[]
  countCartProducts: number
  updateCountCart: () => void
  deleteToCart: (index: number) => void
  addToCart: (product: Product, colorName: string, size: string, url: string) => void
  increaseQuantityCart: (product: ItemLocalCart, quantity: number) => void
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
  updateCountCart: () => { },
  deleteToCart: (index: number) => { },
  addToCart: (product: Product, colorName: string, size: string, url: string) => { },
  increaseQuantityCart: (product: ItemLocalCart, quantity: number) => { },
  calculateResume: () => { },

  showSidebar: false,
  resumeCart: 0,
  openSidebar: () => { },
  closeSidebar: () => { }
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

  const deleteToCart = (indexProductoEliminar: number) => {
    const carrito = JSON.parse(window.localStorage.getItem('cart_shopping') ?? '[]')
    carrito.splice(indexProductoEliminar, 1)
    setValue(carrito)
    updateCountCart()
    calculateResume()
  }

  function addToCart (product: Product, colorName: string, size: string, url: string) {
    try {
      if (product) {
        const item = JSON.parse(localStorage.getItem('cart_shopping') ?? '[]')
        const exist = item.find((e: ItemLocalCart) => e.code === product.code && e.size === size && e.color?.colorName === colorName)
        if (!exist) {
          const colorObject = product.colors.find((e: Color) => e.colorName === colorName) ?? null
          const productCart: ItemLocalCart = {
            _id: product._id,
            url,
            code: product.code,
            title: product.title,
            price: product.price,
            quantity: 1,
            size,
            color: colorObject
          }
          setValue([...item, productCart])
          updateCountCart()
        }
      }
    } catch (error) {
      setValue([])
    }
  }

  function increaseQuantityCart (productCart: ItemLocalCart, quantity: number) {
    const cart = JSON.parse(localStorage.getItem('cart_shopping') ?? '[]')
    const updatedCartItems = cart.map((item: ItemLocalCart) =>
      item._id === productCart._id &&
        item.color?.colorName === productCart.color?.colorName &&
        item.size === productCart.size
        ? { ...item, quantity }
        : item
    )

    setValue(updatedCartItems)
  }

  const calculateResume = () => {
    const productsCart = JSON.parse(window.localStorage.getItem('cart_shopping') ?? '[]')
    const priceTotal = productsCart.reduce((acumulador: number, item: ItemLocalCart) => acumulador + item.price * item.quantity, 0)
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
    addToCart,
    increaseQuantityCart,
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
