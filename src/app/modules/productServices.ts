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
  // const data = {
  //   ok: true,
  //   product: {
  //     _id: '123',
  //     code: '1234',
  //     type: 'PANtalon',
  //     title: 'jean NoRMAL',
  //     image: 'https://img-jean',
  //     price: 50,
  //     description: 'taLLa del modelo: M',
  //     composition: 'foRRo del bolsillo: Algodón 80%',
  //     categories: ['BASico'],
  //     sizes: ['2xl', 'S', 'l', 'm'],
  //     colors: [
  //       {
  //         colorName: 'AZul Noche',
  //         colorImages: ['https://es', 'https://pe']
  //       }
  //     ]

  //   }
  // }
  // return await Promise.resolve(data)
}

export { getProducts, getProduct }
