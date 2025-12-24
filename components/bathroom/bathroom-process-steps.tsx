import Image from "next/image"

const steps = [
  {
    number: "01",
    title: "Демонтаж старого покрытия",
    description: "Профессиональный демонтаж сантехники, плитки и старых коммуникаций с вывозом мусора",
  },
  {
    number: "02",
    title: "Замена коммуникаций",
    description: "Прокладка новых труб водоснабжения, канализации и электрики согласно проекту",
  },
  {
    number: "03",
    title: "Выравнивание и гидроизоляция",
    description: "Профессиональная гидроизоляция пола и стен, выравнивание поверхностей",
  },
  {
    number: "04",
    title: "Укладка плитки и установка сантехники",
    description: "Облицовка стен и пола плиткой, установка новой сантехники и аксессуаров",
  },
]

export function BathroomProcessSteps() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Процесс создания идеальной ванны</h2>
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <Image
                  src="/images/worker-icon.jpg"
                  alt="Работник"
                  width={80}
                  height={120}
                  className="object-contain"
                />
              </div>
              <div className="bg-[#FFD700] p-6 flex-1 relative">
                <div className="absolute -left-3 top-6 w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#FFD700] border-b-8 border-b-transparent" />
                <div className="text-5xl font-bold text-gray-800 mb-2">{step.number}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-800 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
