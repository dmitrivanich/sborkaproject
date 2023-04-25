import { useAppStore } from "@/store"
import styles from "@/styles/CartItems.module.scss"
import { CartItem, Merchandise } from "@/types"
import Image from "next/image"

export default function CartItems({cartItems, merchandises}:{cartItems:CartItem[], merchandises: Merchandise[]}){
    
    const minusItemFromCart = useAppStore(s => s.minusItemFromCart)
    const plusItemToCart = useAppStore(s => s.plusItemToCart)
    const removeItemFromCart = useAppStore(s => s.removeItemFromCart)

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
                    priority = {index >= 3 ? false : true}
                    src={`/images-sneakers/${element?.name}.png`}
                    alt="Sneaker picture"
                    width={90}
                    height={51}
                    quality={50}
                />
            </div>
            <div className={styles.cartItemInfo}>

                <p>{element?.name}</p>

                <div className={styles.qualityItems}>

                    <button className={styles.quantityChangeButton} onClick={()=>{
                        element && minusItemFromCart(element)
                    }}>
                        <Image
                            src={`/images-cart/minus.svg`}
                            alt="minus"
                            width={20}
                            height={20}
                            quality={10}
                        />
                    </button>

                    {element?.quantity}

                    <button className={styles.quantityChangeButton}onClick={()=>{
                        element && plusItemToCart(element)
                    }}>
                        <Image
                            src={`/images-cart/plus.svg`}
                            alt="plus"
                            width={20}
                            height={20}
                            quality={10}
                        />
                    </button>

                    {element?.quantity && `$ ${(element?.quantity * element?.price).toLocaleString("ru-RU")}`}
                </div>
            </div>
            <div className={styles.removeItemButtonBox}>
                <button onClick={()=> element && removeItemFromCart(element)}>
                    <Image
                        src={`/images-cart/removeItem.svg`}
                        alt="Remove icon"
                        width={22}
                        height={22}
                        quality={10}
                    />
                </button>
            </div>
        </div>))}
    </div>
}