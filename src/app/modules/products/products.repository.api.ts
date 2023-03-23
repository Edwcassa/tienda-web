import { Product } from '../../api/interfaces/product/product.interface'

// const api_url = "https://63f370d4fe3b595e2ee1dac3.mockapi.io/api/products"
const apiUrl = ''

const getAllProducts = async (): Promise<Product[]> => {
  return await fetch(apiUrl)
    .then(async (response) => await response.json())
    .then((data) => {
      return data
    })
}

export { getAllProducts }
