import { useAppStore } from "@/store"
import styles from "@/styles/Cart.module.scss"
import { CartItem, Merchandise } from "@/types"
import Image from "next/image"
import { useEffect, useState } from "react"
import Sneakers from "./CardItems"

export default function Cart() {
  const cart = useAppStore(state=>state.cart)
  const merch = useAppStore(state=>state.merchandises)

  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [merchandises, setMerchandises] = useState<Merchandise[]>([])


  useEffect(()=>{
    setCartItems(cart)
    setMerchandises(merch)
  },[cart,merch])

  return (
    <div className={styles.container} key={"cart"}>
        <p className={styles.header}>My basket</p>
        
        <div className={styles.cart}>
            <Sneakers cartItems={cartItems} merchandises={merchandises}/>
        </div>

        <div className={styles.total}>
          <div>
            <p>Subtotal</p>
            <p></p>
          </div>
          <div>
            <p>Tax</p>
            <p></p> 
          </div>
          <div>
            <p>Shipping</p>
            <p></p>
          </div>
          <div>
            <h2>Total</h2>
            <h2></h2>
          </div>
        </div>
    </div>
  )
}