import { Product } from "../../api/interfaces/product/product.interface"


// const api_url = "https://63f370d4fe3b595e2ee1dac3.mockapi.io/api/products"
const api_url = ''

const getAllProducts = async () : Promise<Product[]> => {
  return await fetch(api_url)
    .then((response) => response.json())
    .then((data) => {
      return data
    })
}

export { getAllProducts }
