import HeroSection from "@/components/HeroSection"
import ProductCard from "@/app/product/page"
import About from "@/app/about/page"

export default function Home(){
  return(
    <div>
      <HeroSection/>
      <ProductCard/>
      <About/>
    </div>
  )
}