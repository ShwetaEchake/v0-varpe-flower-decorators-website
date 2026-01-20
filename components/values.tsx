import { Heart, Award, Users, Sparkles } from "lucide-react"

export default function Values() {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "We pour our heart into every arrangement, treating each event as if it were our own celebration.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards of quality, using only fresh flowers and premium materials.",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your satisfaction is our priority. We listen, understand, and deliver beyond expectations.",
    },
    {
      icon: Sparkles,
      title: "Creativity",
      description: "We bring innovative ideas and artistic vision to create unique, memorable floral designs.",
    },
  ]

  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            Our Values
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl text-pretty">
            The principles that guide everything we do
          </p>
        </div>
        <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <div
              key={index}
              className="group text-center bg-background rounded-2xl p-6 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-peach/20 text-peach transition-colors group-hover:bg-peach group-hover:text-white">
                <value.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-3 font-serif text-xl font-bold text-foreground">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
