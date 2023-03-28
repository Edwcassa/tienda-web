import { ProductsResponseBody } from '../api/interfaces/product/products-reponse-body'
import * as ProductServices from './productServices'
import { ProductResponseBody } from '../api/interfaces/product/product-reponse-body'

const getProducts = async (params: string): Promise<ProductsResponseBody> => await ProductServices.getProducts(params)
const getProduct = async (params: string): Promise<ProductResponseBody> => await ProductServices.getProduct(params)

const ProductUsecase = {
  getProducts,
  getProduct
}

export default ProductUsecase
