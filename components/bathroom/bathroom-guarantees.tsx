import { Button } from "@/components/ui/button"

export function BathroomGuarantees() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Ваш ремонт начинается
            <br />с бесплатного замера и расчета
          </h2>
          <p className="text-center text-gray-600 mb-12">Оставьте заявку и получите смету в течение 24 часов</p>
          <div className="bg-white border-4 border-[#FFD700] p-8 max-w-2xl mx-auto">
            <form className="space-y-4">
              <input type="text" placeholder="Ваше имя" className="w-full px-4 py-3 border border-gray-300 rounded" />
              <input type="tel" placeholder="Телефон" className="w-full px-4 py-3 border border-gray-300 rounded" />
              <Button className="w-full bg-[#FFD700] hover:bg-[#FFC700] text-gray-900 font-bold py-6 text-lg">
                Получить расчет стоимости
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
