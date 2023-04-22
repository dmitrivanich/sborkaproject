import { useAppStore } from "@/store"
import MerchandiseCard from "../components/MerchandiseCard"
import styles from "@/styles/Home.module.scss"
import { Merchandise } from "@/types"


export default function Home() {

  const merchandises = useAppStore(state => state.merchandises)

  return (
    <div className={styles.merchandises}>
      {
        merchandises.map((merchandise:Merchandise) => (
          merchandise && <div className={styles.merchandise} key={merchandise.id}><MerchandiseCard merchandise={merchandise}/></div>
        ))
      }
    </div>
  )
}
