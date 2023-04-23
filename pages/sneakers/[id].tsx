import BigCard from '@/components/BigCard'
import Cart from '@/components/Cart'
import { useAppStore } from '@/store'
import { Merchandise } from '@/types'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import Page from '@/components/Page'

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
    merchandise && <Page elements={[
      <BigCard key={merchandise.id} merchandise={merchandise}/>,
      <Cart key={"Cart_" + merchandise.id}/>
    ]}/>
  )
}

export default Sneaker