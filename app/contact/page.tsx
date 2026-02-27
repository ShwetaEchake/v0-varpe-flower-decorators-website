import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="bg-background py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-5xl">
            <h1 className="mb-8 font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl text-center text-balance">
              Contact Us 💐 
            </h1>
            <p className="mb-12 text-center text-lg text-muted-foreground md:text-xl text-pretty">
              Get in touch with us for all your flower decoration needs. We're here to make your special moments
              beautiful.
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              {/* Contact Information */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-accent/10 p-3">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-serif text-lg font-semibold text-foreground">Phone</h3>
                    <a href="tel:+918169973150" className="text-muted-foreground hover:text-accent transition-colors">
                      +91 81699 73150
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-accent/10 p-3">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-serif text-lg font-semibold text-foreground">Email</h3>
                    <a
                      href="mailto:nileshvarpe8420@gmail.com"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      nileshvarpe8420@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-accent/10 p-3">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-serif text-lg font-semibold text-foreground">Location</h3>
                    <p className="text-muted-foreground">
                      Tank Rd, near Lodha Imperia, Valmik Nagar,
                      <br />
                      Bhandup West, Mumbai, Maharashtra 400078
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-accent/10 p-3">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-serif text-lg font-semibold text-foreground">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Sunday: 10:00 AM - 10:00 PM
                      <br />
                      Available for emergency bookings
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="rounded-2xl bg-muted/50 p-6 md:p-8">
                <h3 className="mb-6 font-serif text-2xl font-semibold text-foreground">Send us a message</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full rounded-lg border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      style={{ borderColor: 'hsl(var(--border))' }}
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-lg border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      style={{ borderColor: 'hsl(var(--border))' }}
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full rounded-lg border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      style={{ borderColor: 'hsl(var(--border))' }}
                      placeholder="Enter your phone"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full rounded-lg border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      style={{ borderColor: 'hsl(var(--border))' }}
                      placeholder="Tell us about your event and requirements"
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="mb-6 font-serif text-2xl font-semibold text-foreground text-center">Find Us Here</h2>
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.6157826739847!2d72.93499931490254!3d19.154099387045564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8e1b5d5d5d5%3A0x1b5d5d5d5d5d5d5d!2sTank%20Rd%2C%20near%20Lodha%20Imperia%2C%20Valmik%20Nagar%2C%20Bhandup%20West%2C%20Mumbai%2C%20Maharashtra%20400078!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Varpe Flower Decorators Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
