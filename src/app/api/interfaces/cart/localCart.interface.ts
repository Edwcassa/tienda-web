import { Color } from '../product/color.interface'

export interface ItemLocalCart {
  _id: string
  code: string
  title: string
  price: number
  quantity: number
  size: string
  color: Color | null
}
