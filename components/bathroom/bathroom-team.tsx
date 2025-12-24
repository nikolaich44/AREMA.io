import Image from "next/image"

const teamMembers = [
  {
    name: "Алексей",
    role: "Мастер-плиточник",
    image: "/images/team-1.jpg",
  },
  {
    name: "Дмитрий",
    role: "Сантехник",
    image: "/images/team-2.jpg",
  },
  {
    name: "Сергей",
    role: "Электрик",
    image: "/images/team-3.jpg",
  },
]

export function BathroomTeam() {
  return (
    <section className="py-20 bg-[#2C2C2C] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Только работа мастеров
            <br />
            со стажем более 7 лет
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <Image
                src="/images/team-leader.jpg"
                alt="Руководитель"
                width={400}
                height={500}
                className="w-full rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Мы лично работаем с каждой
                <br />
                командой и следим за качеством
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Все наши мастера имеют профильное образование и большой опыт работы. Мы проводим регулярное обучение и
                контролируем качество на каждом этапе.
              </p>
              <div className="flex gap-4">
                {teamMembers.map((member, index) => (
                  <div key={index} className="text-center">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-full mb-2 object-cover"
                    />
                    <div className="text-sm font-semibold">{member.name}</div>
                    <div className="text-xs text-gray-400">{member.role}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
