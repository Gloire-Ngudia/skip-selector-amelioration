import React from "react"
import {ArrowRight} from "lucide-react"

type Skip = {
  id: number
  size: number
  hire_period_days: number
  price_before_vat: number
  vat: number
  allowed_on_road: boolean
  allows_heavy_waste: boolean
}

const getImageBySize = (size: number) => {
  if (size === 4) return "/images/4-yarder-skip.jpg"
  if (size === 6) return "/images/5-yarder-skip.jpg"
  if (size === 8) return "/images/6-yarder-skip.jpg"
  if (size === 10) return "/images/7-yarder-skip.jpg"
  return "/images/40-yarder-skip.jpg"
}

type SkipCardProps = {
  skip: Skip
  onSelect: (skip: Skip) => void
}

const SkipCard: React.FC<SkipCardProps> = ({ skip, onSelect }) => {
  const totalPrice = (skip.price_before_vat * (1 + skip.vat / 100)).toFixed(2)

  return (
    <button
      onClick={() => onSelect(skip)}
      className="w-full"
    >
      <div className="w-[420px] min-h-[480px] bg-black rounded-2xl ring-2 ring-gray-900 shadow-md overflow-hidden flex flex-col transition duration-300 transform hover:scale-105 hover:bg-gray-950 hover:ring-2 hover:ring-blue-600 focus:outline-none cursor-pointer">
        <div className="relative">
        <img
          src={getImageBySize(skip.size)}
          alt={`Benne ${skip.size} yards`}
          className="h-60 w-96 object-cover justify-center mx-auto mt-4 rounded-2xl"
         
        />
        {/* Le badge bleu en haut à gauche */}
          <div className="absolute top-8 right-7 bg-blue-600 text-white text-base font-semibold px-4 py-2 rounded-full shadow">
            {skip.size} Yards
          </div>
        </div>

        <div className="p-4 flex flex-col justify-start flex-grow text-start text-white">
          <h2 className="text-3xl font-bold mb-2">{skip.size} Yard Skip</h2>
          <ul className="text-base text-gray-400">
            <li>{skip.hire_period_days} day hire period</li>
          </ul>

          <div className="mt-auto">
            <p className="text-blue-600 font-bold text-3xl mb-6">£{totalPrice}</p>
           <button className="mt-2 w-full h-14 bg-gray-900 hover:bg-gray-800 text-white py-2 rounded-xl transition flex flex-row items-center justify-center space-x-2">
                <span className="text-xl font-semibold leading-none">Select This Skip</span>
                <ArrowRight className="w-5 h-5 stroke-[3]" />
            </button>
          </div>
        </div>
      </div>
    </button>
  )
}

export default SkipCard
