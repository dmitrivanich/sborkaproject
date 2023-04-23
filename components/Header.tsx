import { useState, useEffect } from 'react'
import styles from "@/styles/Header.module.scss"
import Image from 'next/image'
import Logo from '@/public/Logo.svg'
import Cart from '@/public/images-cart/cart_black.svg'
import { useAppStore } from '@/store'
import Link from 'next/link'
import { CartItem } from '@/types'



export default function Header() {

  const cart = useAppStore(state => state.cart)

  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    setCartItems(cart)
  }, [cart])
  

  return (
    <div className={styles.header} key={"header"}>

      <Link className={styles.logo} href="/">
        <Image
            priority
            src={Logo}
            alt="Logo picture"
            width={89}
            height={32}
        />
      </Link>

      <div className={styles.cart}>
        <Image
          priority
          src={Cart}
          alt="Cart picture"
          width={24}
          height={21}
        />
        
        <div className={!!cartItems.length ? styles.visibleCartStatus : styles.hidden }>
          <p>{getCartItemsQuantity(cartItems)}</p>
        </div>
      </div>

    </div>
  )
}

const getCartItemsQuantity = (cartItems: CartItem[]) => {
  let quantity = 0
  
  cartItems.map(el =>{
    quantity += el.quantity
  })

  return quantity
}
