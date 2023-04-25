import styles from "@/styles/Showcase.module.scss"
import { Merchandise } from "@/types"
import Card from "@/components/Card"
import { useAppStore } from "@/store"

export default function Showcase() {
    const merchandises = useAppStore(state => state.merchandises)

    return (
        <div className={styles.content} key={"showcase"}>
            <div className={styles.merchandises}>
                {merchandises.map((merchandise:Merchandise,index:number) => 
                    merchandise && <div className={styles.merchandise} key={merchandise.id}>
                        <Card merchandise={merchandise} index={index}/>
                    </div>)
                }
            </div>
        </div>
    )
  
}