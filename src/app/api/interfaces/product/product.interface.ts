import { Color } from './color.interface'

export interface Product {
  _id: string
  code: string
  type: string
  title: string
  image: string
  price: number
  description: string
  composition: string
  categories: string[]
  sizes: string[]
  colors: Color[]
}
