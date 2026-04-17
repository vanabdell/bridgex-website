import Hero from '@/components/sections/Hero'
import BrandSplit from '@/components/sections/BrandSplit'
import BlendedLearning from '@/components/sections/BlendedLearning'
import ClientLogos from '@/components/sections/ClientLogos'
import StatsBar from '@/components/sections/StatsBar'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <BrandSplit />
      <BlendedLearning />
      <ClientLogos />
      <StatsBar />
      <Footer />
    </main>
  )
}