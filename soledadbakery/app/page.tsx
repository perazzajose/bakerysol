import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, Phone } from 'lucide-react'
import { ProductCarousel } from '@/components/ui/product-carousel'


export default function Home() {
  const products = [
    {
      name: "no me gusta la leche",
      description: "el chantilly es un asco",
      price: "$15.000",
      images: ["/images/algorosado.jpg", "/images/tortafrutilla.jpg"], // Multiple imágenes
    },
    {
      name: "trota de futrilla",
      description: "frutilla papi q mas",
      price: "$18.000",
      images: ["/images/tortafrutilla.jpg"], // Una sola imagen
    },
    {
      name: "una torta roja pastion roja diabolicamente roja",
      description: "todo muy rojo",
      price: "$8.000",
      images: ["/images/tortaroja.jpg"], // Tres imágenes
    },
    {
      name: "yo que se",
      description: "quien vrga sera ramon navarro",
      price: "$12.000",
      images: ["/images/ramonnavarro.jpg"],
    },
    {
      name: "yo que se",
      description: "Clásico pie de limón con merengue italiano",
      price: "$16.000",
      images: ["/placeholder.svg?height=200&width=300"],
    },
    {
      name: "Alfajores",
      description: "Pack de 12 alfajores rellenos de manjar",
      price: "$10.000",
      images: ["/placeholder.svg?height=200&width=300"],
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
            <span className="sr-only">Dulce Sol</span>
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
        <section id="inicio" className="w-full py-12 md:py-24 lg:py-32 bg-pink-100/50 ">
        <div
    style={{
      backgroundImage: "url('/images/background.jpg')", // Asegúrate de que la ruta sea correcta
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'blur(8px)', // Aplica desenfoque
    }}
    
  ></div>

           <div className="relative z-10 container mx-auto px-4 md:px-6">
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
          <Link href="#contacto">Contáctame</Link>
        </Button>
      </div>
    </div>
  </div>
</section>
        <section id="productos" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Nuestros Productos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card key={product.name} className="hover:shadow-lg transition-shadow duration-200 bg-white/70">
                  <CardContent className="p-4">
                    <ProductCarousel 
                      images={product.images} 
                      alt={product.name}
                    />
                    <h3 className="text-xl font-bold mt-4">{product.name}</h3>
                    <p className="text-muted-foreground">{product.description}</p>
                    <p className="font-bold mt-2">{product.price}</p>
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
                    <p>Calle falsa 123, Ciudad falsa</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    <p>091 111 111</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    <p>contacto@dulcesol.com</p>
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
          <p className="text-xs text-muted-foreground">© 2024 Dulces Sol. Todos los derechos reservados.</p>
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

