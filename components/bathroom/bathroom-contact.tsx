import { MapPin, Phone, Mail } from "lucide-react"

export function BathroomContact() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Как нас найти</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-gray-800 h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.5!2d37.6173!3d55.7558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ1JzIwLjkiTiAzN8KwMzcnMDIuMyJF!5e0!3m2!1sru!2sru!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Контактная информация</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-1 text-[#FFD700]" />
                    <div>
                      <p className="font-semibold">Адрес офиса:</p>
                      <p className="text-gray-300">г. Москва, ул. Примерная, д. 1</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 mt-1 text-[#FFD700]" />
                    <div>
                      <p className="font-semibold">Телефон:</p>
                      <p className="text-gray-300">+7 (499) 450 77 88</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 mt-1 text-[#FFD700]" />
                    <div>
                      <p className="font-semibold">Email:</p>
                      <p className="text-gray-300">info@arema.ru</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#FFD700] p-6 rounded-lg text-gray-900">
                <p className="font-bold text-lg mb-2">Режим работы:</p>
                <p>Пн-Пт: 9:00 - 20:00</p>
                <p>Сб-Вс: 10:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
