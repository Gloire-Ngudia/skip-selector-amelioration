import React, { useEffect, useState } from "react"
import SkipCard from "../components/SkipCard"
import { ArrowRight } from "lucide-react"

type Skip = {
  id: number
  size: number
  hire_period_days: number
  price_before_vat: number
  vat: number
  allowed_on_road: boolean
  allows_heavy_waste: boolean
}

const ChooseSkipPage = () => {
  const [skips, setSkips] = useState<Skip[]>([])
  const [selectedSkipId, setSelectedSkipId] = useState<number | null>(null)

  useEffect(() => {
    fetch("https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft")
      .then((res) => res.json())
      .then((data) => setSkips(data))
  }, [])

  const handleSelect = (skip: Skip) => {
    setSelectedSkipId(skip.id)
  }

  const selectedSkip = skips.find((s) => s.id === selectedSkipId)
  const totalPrice = selectedSkip
    ? (selectedSkip.price_before_vat * (1 + selectedSkip.vat / 100)).toFixed(2)
    : "0.00"

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <article className="my-20 ">
        <h1 className="text-3xl font-bold mb-6 text-center">Choose Your Skip Size</h1>
        <p className="text-lg text-gray-500 mb-8 text-center">
        Select the skip size that best suits your needs
      </p>
      </article>

      <div className="grid gap-x-40 grid-cols-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 place-items-center flex-grow">
        {skips.map((skip) => (
          <SkipCard
            key={skip.id}
            skip={skip}
            isSelected={selectedSkipId === skip.id}
            onSelect={handleSelect}
          />
        ))}
      </div>

      {/* ✅ Bandeau affiché en bas quand un skip est sélectionné */}
     {selectedSkip && (
  <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 shadow-lg z-50">
    <div className="max-w-7xl mx-auto flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between md:items-center">
      {/* Texte descriptif (sur mobile, visible au-dessus) */}
      <p className="text-sm text-gray-400 md:text-xs md:max-w-sm">
        Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.
      </p>

      {/* Info + boutons (empilés sur mobile, alignés horizontalement en md+) */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6 w-full md:w-auto">
        {/* Info skip */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 text-center md:text-left">
          <h2 className="text-lg font-semibold text-gray-200">{selectedSkip.size} Yard Skip</h2>
          <p className="text-2xl font-bold text-blue-500">£{totalPrice}</p>
          <p className="text-sm text-gray-400">{selectedSkip.hire_period_days} days</p>
        </div>

        {/* Boutons */}
        <div className="flex gap-2 w-full md:w-auto">
          <button
            className="w-1/2 md:w-auto bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 text-base rounded-lg"
            onClick={() => setSelectedSkipId(null)}
          >
            Back
          </button>
          <button className="w-1/2 md:w-auto flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 text-base rounded-lg space-x-2">
            <span>Continue</span>
            <ArrowRight className="w-5 h-5 stroke-[3]" />
          </button>
        </div>
      </div>
    </div>
  </div>
)}
</div>
  )
}

export default ChooseSkipPage
