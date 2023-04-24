export interface AppState {
  merchandises: Merchandise[],
  visibleCart:boolean,
  cart: CartItem[],
  plusItemToCart: (merch: Merchandise) => void,
  minusItemFromCart: (merch: Merchandise) => void,
  removeItemFromCart: (merch: Merchandise) => void,
  changeVisibleCart: () => void
}
  
export interface Total {
  subtotal:number,
  tax:number,
  shipping:number,
  total:number
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