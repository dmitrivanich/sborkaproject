import Cart from "@/components/Cart"

import Page from "@/components/Page"
import Showcase from "@/components/Showcase"

export default function Sneakers() {
  return <Page elements={[Showcase(), Cart()]}/>
}