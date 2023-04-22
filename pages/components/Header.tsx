import React from 'react'
import styles from "@/styles/Header.module.scss"
import Image from 'next/image'
import Logo from '@/public/Logo.svg'
import Cart from '@/public/cart_black.svg'
import { useAppStore } from '@/store'



export default function Header() {

  const cart = useAppStore(state => state.cart)
  console.log(cart)
  return (
    <div className={styles.header}>
      <Image
        className={styles.logo}
        src={Logo}
        alt="Logo picture"
        width={89}
        height={32}
      />

      <div className={styles.cart}>
        <Image
          src={Cart}
          alt="Cart picture"
          width={24}
          height={21}
        />
        
        <div className={!!cart.length ? styles.visibleCartStatus : styles.hidden }>
          <p>{cart.length}</p>
        </div>
      </div>

    </div>
  )
}

