import { Sparkles, Award, Clock, Users } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: "Premium Quality",
      description:
        "We use only the freshest and finest flowers to create stunning decorations that exceed expectations.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Our experienced decorators bring creativity and professionalism to every event, ensuring perfection.",
    },
    {
      icon: Clock,
      title: "Timely Service",
      description: "We understand deadlines matter. Count on us for punctual setup and flawless execution every time.",
    },
    {
      icon: Sparkles,
      title: "Custom Designs",
      description:
        "Every decoration is tailored to your vision, creating unique and memorable experiences for your special moments.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-forest mb-4">Why Choose Us</h2>
          <p className="text-forest/70 text-lg max-w-2xl mx-auto">
            Experience the difference with Varpe Flower Decorators - where elegance meets excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div key={index} className="text-center p-6 rounded-lg hover:bg-cream/50 transition-colors duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-peach/20 mb-4">
                  <Icon className="w-8 h-8 text-peach" />
                </div>
                <h3 className="font-serif text-xl text-forest mb-3">{reason.title}</h3>
                <p className="text-forest/70 leading-relaxed">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
