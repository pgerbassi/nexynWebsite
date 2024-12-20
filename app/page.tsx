import { NavBar } from '@/components/nav-bar'
import { HeroSection } from '@/components/hero-section2'
import { ServicesSection } from '@/components/services-section'
import { TeamSection } from '@/components/team-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <ServicesSection />
      <TeamSection />
      <Footer />
    </main>
  )
}

