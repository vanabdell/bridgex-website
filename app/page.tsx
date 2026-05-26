import Hero from '@/components/sections/Hero'
import BrandSplit from '@/components/sections/BrandSplit'
import BlendedLearning from '@/components/sections/BlendedLearning'
import ClientLogos from '@/components/sections/ClientLogos'
import Testimonials from '@/components/sections/Testimonials'
import StatsBar from '@/components/sections/StatsBar'
import CTABanner from '@/components/sections/CTABanner'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <ClientLogos />
      <BrandSplit />
      <BlendedLearning />
      <Testimonials />
      <StatsBar />
      <CTABanner />
      <Footer />
    </main>
  )
}