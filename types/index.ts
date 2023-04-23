export interface AppState {
  merchandises: Merchandise[],
  cart: CartItem[],
  plusItemToCart: (merch: Merchandise) => void,
  minusItemFromCart: (merch: Merchandise) => void,
  removeItemFromCart: (merch: Merchandise) => void
}
  
export interface Merchandise {
  id: number,
  name: string,
  price: number,
  IMN: string,
}

export interface CartItem {
  merchandiseId: number,
  quantity: number
} 