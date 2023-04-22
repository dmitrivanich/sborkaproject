import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { AppState, Merchandise } from './types'
import sneakers from "./public/sneakers.json"


export const useAppStore = create<AppState>()(
  devtools(
    persist((set,get) => ({
      merchandises: sneakers.New_Balance,
      cart: [],

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