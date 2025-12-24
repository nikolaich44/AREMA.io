import { BlogCard } from "@/components/blog-card"

const articles = [
  {
    id: 1,
    image: "/modern-living-room-interior-with-gray-sofa-and-pla.jpg",
    title: "Интерьер 2020 года: актуальное в дизайне квартир и домов",
    excerpt:
      "Тенденция оформления жилых пространств привнесенствующих последние несколько лет, наиболее сохраняя позиции, но что количество построек в новом сезоне не показались. Дизайнерская часть продолжает развиваться в сторону создания максимально комфортной для человека среды, отходя - использование натуральных материалов, природной палитры, простейхованных избыт...",
    author: "Александра Яковлев",
    readTime: "2 мин",
    date: "Январь 12, 2020",
  },
  {
    id: 2,
    image: "/luxury-interior-with-green-velvet-sofa-and-gold-ac.jpg",
    title: "Интерьер 2020 года: актуальное в дизайне квартир и домов",
    excerpt:
      "Тенденция оформления жилых пространств привнесенствующих последние несколько лет, наиболее сохраняя позиции, но что количество построек в новом сезоне не показались. Дизайнерская часть продолжает развиваться в сторону создания максимально комфортной для человека среды, отходя - использование натуральных материалов, природной палитры, простейхованных избыт...",
    author: "Александра Яковлев",
    readTime: "2 мин",
    date: "Январь 12, 2020",
  },
  {
    id: 3,
    image: "/modern-turquoise-kitchen-with-white-bar-stools.jpg",
    title: "Интерьер 2020 года: актуальное в дизайне квартир и домов",
    excerpt:
      "Тенденция оформления жилых пространств привнесенствующих последние несколько лет, наиболее сохраняя позиции, но что количество построек в новом сезоне не показались. Дизайнерская часть продолжает развиваться в сторону создания максимально комфортной для человека среды, отходя - использование натуральных материалов, природной палитры, простейхованных избыт...",
    author: "Александра Яковлев",
    readTime: "2 мин",
    date: "Январь 12, 2020",
  },
  {
    id: 4,
    image: "/modern-wooden-kitchen-with-warm-lighting.jpg",
    title: "Интерьер 2020 года: актуальное в дизайне квартир и домов",
    excerpt:
      "Тенденция оформления жилых пространств привнесенствующих последние несколько лет, наиболее сохраняя позиции, но что количество построек в новом сезоне не показались. Дизайнерская часть продолжает развиваться в сторону создания максимально комфортной для человека среды, отходя - использование натуральных материалов, природной палитры, простейхованных избыт...",
    author: "Александра Яковлев",
    readTime: "2 мин",
    date: "Январь 12, 2020",
  },
]

export function BlogArticles() {
  return (
    <div className="space-y-8">
      {articles.map((article) => (
        <BlogCard key={article.id} {...article} />
      ))}

      <div className="flex justify-center items-center gap-1 pt-12">
        <button className="w-9 h-9 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors text-sm">
          ←
        </button>
        <button className="w-9 h-9 flex items-center justify-center bg-foreground text-white font-medium text-sm">
          1
        </button>
        <button className="w-9 h-9 flex items-center justify-center text-foreground hover:bg-muted transition-colors text-sm">
          2
        </button>
        <button className="w-9 h-9 flex items-center justify-center text-foreground hover:bg-muted transition-colors text-sm">
          3
        </button>
        <button className="w-9 h-9 flex items-center justify-center text-foreground hover:bg-muted transition-colors text-sm">
          4
        </button>
        <button className="w-9 h-9 flex items-center justify-center text-foreground hover:bg-muted transition-colors text-sm">
          5
        </button>
        <button className="w-9 h-9 flex items-center justify-center text-foreground hover:bg-muted transition-colors text-sm">
          6
        </button>
        <button className="w-9 h-9 flex items-center justify-center text-foreground hover:bg-muted transition-colors text-sm">
          7
        </button>
        <button className="w-9 h-9 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors text-sm">
          →
        </button>
      </div>
    </div>
  )
}
