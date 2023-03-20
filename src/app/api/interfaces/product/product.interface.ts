import { Color } from "./color.interface"

export interface Product {
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