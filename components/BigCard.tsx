import { Merchandise } from '@/types'
import styles from "@/styles/BigCard.module.scss"
import Image from 'next/image'
import Cart from "@/public/images-cart/cart_white.svg"
import Link from 'next/link'
import { useAppStore } from '@/store'

export default function BigCard({merchandise}:{merchandise:Merchandise}) {
    const plusItemToCart = useAppStore(state=>state.plusItemToCart)

    return (
        <div className={styles.card} key={"bigCard"}>
            <div className={styles.content}>
                <Link href="/">
                    <button className={styles.back_button}>Back in catalog</button>
                </Link>
                <div className={styles.imageBox}>
                    <Image
                        src={`/images-sneakers/${merchandise?.name}.png`}
                        alt="Cart picture"
                        width={890}
                        sizes="(max-width: 1200px) 570px,
                        (max-width: 410px) 330px"
                        height={508}
                        quality={70}
                    />
                </div>

                <p className={styles.cardName}>{merchandise.name}</p>
                <p className={styles.IMN}>Item model number: {merchandise.IMN}</p>

                <div className={styles.priceBox}>
                    <button className={styles.cartButton} onClick={()=>{
                        plusItemToCart(merchandise)
                    }}>
                        <Image
                            src={Cart}
                            alt="Cart picture"
                            width={24}
                            height={21}
                            quality={10}
                        />
                    </button>
                    <p>$ {merchandise.price.toLocaleString('ru-RU')}</p>  
                </div>
            </div>
        </div>
    )
}
