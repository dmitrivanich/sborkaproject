import { Merchandise } from '@/types'
import styles from "@/styles/BigCard.module.scss"
import Image from 'next/image'
import Cart from "@/public/cart_white.svg"
import Link from 'next/link'

export default function BigCard({merchandise}:{merchandise:Merchandise}) {
  return (
    <div className={styles.card}>
        <Link href="/">
            <button className={styles.back_button}>Back in catalog</button>
        </Link>
        <div className={styles.imageBox}>
            <Image
                priority
                src={`/images-sneakers/${merchandise?.name}.png`}
                alt="Cart picture"
                width={890}
                height={508}
                quality={100}
            />
        </div>

        <p className={styles.cardName}>{merchandise.name}</p>
        <p className={styles.IMN}>Item model number: {merchandise.IMN}</p>

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
