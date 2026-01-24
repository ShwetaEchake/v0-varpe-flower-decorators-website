"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import dynamic from "next/dynamic"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import "yet-another-react-lightbox/styles.css"

const Lightbox = dynamic(
  () => import("yet-another-react-lightbox"),
  { ssr: false }
)

/* ------------------ DATA ------------------ */

const categories = [
    "all",
    "bouquet",
    "door-arrangement",
    "flower-toran",
    "ganpati",
    "photo-frame",
    "haar",
    // "toran",
    "buke",
    "car-decoration",
    "cuddle-decoration",
    "stage-decoration",
    "flower-doli",
    "bedroom-decoration",
    "ring-cross",
]

const labels = {
    all: "All",
    bouquet: "Bouquet",
    "door-arrangement": "Door Decor",
    "flower-toran": "Flower Toran",
    ganpati: "Ganpati Decoration",
    "photo-frame": "Photo Frame",
    haar: "Haar",
    // toran: "Toran",
    buke: "Buke",
    "car-decoration": "Car & Truck Decoration",
    "cuddle-decoration": "Cuddle Decoration",
    "stage-decoration": "Stage Decoration",
    "flower-doli": "Flower Doli",
    "bedroom-decoration": "Bedroom Decoration",
    "ring-cross": "Ring & Cross",
}

// const imagesData = [
//   { src: "/gallery-bouquet-1.jpg", title: "Red Rose Bouquet", category: "bouquet" },
//   { src: "/gallery-bouquet-2.jpg", title: "Mixed Bouquet", category: "bouquet" },

//   { src: "/gallery-door-arrangement-1.jpg", title: "Wedding Door", category: "door-arrangement" },

//   { src: "/gallery-flower-toran-1.jpg", title: "Flower Toran", category: "flower-toran" },

//   { src: "/gallery-ganpati-1.jpg", title: "Ganpati Decor", category: "ganpati" },

//   { src: "/gallery-stage-decoration-1.jpg", title: "Wedding Stage", category: "stage-decoration" },
//   { src: "/gallery-stage-decoration-2.jpg", title: "Reception Stage", category: "stage-decoration" },

//   { src: "/gallery-bedroom-decoration-1.jpg", title: "Romantic Bedroom", category: "bedroom-decoration" },

