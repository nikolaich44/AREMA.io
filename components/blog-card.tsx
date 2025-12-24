import Image from "next/image"
import Link from "next/link"
import { Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface BlogCardProps {
  image: string
  title: string
  excerpt: string
  author: string
  readTime: string
  date: string
}

export function BlogCard({ image, title, excerpt, author, readTime, date }: BlogCardProps) {
  return (
    <Card className="overflow-hidden border border-border shadow-none hover:shadow-md transition-shadow duration-300 bg-white">
      <CardContent className="p-0">
        <div className="grid md:grid-cols-[320px_1fr] gap-0">
          <div className="relative h-64 md:h-[280px] overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="p-8 flex flex-col justify-between bg-white">
            <div>
              <Link href="#" className="block mb-3">
                <h3 className="text-xl font-bold text-foreground hover:text-[#C9A05F] transition-colors leading-tight">
                  {title}
                </h3>
              </Link>

              <p className="text-sm text-muted-foreground mb-4 italic">{date}</p>

              <p className="text-sm text-foreground/70 leading-relaxed line-clamp-4 mb-6">{excerpt}</p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="flex items-center gap-6 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Время чтения: {readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-3.5 h-3.5" />
                  <span>Автор: {author}</span>
                </div>
              </div>

              <Button className="text-[#C9A05F] hover:text-[#B8904F] font-medium text-sm bg-transparent p-0 h-auto underline hover:no-underline">
                Читать далее
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
