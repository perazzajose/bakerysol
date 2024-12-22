import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Instagram, MapPin, Phone } from 'lucide-react'
import { ProductCarousel } from '@/components/ui/product-carousel'

export default function Home() {
  const products = [
    
    {
      name: "Personalizada #1",
      description: "baby-torta decorada con crema, lazos rojos y corazones, ideal para celebrar momentos especiales con un toque personalizado",
      images: ["/images/babycake.jpeg"], // Una sola imagen
    },
    {
      name: "Budín de almendras",
      description: "horneado a la perfección, con almendras crocantes que aportan textura y sabor, perfectos para acompañar una merienda o regalar.",
      images: ["/images/budinalmendras.jpeg"], // Tres imágenes
    },
    {
      name: "Torta Durazno",
      description: "Una exquisita tarta con base de masa suave y un relleno cremoso, coronada con duraznos frescos y jugosos, perfecta para endulzar cualquier ocasión.",
      images: ["/images/amarillo.jpeg"],
    },
    {
      name: "Bizcochos artesanales",
      description: "Con una textura crujiente por fuera y suave por dentro, evocan el sabor auténtico de la repostería artesanal.",
      images: ["/images/bizcocho.jpg", 
        "/images/bizcocho2.jpg",
         "/images/bizcocho3.jpg"],
    },
    {
      name: "Pan Dulce",
      description: "Una irresistible versión con trozos de chocolate que hará que quieras repetir.",
      images: ["/images/pan_dulce.jpg",
         "/images/pan_dulce1.jpg"],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-pink-50">
      <header className="w-full px-4 lg:px-6 h-16 flex items-center border-b bg-white/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <Link className="flex items-center justify-center" href="#">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/467409671_8324193267708382_6662057589306396304_n.jpg-Q13W71mcxfkf6LNq6MZGtd4XMreswh.jpeg"
              alt="Logo de la Panadería"
              width={48}
              height={48}
              className="rounded-full"
            />
            <span className="sr-only">Dulces Sol</span>
          </Link>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#inicio">
              Inicio
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#productos">
              Productos
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contacto">
              Contacto
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 w-full">
        <section id="inicio" className="w-full py-12 md:py-24 lg:py-32 bg-pink-100/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Dulces Sol
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Horneado con amor para endulzar tus momentos especiales. Postres artesanales hechos con los mejores
                  ingredientes.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-pink-600 hover:bg-pink-700" asChild>
                  <Link href="#productos">Ver Productos</Link>
                </Button>
                <Button variant="outline" className="border-pink-200 hover:bg-pink-100" asChild>
                  <Link href="#contacto">Contáctanos</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="productos" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Productos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {products.map((product) => (
                <Card key={product.name} className="hover:shadow-lg transition-shadow duration-200 bg-white/70 w-full max-w-sm mx-auto">
                  <CardContent className="p-4">
                    <ProductCarousel 
                      images={product.images} 
                      alt={product.name}
                    />
                    <h3 className="text-xl font-bold mt-4">{product.name}</h3>
                    <p className="text-muted-foreground">{product.description}</p>
                    
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="contacto" className="w-full py-12 md:py-24 lg:py-32 bg-pink-100/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Contáctanos</h2>
                <p className="text-muted-foreground">
                  ¿Tienes alguna pregunta o quieres hacer un pedido especial? No dudes en contactarme.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    <p>Mtvdeo</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    <p> <a href="https://api.whatsapp.com/send/?phone=%2B59892341842&text&type=phone_number&app_absent=0">092 341 842</a></p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Instagram className="h-5 w-5" />
                    <p><a href="https://www.instagram.com/dulcesolcito21/?hl=gu">@dulcesolcito21</a></p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Nombre
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tu nombre"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Email
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="tu@email.com"
                      type="email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Mensaje
                  </label>
                  <textarea
                    className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tu mensaje..."
                  />
                </div>
                <Button className="w-full bg-pink-600 hover:bg-pink-700">Enviar Mensaje</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 px-4 md:px-6 border-t bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">© 2024 Dulces Momentos. Todos los derechos reservados.</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Términos de Servicio
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Política de Privacidad
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

