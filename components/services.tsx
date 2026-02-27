import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const services = [
  {
    title: "Car Decoration",
    image: "/car-decorated-with-flowers-for-wedding.jpg",
  },
  {
    title: "Wedding Garland",
    image: "/traditional-indian-wedding-garland-with-roses.jpg",
  },
  {
    title: "Flower Bouquets",
    image: "/elegant-mixed-flower-bouquet-in-soft-pastel-colors.jpg",
  },
  {
    title: "Pooja Flowers",
    image: "/fresh-flowers-for-hindu-prayer-ceremony.jpg",
  },
  {
    title: "Flower Rangoli",
    image: "/colorful-flower-rangoli-pattern.jpg",
  },
  {
    title: "Door Decoration",
    image: "/flower-garland-decoration-for-entrance-door.jpg",
  },
  {
    title: "Home Decoration",
    image: "/floral-home-interior-decoration.jpg",
  },
  {
    title: "Flower Toran",
    image: "/traditional-indian-flower-toran-for-doorway.jpg",
  },
  {
    title: "Haldi / Mehendi Flower Decoration",
    image: "/yellow-marigold-flower-decoration-for-haldi-ceremo.jpg",
  },
  {
    title: "Photo Frame Decoration",
    image: "/flower-decorated-photo-frame-for-wedding.jpg",
  },
  {
    title: "Ganpati Flower Decoration",
    image: "/flower-decoration-for-ganesh-idol.jpg",
  },
  {
    title: "Flower Jewellery",
    image: "/fresh-flower-jewelry-necklace-and-bangles.jpg",
  },
  {
    title: "Wedding Stage Decoration",
    image: "/elegant-wedding-stage-with-flower-decoration.jpg",
  },
  {
    title: "Baby Palna Decoration",
    image: "/baby-cradle-decorated-with-flowers.jpg",
  },
  {
    title: "First Night Decoration",
    image: "/romantic-bedroom-flower-decoration-setup.jpg",
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-secondary/30 py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
            Our Services 🌸
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-card shadow-sm hover:shadow-xl transition-all duration-300"
              style={{ borderColor: 'hsl(var(--border) / 0.5)' }}
            >
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-center text-lg font-semibold text-foreground">{service.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
