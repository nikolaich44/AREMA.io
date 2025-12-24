import { Droplets, Shield, Clock } from "lucide-react"

const features = [
  {
    icon: Droplets,
    title: "Влажная уборка",
    description: "Ежедневная уборка помещения после работ",
  },
  {
    icon: Shield,
    title: "Гарантия качества",
    description: "1 год гарантии на все виды работ",
  },
  {
    icon: Clock,
    title: "Точные сроки",
    description: "Соблюдение договорных сроков ремонта",
  },
]

export function BathroomBlueProcess() {
  return (
    <section className="py-20 bg-[#0066B3]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">Почему выбирают нас</h2>
        <p className="text-center text-white/90 mb-16 max-w-2xl mx-auto">Профессиональный подход к каждому проекту</p>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-white/90">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
