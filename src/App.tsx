import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { PlatformSection } from '@/components/sections/PlatformSection'
import { CategoryBrowser } from '@/components/sections/CategoryBrowser'
import { BundleShowcase } from '@/components/sections/BundleShowcase'
import { InstallGuide } from '@/components/sections/InstallGuide'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <PlatformSection />
        <CategoryBrowser />
        <BundleShowcase />
        <InstallGuide />
      </main>
      <Footer />
    </div>
  )
}
