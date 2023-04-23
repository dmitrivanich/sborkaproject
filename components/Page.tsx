import styles from "@/styles/Page.module.scss"
import Header from './Header'



export default function Page({elements}:{elements?: JSX.Element[]}) {
  return (
    <div className={styles.container}>
        <Header/>
        
        <div className={styles.content}>
            {elements}
        </div>
    </div>
  )
}