//   { src: "/gallery-car-decoration-1.jpg", title: "Wedding Car", category: "car-decoration" },
// ]

  const imagesData = [
    // Bouquet - 8 images
    { category: "bouquet", image: "/gallery-bouquet-1.jpg", title: "Red Rose Bouquet" },
    { category: "bouquet", image: "/gallery-bouquet-2.jpg", title: "Mixed Flower Bouquet" },
    { category: "bouquet", image: "/gallery-bouquet-3.jpg", title: "Bridal Bouquet" },
    { category: "bouquet", image: "/gallery-bouquet-4.jpg", title: "Tropical Bouquet" },
    { category: "bouquet", image: "/gallery-bouquet-5.jpg", title: "Sunset Bouquet" },
    { category: "bouquet", image: "/gallery-bouquet-6.jpg", title: "Garden Bouquet" },
    { category: "bouquet", image: "/gallery-bouquet-7.jpg", title: "Pastel Bouquet" },
    { category: "bouquet", image: "/gallery-bouquet-8.jpg", title: "Celebration Bouquet" },

    // Door Flower Arrangement - 8 images
    { category: "door-arrangement", image: "/gallery-door-arrangement-1.jpg", title: "Wedding Door" },
    { category: "door-arrangement", image: "/gallery-door-arrangement-2.jpg", title: "Festival Door" },
    { category: "door-arrangement", image: "/gallery-door-arrangement-3.jpg", title: "Pooja Door" },
    { category: "door-arrangement", image: "/gallery-door-arrangement-4.jpg", title: "Corporate Door" },
    { category: "door-arrangement", image: "/gallery-door-arrangement-5.jpg", title: "Modern Door" },
    { category: "door-arrangement", image: "/gallery-door-arrangement-6.jpg", title: "Luxury Door" },
    { category: "door-arrangement", image: "/gallery-door-arrangement-7.jpg", title: "Festive Door" },
    { category: "door-arrangement", image: "/gallery-door-arrangement-8.jpg", title: "White Door" },

    // Flower Toran - 8 images
    { category: "flower-toran", image: "/gallery-flower-toran-1.jpg", title: "Marigold Toran" },
    { category: "flower-toran", image: "/gallery-flower-toran-2.jpg", title: "Mixed Toran" },
    { category: "flower-toran", image: "/gallery-flower-toran-3.jpg", title: "Wedding Toran" },
    { category: "flower-toran", image: "/gallery-flower-toran-4.jpg", title: "Diwali Toran" },
    { category: "flower-toran", image: "/gallery-flower-toran-5.jpg", title: "Ceremony Toran" },
    { category: "flower-toran", image: "/gallery-flower-toran-6.jpg", title: "Grand Toran" },
    { category: "flower-toran", image: "/gallery-flower-toran-7.jpg", title: "Festive Toran" },
    { category: "flower-toran", image: "/gallery-flower-toran-8.jpg", title: "Auspicious Toran" },
    { category: "flower-toran", image: "/gallery-toran-1.jpg", title: "Entrance Toran" },
    { category: "flower-toran", image: "/gallery-toran-2.jpg", title: "Doorway Toran" },
    { category: "flower-toran", image: "/gallery-toran-3.jpg", title: "Wedding Toran" },
    { category: "flower-toran", image: "/gallery-toran-4.jpg", title: "Festival Toran" },
    { category: "flower-toran", image: "/gallery-toran-5.jpg", title: "Ceremony Toran" },
    { category: "flower-toran", image: "/gallery-toran-6.jpg", title: "Celebration Toran" },
    { category: "flower-toran", image: "/gallery-toran-7.jpg", title: "Grand Toran" },
    { category: "flower-toran", image: "/gallery-toran-8.jpg", title: "Artistic Toran" },


    // Ganpati Decoration - 8 images
    { category: "ganpati", image: "/gallery-ganpati-1.jpg", title: "Ganpati Chaturthi" },
    { category: "ganpati", image: "/gallery-ganpati-2.jpg", title: "Ganpati Mandap" },
    { category: "ganpati", image: "/gallery-ganpati-3.jpg", title: "Traditional Ganpati" },
    { category: "ganpati", image: "/gallery-ganpati-4.jpg", title: "Modern Ganpati" },
    { category: "ganpati", image: "/gallery-ganpati-5.jpg", title: "Grand Ganpati" },
    { category: "ganpati", image: "/gallery-ganpati-6.jpg", title: "Festive Ganpati" },
    { category: "ganpati", image: "/gallery-ganpati-7.jpg", title: "Artistic Ganpati" },
    { category: "ganpati", image: "/gallery-ganpati-8.jpg", title: "Luxury Ganpati" },

    // Photo Frame - 8 images
    { category: "photo-frame", image: "/gallery-photo-frame-1.jpg", title: "Wedding Frame" },
    { category: "photo-frame", image: "/gallery-photo-frame-2.jpg", title: "Celebration Frame" },
    { category: "photo-frame", image: "/gallery-photo-frame-3.jpg", title: "Engagement Frame" },
    { category: "photo-frame", image: "/gallery-photo-frame-4.jpg", title: "Milestone Frame" },
    { category: "photo-frame", image: "/gallery-photo-frame-5.jpg", title: "Backdrop Frame" },
    { category: "photo-frame", image: "/gallery-photo-frame-6.jpg", title: "Luxury Frame" },
    { category: "photo-frame", image: "/gallery-photo-frame-7.jpg", title: "Festive Frame" },
    { category: "photo-frame", image: "/gallery-photo-frame-8.jpg", title: "Artistic Frame" },

    // Haar - 8 images
    { category: "haar", image: "/gallery-haar-1.jpg", title: "Jasmine Haar" },
    { category: "haar", image: "/gallery-haar-2.jpg", title: "Rose Haar" },
    { category: "haar", image: "/gallery-haar-3.jpg", title: "Mixed Haar" },
    { category: "haar", image: "/gallery-haar-4.jpg", title: "Bridal Haar" },
    { category: "haar", image: "/gallery-haar-5.jpg", title: "Festival Haar" },
    { category: "haar", image: "/gallery-haar-6.jpg", title: "Luxury Haar" },
    { category: "haar", image: "/gallery-haar-7.jpg", title: "Wedding Haar" },
    { category: "haar", image: "/gallery-haar-8.jpg", title: "Ceremonial Haar" },

    // Buke - 8 images
    { category: "buke", image: "/gallery-buke-1.jpg", title: "Red Buke" },
    { category: "buke", image: "/gallery-buke-2.jpg", title: "White Buke" },
    { category: "buke", image: "/gallery-buke-3.jpg", title: "Pink Buke" },
    { category: "buke", image: "/gallery-buke-4.jpg", title: "Mixed Buke" },
    { category: "buke", image: "/gallery-buke-5.jpg", title: "Cascading Buke" },
    { category: "buke", image: "/gallery-buke-6.jpg", title: "Designer Buke" },
    { category: "buke", image: "/gallery-buke-7.jpg", title: "Exotic Buke" },
    { category: "buke", image: "/gallery-buke-8.jpg", title: "Traditional Buke" },

    // Car Decoration - 8 images
    { category: "car-decoration", image: "/gallery-car-decoration-1.jpg", title: "Wedding Car" },
    { category: "car-decoration", image: "/gallery-car-decoration-2.jpg", title: "Baraat Truck" },
    { category: "car-decoration", image: "/gallery-car-decoration-3.jpg", title: "Groom Car" },
    { category: "car-decoration", image: "/gallery-car-decoration-4.jpg", title: "Just Married" },
    { category: "car-decoration", image: "/gallery-car-decoration-5.jpg", title: "Luxury Car" },
    { category: "car-decoration", image: "/gallery-car-decoration-6.jpg", title: "Festive Car" },
    { category: "car-decoration", image: "/gallery-car-decoration-7.jpg", title: "Bride Groom Car" },
    { category: "car-decoration", image: "/gallery-car-decoration-8.jpg", title: "Grand Vehicle" },

    // Cuddle Decoration - 8 images
    { category: "cuddle-decoration", image: "/gallery-cuddle-decoration-1.jpg", title: "Romantic Bedroom" },
    { category: "cuddle-decoration", image: "/gallery-cuddle-decoration-2.jpg", title: "Anniversary Room" },
    { category: "cuddle-decoration", image: "/gallery-cuddle-decoration-3.jpg", title: "Proposal Setup" },
    { category: "cuddle-decoration", image: "/gallery-cuddle-decoration-4.jpg", title: "Honeymoon Room" },
    { category: "cuddle-decoration", image: "/gallery-cuddle-decoration-5.jpg", title: "Special Occasion" },
    { category: "cuddle-decoration", image: "/gallery-cuddle-decoration-6.jpg", title: "Luxury Romantic" },
    { category: "cuddle-decoration", image: "/gallery-cuddle-decoration-7.jpg", title: "Intimate Celebration" },
    { category: "cuddle-decoration", image: "/gallery-cuddle-decoration-8.jpg", title: "Couple Moment" },

    // Stage Decoration - 8 images
    { category: "stage-decoration", image: "/gallery-stage-decoration-1.jpg", title: "Wedding Mandap" },
    { category: "stage-decoration", image: "/gallery-stage-decoration-2.jpg", title: "Reception Backdrop" },
    { category: "stage-decoration", image: "/gallery-stage-decoration-3.jpg", title: "Engagement Stage" },
    { category: "stage-decoration", image: "/gallery-stage-decoration-4.jpg", title: "Corporate Event" },
    { category: "stage-decoration", image: "/gallery-stage-decoration-5.jpg", title: "Birthday Stage" },
    { category: "stage-decoration", image: "/gallery-stage-decoration-6.jpg", title: "Grand Entrance" },
    { category: "stage-decoration", image: "/gallery-stage-decoration-7.jpg", title: "Luxury Stage" },
    { category: "stage-decoration", image: "/gallery-stage-decoration-8.jpg", title: "Theatrical Stage" },

    // Flower Doli - 8 images
    { category: "flower-doli", image: "/gallery-flower-doli-1.jpg", title: "Traditional Doli" },
    { category: "flower-doli", image: "/gallery-flower-doli-2.jpg", title: "Modern Doli" },
    { category: "flower-doli", image: "/gallery-flower-doli-3.jpg", title: "Grand Doli" },
    { category: "flower-doli", image: "/gallery-flower-doli-4.jpg", title: "Pink White Doli" },
    { category: "flower-doli", image: "/gallery-flower-doli-5.jpg", title: "Luxury Doli" },
    { category: "flower-doli", image: "/gallery-flower-doli-6.jpg", title: "Colorful Doli" },
    { category: "flower-doli", image: "/gallery-flower-doli-7.jpg", title: "Artistic Doli" },
    { category: "flower-doli", image: "/gallery-flower-doli-8.jpg", title: "Ceremonial Doli" },

    // Bedroom Decoration - 8 images
    { category: "bedroom-decoration", image: "/gallery-bedroom-decoration-1.jpg", title: "Romantic Couple" },
    { category: "bedroom-decoration", image: "/gallery-bedroom-decoration-2.jpg", title: "Anniversary Night" },
    { category: "bedroom-decoration", image: "/gallery-bedroom-decoration-3.jpg", title: "Newlyweds" },
    { category: "bedroom-decoration", image: "/gallery-bedroom-decoration-4.jpg", title: "Valentine Special" },
    { category: "bedroom-decoration", image: "/gallery-bedroom-decoration-5.jpg", title: "Honeymoon Suite" },
    { category: "bedroom-decoration", image: "/gallery-bedroom-decoration-6.jpg", title: "Proposal Night" },
    { category: "bedroom-decoration", image: "/gallery-bedroom-decoration-7.jpg", title: "Special Occasion" },
    { category: "bedroom-decoration", image: "/gallery-bedroom-decoration-8.jpg", title: "Birthday Surprise" },

    // Ring and Cross - 8 images
    { category: "ring-cross", image: "/gallery-ring-cross-1.jpg", title: "Ring Pillow" },
    { category: "ring-cross", image: "/gallery-ring-cross-2.jpg", title: "Christian Cross" },
    { category: "ring-cross", image: "/gallery-ring-cross-3.jpg", title: "Ring Cushion" },
    { category: "ring-cross", image: "/gallery-ring-cross-4.jpg", title: "Altar Cross" },
    { category: "ring-cross", image: "/gallery-ring-cross-5.jpg", title: "Ring Decoration" },
    { category: "ring-cross", image: "/gallery-ring-cross-6.jpg", title: "Religious Cross" },
    { category: "ring-cross", image: "/gallery-ring-cross-7.jpg", title: "Luxury Ring" },
    { category: "ring-cross", image: "/gallery-ring-cross-8.jpg", title: "Artistic Ring Cross" },
  ]

