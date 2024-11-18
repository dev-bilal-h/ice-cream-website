import HeroSection from "@/components/HeroSection"
import ProductCard from "@/app/flavors/page"
import About from "@/app/about/page"
import Contact from "@/app/contact/page"

export default function Home(){
  return(
    <div>
      <HeroSection/>
      <ProductCard/>
      <About/>
      <Contact/>
    </div>
  )
}