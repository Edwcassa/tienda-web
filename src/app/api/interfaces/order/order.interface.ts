export interface Product_Order {
  code: string
  title: string
  image: string
  price: number
  size: string
  colorName: string
  quantity: number
}

export interface Resume {
  totalAmount: number
  totalPrice: number
}

export interface Location {
  address: string
  street: string
  number: number
  additionalInformation?: string
}

export interface Order {
  userId: any
  products: Product_Order[]
  location: Location
  receiver: string
}

export interface OrderComplete extends Order {
  resume: Resume
  status: boolean
}