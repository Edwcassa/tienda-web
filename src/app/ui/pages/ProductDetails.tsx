import React, { useEffect, useState } from 'react'
import { Product } from '../../api/interfaces/product/product.interface'
import ProductUsecase from '../../modules/productUsecase'

export default function ProductDetails (idProduct: string) {
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const getProduct = async (idProduct: string) => {
    try {
      setLoading(true)
      const response = await ProductUsecase.getProduct(idProduct)
      setProduct(response)
    } catch (error: any) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getProduct(idProduct)
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error</p>
  }

  if (product) {
    return (
      <div>
        {product.title}
      </div>
    )
  }
}
