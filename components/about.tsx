import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="bg-background py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance text-center md:text-left">
              About Us 🌻
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p className="text-pretty">
                At Varpe Flower Decorators, we believe that flowers have the power to transform ordinary moments into
                extraordinary memories. With years of experience in the art of floral decoration, we specialize in
                creating stunning arrangements for weddings, celebrations, and special occasions.
              </p>
              <p className="text-pretty">
                Our passion lies in understanding your vision and bringing it to life with fresh, beautiful flowers.
                From traditional ceremonies to modern celebrations, we craft each design with meticulous attention to
                detail and a deep appreciation for the cultural significance of floral artistry.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/premium-flower-arrangement-roses-orchids.jpg"
              alt="Premium flower arrangement with roses and orchids"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
