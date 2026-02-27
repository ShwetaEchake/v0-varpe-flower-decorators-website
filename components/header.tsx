"use client"

import { Flower2, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"
// import Image from "next/image"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Flower2 className="h-6 w-6 text-accent transition-transform group-hover:scale-110" />
            {/* <Image
              src="/varpe-logo.jpg"
              alt="Varpe Flower Decorators"
              width={48}
              height={48}
              className="object-contain"
            /> */}
            <span className="font-serif text-xl font-bold text-foreground">Varpe Flower Decorators</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors">
              About Us
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
            >
              Contact Us
            </Link>
            <Link href="/contact">
              <Button size="sm" className="ml-2">
                Book Now
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/gallery"
                className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button size="sm" className="w-full mt-2">
                  Book Now
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
