import React, { ReactElement, useEffect, useState } from 'react'
import { ProductsResponseBody } from '../../api/interfaces/product/products-reponse-body'
import { Product } from '../../api/interfaces/product/product.interface'
import ProductUsecase from '../../modules/productUsecase'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import Skeleton from '../components/skeleton/Skeleton'

export default function ManPage (): ReactElement {
  const [products, setProducts] = useState<ProductsResponseBody | any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const getProducts = async (params: string) => {
    try {
      setLoading(true)
      const response = await ProductUsecase.getProducts(params)
      setProducts(response)
    } catch (error: any) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0) // Desplaza el scroll hacia la posición (0, 0) en la página
  }, [])

  useEffect(() => {
    getProducts('')
  }, [])

  const navigate = useNavigate()
  const navigateDetalle = (path: string) => {
    navigate(path)
  }

  if (loading) {
    return (
      <div className=' fcenter h-[30rem]'>
        <Skeleton />
      </div>
    )
  }

  if (error) {
    return <p>Error</p>
  }

  if (products) {
    return (
      <div className=' grid mx-auto grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 w-full md:px-1'>
        {
          products.data?.map((product: Product, index: number) => (
            <div key={index} onClick={() => navigateDetalle(product._id)}>
              <Card
                img={product.image}
                subImg={product.image}
                description={product.title}
                price={product.price}
              />
            </div>
          ))
        }
      </div>
    )
  }

  // return <p>Not found</p>
  return <span> </span>
}

/* <Card
               img="https://static.bershka.net/4/photos2/2022/I/0/1/p/3805/551/427/3805551427_1_1_4.jpg?t=1654594220964"
               sub_img="https://static.bershka.net/4/photos2/2023/V/0/1/p/6712/644/800//02/6712644800_2_1_3.jpg?t=1671720904645"
               description="Skinny High Jeans"
               price={69.95}
               colors={[
                  { 'name': 'negro', 'code': '#000' },
                  { 'name': 'azul', 'code': '#091c47' },
                  { 'name': 'uva', 'code': '#7f4599' }
               ]}
            />
            <Card
               img="https://static.bershka.net/4/photos2/2023/V/0/1/p/6712/644/715/6712644715_1_1_4.jpg?t=1672135852131"
               sub_img="https://static.bershka.net/4/photos2/2023/V/0/1/p/6712/644/800//02/6712644800_2_1_3.jpg?t=1671720904645"
               description="Skinny High Jeans"
               price={69.95}
               colors={[
                  { 'name': 'negro', 'code': '#000' },
                  { 'name': 'azul', 'code': '#091c47' },
                  { 'name': 'uva', 'code': '#7f4599' }
               ]}
            />
            <Card
               img="https://static.bershka.net/4/photos2/2022/I/0/1/p/6945/644/600/6945644600_1_1_4.jpg?t=1663234241272"
               sub_img="https://static.bershka.net/4/photos2/2023/V/0/1/p/6712/644/800//02/6712644800_2_1_3.jpg?t=1671720904645"
               description="Skinny High Jeans"
               price={69.95}
               colors={[
                  { 'name': 'negro', 'code': '#000' },
                  { 'name': 'azul', 'code': '#091c47' },
                  { 'name': 'uva', 'code': '#7f4599' }
               ]}
            />
            <Card
               img="https://static.bershka.net/4/photos2/2022/I/0/1/p/3805/551/401/3805551401_1_1_4.jpg?t=1654594220858"
               sub_img="https://static.bershka.net/4/photos2/2023/V/0/1/p/6712/644/800//02/6712644800_2_1_3.jpg?t=1671720904645"
               description="Skinny High Jeans"
               price={69.95}
               colors={[
                  { 'name': 'negro', 'code': '#000' },
                  { 'name': 'azul', 'code': '#091c47' },
                  { 'name': 'uva', 'code': '#7f4599' }
               ]}
            />
            <Card
               img="https://static.bershka.net/4/photos2/2023/V/0/1/p/6712/644/800/6712644800_1_1_1.jpg?t=1671010907822"
               sub_img="https://static.bershka.net/4/photos2/2023/V/0/1/p/6712/644/800//02/6712644800_2_1_3.jpg?t=1671720904645"
               description="Skinny High Jeans"
               price={69.95}
               colors={[
                  { 'name': 'negro', 'code': '#000' },
                  { 'name': 'azul', 'code': '#091c47' },
                  { 'name': 'uva', 'code': '#7f4599' }
               ]}
            /> */
