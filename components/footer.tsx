import { Flower2, Facebook, Instagram, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Flower2 className="h-8 w-8" />
              <span className="font-serif text-2xl font-bold">Varpe</span>
            </div>
            <p className="text-sm leading-relaxed opacity-90">
              Creating beautiful floral memories for your special moments
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.instagram.com/varpe_flower_decorators"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/varpe_flower_decorators"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="mailto:nileshvarpe8420@gmail.com"
                className="opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="tel:+918169973150"
                className="opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300"
                aria-label="Phone"
              >
                <Phone className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="opacity-90 hover:opacity-100 transition-opacity">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="opacity-90 hover:opacity-100 transition-opacity">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="opacity-90 hover:opacity-100 transition-opacity">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-semibold">Contact Us</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Phone: +91 81699 73150</li>
              <li>Email: nileshvarpe8420@gmail.com</li>
              <li>Bhandup West, Mumbai, Maharashtra</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/20 pt-8 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} Varpe Flower Decorators. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
