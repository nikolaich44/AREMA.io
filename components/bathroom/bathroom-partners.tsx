import Image from "next/image"

const partners = [
  { name: "Kerama Marazzi", logo: "/images/partner-1.jpg" },
  { name: "Grohe", logo: "/images/partner-2.jpg" },
  { name: "Roca", logo: "/images/partner-3.jpg" },
  { name: "Hansgrohe", logo: "/images/partner-4.jpg" },
]

export function BathroomPartners() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Официальные партнеры</h2>
        <p className="text-center text-gray-600 mb-12">Работаем с ведущими производителями</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={150}
                height={80}
                className="object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
