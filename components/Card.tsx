import Image from 'next/image'

import { Merchandise } from '@/types'
import Cart from "@/public/cart_white.svg"
import Link from 'next/link'
import styles from "../styles/Card.module.scss"

export default function MerchandiseCard({merchandise}:{merchandise:Merchandise}) {
  return (
    <div className={styles.card}>
        <div className={styles.imageBox}>
            <Link href={"sneaker/" + merchandise.id}>
                <Image
                    priority
                    src={`/images-sneakers/${merchandise?.name}.png`}
                    alt="Cart picture"
                    width={228}
                    height={130}
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                    quality={100}
                />
            </Link>
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
