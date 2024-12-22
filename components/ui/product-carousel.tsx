'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from "@/lib/utils"

interface ProductCarouselProps {
  images: string[]
  alt: string
}

export function ProductCarousel({ images, alt }: ProductCarouselProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 3000) // Cambia imagen cada 3 segundos

    return () => clearInterval(timer)
  }, [images.length])

  if (images.length === 1) {
    return (
      <div className="relative w-full h-[300px]">
        <Image
          src={images[0]}
          alt={alt}
          width={400}
          height={300}
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
    )
  }

  return (
    <div className="relative w-full h-[300px] group">
      {images.map((image, index) => (
        <div
          key={image}
          className={cn(
            "absolute top-0 left-0 w-full h-full transition-opacity duration-300",
            index === current ? "opacity-100" : "opacity-0"
          )}
        >
          <Image
            src={image}
            alt={`${alt} ${index + 1}`}
            width={400}
            height={300}
            className="rounded-lg object-cover w-full h-[300px]"
          />
        </div>
      ))}
      
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-colors",
              index === current ? "bg-white" : "bg-white/50"
            )}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>

      <button
        onClick={() => setCurrent((prev) => (prev - 1 + images.length) % images.length)}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Anterior imagen"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Siguiente imagen"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  )
}

