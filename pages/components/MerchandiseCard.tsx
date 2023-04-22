import Image from 'next/image'
import React from 'react'

import { Merchandise } from '@/types'
import styles from "@/styles/MerchandiseCard.module.scss"
import Cart from "@/public/cart_white.svg"

export default function MerchandiseCard({merchandise}:{merchandise:Merchandise}) {
  return (
    <div className={styles.card}>
        <div className={styles.imageBox}>
            <Image
            src={`/images-sneakers/${merchandise.name}.png`}
            alt="Cart picture"
            width={228}
            height={130}
            />
        </div>

        <p className={styles.cardName}>{merchandise.name}</p>

        <div className={styles.priceBox}>
            <div className={styles.cartButton}>
                <Image
                    src={Cart}
                    alt="Cart picture"
                    width={24}
                    height={21}
                />
            </div>
            <p>$ {merchandise.price.toLocaleString('ru-RU')}</p>  
        </div>

    </div>
  )
}
