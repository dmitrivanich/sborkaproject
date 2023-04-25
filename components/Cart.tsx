import { useAppStore } from "@/store"
import styles from "@/styles/Cart.module.scss"
import { CartItem, Merchandise, Total } from "@/types"
import { useEffect, useState } from "react"
import CartItems from "./CartItems"

export default function Cart() {
  const changeVisibleCart = useAppStore(state => state.changeVisibleCart)
  const visibleCart = useAppStore(state=>state.visibleCart)

  const cart = useAppStore(state=>state.cart)
  const merch = useAppStore(state=>state.merchandises)

  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [merchandises, setMerchandises] = useState<Merchandise[]>([])
  const [cartVisible, setCartVisible] = useState<boolean | null>(null)

  const [info, setInfo] = useState<Total>({subtotal: 0,tax: 100,shipping: 150,total: 0})

  useEffect(()=>{
    setCartItems(cart)
    setMerchandises(merch)
    
    let subtotal = 0

    cart?.map(el=>{
      let merch = merchandises.find(m => m.id === el.merchandiseId)
      if(!merch?.price) return
      subtotal += el.quantity * merch?.price
    })

    setInfo({
      ...info,
      subtotal:subtotal,
      total: subtotal + info.tax + info.shipping
    })
  },[cart,merch])


  useEffect(()=>{
    if(cartItems.length === 0 && visibleCart !== null){
      changeVisibleCart(false)
    }
  },[cartItems, visibleCart])

  useEffect(()=>{
    setCartVisible(visibleCart)
  },[cartItems, visibleCart])

  return (
    <div className={`${styles.container} ${cartVisible ? styles.visible : cartVisible !== null ? styles.hidden : ''}`} key={"cart"}>
        <p className={styles.header}>My basket</p>
        
        <div className={styles.cart}>
            <CartItems cartItems={cartItems} merchandises={merchandises}/>
        </div>

        <ul className={styles.total}>
          <li>
            <p>Subtotal</p>
            <p>$ {info.subtotal.toLocaleString("ru-RU")}</p>
          </li>
          <li>
            <p>Tax</p>
            <p>$ {info.tax.toLocaleString("ru-RU")}</p> 
          </li>
          <li>
            <p>Shipping</p>
            <p>$ {info.shipping.toLocaleString("ru-RU")}</p>
          </li>
          <li>
            <h2>Total</h2>
            <h2>$ {info.total.toLocaleString("ru-RU")}</h2>
          </li>
        </ul>
    </div>  
  )
}
