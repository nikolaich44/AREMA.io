import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[75vh] flex items-center justify-start overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero-background.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight uppercase">
            БУДЬТЕ В КУРСЕ <span className="text-[#C9A05F]">актуальных новостей</span>
            <br />в мире ремонта и дизайна
          </h1>

          <p className="text-white text-base mb-8 leading-relaxed uppercase tracking-wide">
            ПОДПИШИТЕСЬ НА НАШУ РАССЫЛКУ И ПОЛУЧИТЕ
            <br />
            БОНУС: СКИДКА 20% НА ВСЕ УСЛУГИ КОМПАНИИ
          </p>

          <Button className="bg-transparent border-2 border-[#C9A05F] text-[#C9A05F] hover:bg-[#C9A05F] hover:text-white transition-all duration-300 px-10 py-6 text-base font-normal rounded-full">
            Быть в курсе
          </Button>
        </div>
      </div>
    </section>
  )
}
