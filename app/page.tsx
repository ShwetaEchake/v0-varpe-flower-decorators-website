import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Stats from "@/components/stats"
import WhyChooseUs from "@/components/why-choose-us"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Stats />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
