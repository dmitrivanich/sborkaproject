import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { AppState, Merchandise } from './types'

export const useAppStore = create<AppState>()(
  devtools(
    persist((set,get) => ({
      merchandises: [],
      cart: [
        {
          id: 0,
          name: 'Sneaker 1',
          price: 800
        },{
          id: 1,
          name: 'Sneaker 2',
          price: 1000
        }
      ],

      addToCart: (merch:Merchandise) => {set({cart: [...get().cart, merch]})},
      removeFromCart: (merch:Merchandise) => {
        let filtredCart = get().cart.filter(({id}) => id !== merch.id)
        set({cart: filtredCart})
      },

    }),
    {
      name: "app-storage" // name of the key, state will be saved under items
    })
  )
)