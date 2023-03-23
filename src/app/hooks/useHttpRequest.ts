import { useState, useEffect } from 'react'

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

interface HttpRequestResult<T> {
  data: T | null
  isLoading: boolean
  error: Error | null
  reFetch: () => void
}

const baseUrl = import.meta.env.VITE_API_URL

export const useHttpRequest = <T>(
  url: string,
  params: string = '',
  method: HttpMethod = 'GET',
  headers: HeadersInit = {},
  body: BodyInit | null = null

): HttpRequestResult<T> => {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [isLoading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      const url: string = `${baseUrl}${params ? '?' + params : ''}`
      try {
        const response = await fetch(url, { method, headers, body })
        const jsonData = await response.json()
        setData(jsonData)
        setLoading(false)
      } catch (error: any) {
        setError(error)
        setLoading(false)
      }
    }

    fetchData()
  }, [url, method, headers, body])

  const reFetch = (): void => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch(url, { method, headers, body })
        const jsonData = await response.json()
        setData(jsonData)
        setLoading(false)
      } catch (error: any) {
        setError(error)
        setLoading(false)
      }
    }

    fetchData()
  }

  return { data, error, isLoading, reFetch }
}
