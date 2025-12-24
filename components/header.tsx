import Link from "next/link"
import { Menu, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-4 py-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-white text-2xl font-bold tracking-[0.3em]">AREMA</div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 text-sm text-white/90">
            <Link href="/renovation" className="hover:text-white transition-colors">
              Ремонт квартир
            </Link>
            <Link href="/bathroom" className="hover:text-white transition-colors">
              Ремонт ванн
            </Link>
            <Link href="/interior" className="hover:text-white transition-colors">
              Дизайн интерьеров
            </Link>
            <Link href="/blog" className="hover:text-white transition-colors font-medium">
              Блог
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="tel:+74994507788"
              className="hidden md:flex items-center gap-2 text-white hover:text-[#C9A05F] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">+7 (499) 450 77 88</span>
            </a>
            <Button className="hidden md:flex bg-transparent border border-[#C9A05F] text-[#C9A05F] hover:bg-[#C9A05F] hover:text-white transition-all rounded-none px-6 text-sm">
              Заказать звонок
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden text-white">
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
