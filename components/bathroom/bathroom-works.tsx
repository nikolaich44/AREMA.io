import Image from "next/image"

export function BathroomWorks() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Готовые и новые работы</h2>
        <p className="text-center text-gray-600 mb-12">Примеры наших проектов по ремонту ванных комнат</p>
        <div className="max-w-5xl mx-auto">
          <Image
            src="/images/bathroom-showcase.jpg"
            alt="Примеры работ"
            width={1200}
            height={600}
            className="w-full rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}
