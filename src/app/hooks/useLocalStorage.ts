import { useState } from 'react'

export function useLocalStorage (key: string, initiaValue: any) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      window.localStorage.setItem(key, JSON.stringify(initiaValue))
      return item ? JSON.parse(item) : initiaValue
    } catch (error) {
      console.error(error)
      return initiaValue
    }
  })

  const setValue = (value: any) => {
    console.log('setValue: ', value)
    try {
      setStoredValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(error)
    }
  }

  return [storedValue, setValue]
}
