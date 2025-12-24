import Image from "next/image"
import { Button } from "@/components/ui/button"

const projects = [
  {
    image: "/images/bathroom-1.jpg",
    title: "Современная ванная комната",
  },
  {
    image: "/images/bathroom-2.jpg",
    title: "Классический дизайн ванной",
  },
  {
    image: "/images/bathroom-3.jpg",
    title: "Минималистичная ванная",
  },
  {
    image: "/images/bathroom-4.jpg",
    title: "Ванная в светлых тонах",
  },
]

export function BathroomPortfolio() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Уже 931 красивых ванных</h2>
          <p className="text-gray-600">Наши последние проекты</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <h3 className="text-white font-semibold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-4">
          <Button className="bg-[#0066B3] hover:bg-[#0055A0] text-white px-8">Смотреть все работы</Button>
          <Button className="bg-[#FFD700] hover:bg-[#FFC700] text-gray-900 px-8">Заказать расчет</Button>
        </div>
      </div>
    </section>
  )
}
