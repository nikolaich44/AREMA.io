import { Button } from "@/components/ui/button"
import Image from "next/image"

export function BathroomPayment() {
  return (
    <section className="py-20 bg-[#0066B3]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Удобная оплата
              <br />и рассрочка без процентов
            </h2>
            <p className="text-white/90 mb-8 leading-relaxed">
              Предлагаем гибкие условия оплаты: наличный и безналичный расчет, оплата по этапам работ, рассрочка до 12
              месяцев без процентов.
            </p>
            <Button className="bg-[#FFD700] hover:bg-[#FFC700] text-gray-900 font-bold px-8 py-6">
              Узнать условия
            </Button>
          </div>
          <div>
            <Image src="/images/worker-happy.jpg" alt="Работник" width={400} height={500} className="w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
