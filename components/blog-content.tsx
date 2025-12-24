import { BlogArticles } from "@/components/blog-articles"
import { BlogSidebar } from "@/components/blog-sidebar"

export function BlogContent() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">Дизайн интерьера</h2>

        <div className="grid lg:grid-cols-[1fr_350px] gap-12">
          <BlogArticles />
          <BlogSidebar />
        </div>
      </div>
    </section>
  )
}
