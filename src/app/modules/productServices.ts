import axios from 'axios'

// axios.defaults.baseURL = 'https://6482124529fa1c5c50328c91.mockapi.io/api'
axios.defaults.baseURL = 'https://tienda-api-chi.vercel.app/api'

const getProducts = async (params: string) => {
  const response = await axios.get('v1/products' + '?' + params)
  const { data } = response
  return data
}

const getProduct = async (idProduct: string) => {
  const response = await axios.get('v1/products/' + idProduct)
  const { data } = response
  return data
}

export { getProducts, getProduct }
