import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { AppState, Merchandise } from './types'
import sneakers from "./public/sneakers.json"


export const useAppStore = create<AppState>()(
  devtools(
    persist((set,get) => ({
      merchandises: sneakers.New_Balance,
      cart: [],

      plusItemToCart: (merch:Merchandise) => {
        let isAdded = false
        let cartItems = get().cart?.map(el => {

        if(el.merchandiseId === merch.id){
          isAdded = true

          return {
            ...el,
            quantity: el.quantity + 1
          }

          }else {
            return el
          }
          
        })

        if(!isAdded){
          cartItems.push({
            merchandiseId: merch.id,
            quantity: 1
          })
        }

        set({cart: cartItems})
      },

      minusItemFromCart: (merch:Merchandise) => {
        // let isAdded = false
        // let cartItem = get().cart?.map(el => {
        //   if(el.merchandiseId === merch.id){
        //     return {
        //       merchandiseId: el.merchandiseId,
        //       quantity: el.quantity + 1
        //     }
        //   }
        // })
      },

      removeItemFromCart: (merch:Merchandise) => {
        
      },

    }),
    {
      name: "app-storage" // name of the key, state will be saved under items
    })
  )
)