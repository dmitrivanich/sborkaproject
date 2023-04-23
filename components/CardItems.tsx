import styles from "@/styles/CartItems.module.scss"
import { CartItem, Merchandise } from "@/types"
import Image from "next/image"

export default function Sneakers({cartItems, merchandises}:{cartItems:CartItem[], merchandises: Merchandise[]}){
    
    const elements = cartItems.map((element,index)=>{
        let merchandise = merchandises.find((el)=>el.id === element.merchandiseId)
        if(merchandise){
            return {
                ...merchandise,
                quantity: element.quantity
            }
        }
    })
    
    return <div className={styles.cartItems}>
        {elements.map((element,index)=>(
        <div key={index} className={styles.cartItem}>
            <div className={styles.imageBox}>
                <Image
                    priority
                    src={`/images-sneakers/${element?.name}.png`}
                    alt="Sneaker picture"
                    width={90}
                    height={51}
                    quality={80}
                />
            </div>
            <div className={styles.cartItemInfo}>
                <p>{element?.name   }</p>
                <div className={styles.qualityItems}>
                    <button className={styles.quantityChangeButton}>
                        <Image
                            priority
                            src={`/images-cart/minus.svg`}
                            alt="minus"
                            width={20}
                            height={20}
                            quality={80}
                        />
                    </button>

                    {element?.quantity}

                    <button className={styles.quantityChangeButton}>
                        <Image
                            priority
                            src={`/images-cart/plus.svg`}
                            alt="plus"
                            width={20}
                            height={20}
                            quality={80}
                        />
                    </button>

                    {"$ " + element?.price.toLocaleString("ru-RU")}
                </div>
            </div>
            <div className={styles.removeItemButtonBox}>
                <button>
                    <Image
                        priority
                        src={`/images-cart/removeItem.svg`}
                        alt="Cart picture"
                        width={22}
                        height={22}
                        quality={80}
                    />
                </button>
            </div>
        </div>))}
    </div>
}