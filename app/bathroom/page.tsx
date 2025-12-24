import { Header } from "@/components/header"
import { BathroomHeroSection } from "@/components/bathroom/bathroom-hero-section"
import { BathroomProcessSteps } from "@/components/bathroom/bathroom-process-steps"
import { BathroomBlueProcess } from "@/components/bathroom/bathroom-blue-process"
import { BathroomPortfolio } from "@/components/bathroom/bathroom-portfolio"
import { BathroomTeam } from "@/components/bathroom/bathroom-team"
import { BathroomTestimonials } from "@/components/bathroom/bathroom-testimonials"
import { BathroomGuarantees } from "@/components/bathroom/bathroom-guarantees"
import { BathroomPrice } from "@/components/bathroom/bathroom-price"
import { BathroomWorks } from "@/components/bathroom/bathroom-works"
import { BathroomPartners } from "@/components/bathroom/bathroom-partners"
import { BathroomPayment } from "@/components/bathroom/bathroom-payment"
import { BathroomContact } from "@/components/bathroom/bathroom-contact"
import { Footer } from "@/components/footer"

export default function BathroomPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <BathroomHeroSection />
      <BathroomProcessSteps />
      <BathroomBlueProcess />
      <BathroomPortfolio />
      <BathroomTeam />
      <BathroomTestimonials />
      <BathroomGuarantees />
      <BathroomPrice />
      <BathroomWorks />
      <BathroomPartners />
      <BathroomPayment />
      <BathroomContact />
      <Footer />
    </div>
  )
}
