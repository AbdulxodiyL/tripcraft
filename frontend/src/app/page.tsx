import HeroSection from '@/components/sections/HeroSection'
import SearchForm from '@/components/sections/SearchForm'
import CategoriesGrid from '@/components/sections/CategoriesGrid'
import FeaturesSection from '@/components/sections/FeaturesSection'
import PopularDestinations from '@/components/sections/PopularDestinations'
import HiddenGemsSection from '@/components/sections/HiddenGemsSection'
import PricingSection from '@/components/sections/PricingSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTASection from '@/components/sections/CTASection'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <Navbar />
      <HeroSection />
      <SearchForm />
      <CategoriesGrid />
      <FeaturesSection />
      <PopularDestinations />
      <HiddenGemsSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
