export interface Merchandise {
    id: number,
    name: string,
    price: number,
    IMN: string,
    quantity?: number,
  }
  
  export interface AppState {
    merchandises: Merchandise[],
    cart: Merchandise[],
    addToCart: (merch: Merchandise) => void,
    removeFromCart: (merch: Merchandise) => void
  }
  