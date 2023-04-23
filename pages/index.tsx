import Cart from "@/components/Cart"
import Merchandises from "@/components/Showcase"
import Page from "@/components/Page"

export default function Home() {
  return <Page elements={[<Merchandises key="Merchandises"/>, <Cart key="Cart"/>]}/>
}