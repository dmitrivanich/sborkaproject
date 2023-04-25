import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { AppState, Merchandise } from '../types'
import sneakers from "../public/sneakers.json"


export const useAppStore = create<AppState>()(
  devtools(
    persist((set,get) => ({
      merchandises: sneakers.New_Balance,
      visibleCart: null,
      cart: [],

      changeVisibleCart: (value?:boolean) => {
        set({visibleCart: value === undefined ? !get().visibleCart : value})
      },

      plusItemToCart: (merch:Merchandise) => {
        let isAdded = false
        let cartItems = get().cart?.map(el => {

        if(el.merchandiseId === merch.id){
          isAdded = true

          return {
            ...el,
            quantity: el.quantity + 1
          }

          }else return el
          
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
        let cartItems = get().cart?.map(el => {

        if(el.merchandiseId === merch.id){
          return {
            ...el,
            quantity: el.quantity - 1
          }

        }else return el
          
        }).filter(el => el.quantity > 0)

        set({cart: cartItems})
      },

      removeItemFromCart: (merch:Merchandise) => {
        let cartItems = get().cart?.map(el => {

          if(el.merchandiseId === merch.id){
            return {
              ...el,
              quantity: 0
            }
          }else return el
            
        }).filter(el => el.quantity > 0)
  
        set({cart: cartItems})
      },

    }),
    {
      name: "app-storage" // name of the key, state will be saved under items
    })
  )
)