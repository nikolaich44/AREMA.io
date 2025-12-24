import { Check, Heart, Award } from "lucide-react"

const guarantees = [
  {
    icon: Award,
    title: "Гарантия 1 год",
    description: "На все виды работ",
  },
  {
    icon: Heart,
    title: "Надежность",
    description: "Качественные материалы",
  },
  {
    icon: Check,
    title: "Сертификаты",
    description: "Все работники сертифицированы",
  },
]

export function BathroomPrice() {
  return (
    <section className="py-20 bg-[#0066B3]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">Наши гарантии качества</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {guarantees.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-10 h-10 text-[#0066B3]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
              <p className="text-white/90">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
