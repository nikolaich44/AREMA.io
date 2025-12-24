export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-white/80 text-center md:text-left text-xs">
            © AREMA профессиональный ремонт квартир в Москве и МО. ИНН 7716916083 ОГРН 1187746390631
          </p>
          <a href="/privacy" className="text-[#C9A05F] hover:text-[#B8904F] transition-colors underline text-xs">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  )
}
