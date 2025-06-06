import React, { useEffect, useState } from "react"
import SkipCard from "../components/SkipCard" // adapte le chemin si nécessaire

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

  useEffect(() => {
    fetch("https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft")
      .then((res) => res.json())
      .then((data) => setSkips(data))
  }, [])

  const [selectedSkipId, setSelectedSkipId] = useState<number | null>(null)

  const handleSelect = (skip: Skip) => {
    console.log("Selected skip:", skip)
  
  }

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Choose Your Skip Size</h1>
      <p className="text-lg text-gray-500 mb-8 text-center">
        Select the skip size that best suits your needs
      </p>
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
    </div>
  )
}

export default ChooseSkipPage
