import { Mail, Phone, Smartphone, MapPin } from "lucide-react"

export default function ContactCard() {
  return (
    <div
      className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-4 md:p-6 shadow-lg w-full max-w-2xl mx-auto text-white opacity-0 animate-fade-in-up"
      style={{ animationDelay: "1s" }}
    >
      <h3 className="text-xl md:text-2xl font-semibold mb-4">Contact Us</h3>
      <ul className="space-y-4 text-sm md:text-base">
        <li className="flex items-start">
          <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
          <div>
            <p>〒102-0074</p>
            <p>東京都千代田区九段南3-3-18</p>
            <p>アシスト九段ビル4F リストメーカー内</p>
          </div>
        </li>
        <li className="flex items-center">
          <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
          <a href="tel:+81344317925" className="hover:underline transition-all duration-300 ease-in-out">
            03-4431-7925
          </a>
        </li>
        <li className="flex items-center">
          <Smartphone className="w-5 h-5 mr-3 flex-shrink-0" />
          <a href="tel:+8190-1995-0349" className="hover:underline transition-all duration-300 ease-in-out">
            090-1995-0349
          </a>
        </li>
        <li className="flex items-center">
          <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
          <a href="mailto:morita@nextdirectai.jp" className="hover:underline transition-all duration-300 ease-in-out">
            morita@nextdirectai.jp
          </a>
        </li>
      </ul>
    </div>
  )
}