/* ------------------ COMPONENT ------------------ */

export default function AdvancedGallery() {
  const [activeTab, setActiveTab] = useState("all")
  const [visible, setVisible] = useState(6)
  const [lightboxIndex, setLightboxIndex] = useState(-1)

  const filteredImages = useMemo(() => {
    const data =
      activeTab === "all"
        ? imagesData
        : imagesData.filter(img => img.category === activeTab)

    return data
  }, [activeTab])

  const slides = filteredImages.map(img => ({ src: img.image }))

  const visibleImages = filteredImages.slice(0, visible)

  return (
    <section className="bg-[#FEF9F4] py-14 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-3">Our Work 🪷</h2>
          <p className="text-muted-foreground">
            Beautiful decorations crafted with love
          </p>
        </div>

        {/* Tabs */}
        <div className="sticky top-16 bg-[#FEF9F4] z-10 py-3 mb-8">
          <div className="flex gap-2 overflow-x-auto md:flex-wrap md:justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => {
                  setActiveTab(cat)
                  setVisible(6)
                }}
                className={`px-5 py-2 rounded-full text-sm shrink-0 transition ${
                  activeTab === cat
                    ? "bg-primary text-white shadow"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {labels[cat]}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 1024: 4 }}>
          <Masonry gutter="16px">
            {visibleImages.map((img, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl shadow cursor-pointer group"
                onClick={() => setLightboxIndex(index)}
              >
                <Image
                  src={img.image}
                  alt={img.title}
                  width={500}
                  height={700}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-x-0 bottom-0 bg-black/60 p-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition">
                  <p className="text-white text-sm text-center">{img.title}</p>
                </div>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>

        {/* Load More */}
        {visible < filteredImages.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisible(v => v + 6)}
              className="px-6 py-3 rounded-full bg-primary text-white hover:opacity-90"
            >
              Load More
            </button>
          </div>
        )}

        {/* Lightbox */}
        <Lightbox
          open={lightboxIndex >= 0}
          close={() => setLightboxIndex(-1)}
          index={lightboxIndex}
          slides={slides}
        />

      </div>
    </section>
  )
}
