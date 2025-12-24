import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function BlogSidebar() {
  const categories = [
    { name: "Лайфхаки", count: 12 },
    { name: "Дизайн интерьеров", count: 45 },
    { name: "Ремонт от а до я", count: 28 },
  ]

  const tags = [
    "Минимализм",
    "Лофт",
    "Поп-арт",
    "Освещение",
    "Классика",
    "Кухня",
    "Уют дом",
    "Спальня",
    "Прихожая",
    "Экология",
    "Эко",
  ]

  const popularPosts = [
    {
      title: "Интерьер 2020 года: актуальное в дизайне квартир и домов",
      date: "Январь 12, 2020",
    },
    {
      title: "Авторский дизайн интерьеров для элитных квартир и домов",
      date: "Январь 05, 2020",
    },
    {
      title: "Индустриальный стиль: интерьер с применением отличным",
      date: "Январь 24, 2020",
    },
  ]

  return (
    <aside className="space-y-8">
      {/* Search */}
      <Card className="shadow-sm border-border">
        <CardContent className="p-4">
          <div className="relative">
            <Input type="search" placeholder="Поиск по статьям" className="pr-12 bg-[#F5F5F5] border-0" />
            <Button size="icon" className="absolute right-1 top-1 bg-[#C9A05F] hover:bg-[#B8904F] h-9 w-9">
              <Search className="w-4 h-4 text-white" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card className="shadow-sm border-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-xl font-bold">Рубрики</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-foreground/70 hover:text-[#C9A05F] transition-colors text-sm">
                Лайфхаки
              </a>
            </li>
            <li className="pl-4 border-l-2 border-[#C9A05F]">
              <a href="#" className="text-[#C9A05F] font-medium text-sm">
                Дизайн интерьеров
              </a>
            </li>
            <li>
              <a href="#" className="text-foreground/70 hover:text-[#C9A05F] transition-colors text-sm">
                Ремонт от а до я
              </a>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Tags */}
      <Card className="shadow-sm border-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-xl font-bold">Теги</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Button
                key={tag}
                variant="outline"
                size="sm"
                className="text-xs hover:bg-[#C9A05F] hover:text-white hover:border-[#C9A05F] transition-colors bg-white border-border rounded-sm px-3 py-1 h-auto"
              >
                {tag}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Popular Posts */}
      <Card className="shadow-sm border-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-xl font-bold">Популярные статьи</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <ul className="space-y-5">
            {popularPosts.map((post, index) => (
              <li key={index} className="border-b border-border pb-4 last:border-0 last:pb-0">
                <a href="#" className="group">
                  <h4 className="font-medium text-sm text-foreground group-hover:text-[#C9A05F] transition-colors leading-relaxed mb-2">
                    {post.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">{post.date}</p>
                </a>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </aside>
  )
}
