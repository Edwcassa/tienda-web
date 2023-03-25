import { ProductsResponseBody } from '../api/interfaces/product/product-reponse-body'
import * as ProductServices from './productServices'

const getProducts = async (params: string): Promise<ProductsResponseBody> => await ProductServices.getProducts(params)

const ProductUsecase = {
  getProducts
}

export default ProductUsecase
