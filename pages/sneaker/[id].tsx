import BigCard from '@/components/BigCard'
import { useAppStore } from '@/store'
import { Merchandise } from '@/types'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

function Sneaker() {
  const router = useRouter()
  const sneakers = useAppStore(state => state.merchandises)
  const [merchandise, setMerchandise] = useState<Merchandise | null>(null)

  useEffect(()=>{
    if(router.query.id){
      let sneaker = sneakers.filter(({id})=> id === Number(router.query.id))
      if(sneaker.length > 0){
        setMerchandise(sneaker[0])
      }
    }
  },[router])
  
  return (
    <div>
      {merchandise && <BigCard merchandise={merchandise}/>}
    </div>
  )
}

export default Sneaker