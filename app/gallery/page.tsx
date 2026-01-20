import Header from "@/components/header"
import Gallery from "@/components/gallery"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Gallery />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
