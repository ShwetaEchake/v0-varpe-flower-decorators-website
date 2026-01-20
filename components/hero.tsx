import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left side - Text content */}
          <div className="flex flex-col justify-center space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
                “Turning Flowers Into Feelings”
                {/* Varpe Flower Decorators */}
              </h1>
              <p className="text-xl text-muted-foreground md:text-2xl lg:text-3xl font-light text-balance">
                We make moments bloom 😊
              </p>
            </div>
            <div>
              <Button
                size="lg"
                className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Explore Services
              </Button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative aspect-square lg:aspect-auto lg:h-[600px]">
            <div className="relative h-full w-full overflow-hidden rounded-3xl">
              <Image
                src="/elegant-flower-bouquet-with-roses-and-peonies-in-s.jpg"
                alt="Beautiful flower bouquet arrangement"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
