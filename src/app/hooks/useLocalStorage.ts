import { useState } from 'react'

export function useLocalStorage (key: string, initialValue: any) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      if (!item) {
        window.localStorage.setItem(key, JSON.stringify(initialValue))
      }
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      window.localStorage.setItem(key, JSON.stringify(initialValue))
      return initialValue
    }
  })

  const setValue = (value: any) => {
    try {
      setStoredValue((prev: any) => value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      setStoredValue(initialValue)
      window.localStorage.setItem(key, JSON.stringify(initialValue))
      console.error(error)
    }
  }

  return [storedValue, setValue]
}
