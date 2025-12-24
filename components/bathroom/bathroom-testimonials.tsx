import Image from "next/image"

const testimonials = [
  {
    text: "Делали ремонт ванной комнаты. Очень довольны результатом! Работы выполнены качественно и в срок.",
    author: "Мария К.",
    date: "15 января 2024",
    image: "/images/bathroom-result-1.jpg",
  },
  {
    text: "Профессиональная команда. Все этапы работы согласовывались, замечаний нет. Рекомендую!",
    author: "Андрей П.",
    date: "3 февраля 2024",
    image: "/images/bathroom-result-2.jpg",
  },
  {
    text: "Отличное соотношение цены и качества. Ванная получилась современной и функциональной.",
    author: "Елена С.",
    date: "20 февраля 2024",
    image: "/images/bathroom-result-3.jpg",
  },
]

export function BathroomTestimonials() {
  return (
    <section className="py-20 bg-[#0066B3]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">Что говорят наши клиенты</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-[#FFD700] p-6 relative">
                  <div className="absolute -left-3 top-6 w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#FFD700] border-b-8 border-b-transparent" />
                  <p className="text-gray-900 mb-4 leading-relaxed">{testimonial.text}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-900">{testimonial.author}</span>
                    <span className="text-sm text-gray-700">{testimonial.date}</span>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <Image
                src="/images/happy-couple.jpg"
                alt="Довольные клиенты"
                width={500}
                height={600}
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
