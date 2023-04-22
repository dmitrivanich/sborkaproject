import { useAppStore } from "@/store"
import styles from "@/styles/Home.module.scss"
import { Merchandise } from "@/types"
import Card from "@/components/Card"


export default function Home() {

  const merchandises = useAppStore(state => state.merchandises)

  return (
    <div className={styles.merchandises}>
      {
        merchandises.map((merchandise:Merchandise) => (
          merchandise && <div className={styles.merchandise} key={merchandise.id}><Card merchandise={merchandise}/></div>
        ))
      }
    </div>
  )
}
