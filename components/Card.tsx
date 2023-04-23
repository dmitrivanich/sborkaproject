import Image from 'next/image'

import { Merchandise } from '@/types'
import Cart from "@/public/images-cart/cart_white.svg"
import Link from 'next/link'
import styles from "../styles/Card.module.scss"
import { useAppStore } from '@/store'

export default function MerchandiseCard({merchandise}:{merchandise:Merchandise}) {
    const plusItemToCart = useAppStore(state=>state.plusItemToCart)

    return (
    <div className={styles.card}>
        <div className={styles.imageBox}>
            <Link href={"sneakers/" + merchandise.id}>
                <Image
                    priority
                    src={`/images-sneakers/${merchandise?.name}.png`}
                    alt="Cart picture"
                    width={228}
                    height={130}
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                    quality={80}
                />
            </Link>
        </div>

        <p className={styles.cardName}>{merchandise.name}</p>

        <div className={styles.priceBox}>

            <button className={styles.cartButton} onClick={()=>{
                plusItemToCart(merchandise)
            }}>
                <Image
                    src={Cart}
                    alt="Cart picture"
                    width={24}
                    height={21}
                />
            </button>

            <p>$ {merchandise.price.toLocaleString('ru-RU')}</p>  
        </div>

    </div>
    )
}
