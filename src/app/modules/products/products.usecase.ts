
import { Product } from '../../api/interfaces/product/product.interface'
import * as ProductRepository from './products.repository.api'

const getAllProducts = async () : Promise<Product[]> => await ProductRepository.getAllProducts()


export { getAllProducts }
 