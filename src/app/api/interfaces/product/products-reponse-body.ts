import { Product } from './product.interface'

export interface ProductsResponseBody {
  ok?: boolean
  data?: Product[]
}
