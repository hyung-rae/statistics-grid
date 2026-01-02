import { useState } from "react"

const useLocalStorage = <T = unknown>(key: string, initialValue?: T) => {
  const [value, setValue] = useState<T | null>(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue ?? null
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error)
      return initialValue ?? null
    }
  })

  const setStorageValue = (newValue: T | null) => {
    try {
      setValue(newValue)
      if (newValue === null) {
        localStorage.removeItem(key)
      } else {
        localStorage.setItem(key, JSON.stringify(newValue))
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error)
    }
  }

  const removeStorageValue = () => {
    try {
      setValue(null)
      localStorage.removeItem(key)
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error)
    }
  }

  return {
    value,
    setValue: setStorageValue,
    removeValue: removeStorageValue,
  }
}

export default useLocalStorage
