import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    text: "The flower decorations for our wedding were absolutely breathtaking! Varpe Flower Decorators understood our vision perfectly and created a magical atmosphere. Highly recommended!",
    name: "Priya Sharma",
    label: "Happy Client",
  },
  {
    text: "Professional service and stunning flower arrangements. They made our daughter's wedding stage look like a dream. Thank you for making our special day even more beautiful!",
    name: "Rajesh Patel",
    label: "Happy Client",
  },
  {
    text: "From the initial consultation to the final setup, everything was perfect. The attention to detail and quality of flowers exceeded our expectations. Will definitely use their services again!",
    name: "Anjali Desai",
    label: "Happy Client",
  },
]

export default function Testimonials() {
  return (
    <section className="bg-secondary/30 py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50 bg-card shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mb-6 text-muted-foreground leading-relaxed text-pretty">{testimonial.text}</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
