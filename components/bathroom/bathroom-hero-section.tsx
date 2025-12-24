export function BathroomHeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center bg-gray-900">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/bathroom-hero.jpg')",
          opacity: 0.4,
        }}
      />
      <div className="container relative z-10 mx-auto px-4 py-32 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">РЕМОНТ ванных комнат и санузлов</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Капитальный ремонт под ключ с гарантией 1 год</p>
      </div>
    </section>
  )
}
