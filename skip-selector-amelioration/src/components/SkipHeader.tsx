import { MapPin, Trash, Truck, Badge, Calendar, CreditCard } from "lucide-react"

const Header = () => {
  return (
    <header className="bg-black text-white px-4 py-3 shadow-sm w-full z-50 rounded-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <nav>
          <ul className="flex flex-row items-center justify-between space-x-3 w-full gap-6 text-center text-white text-base sm:text-lg">
            <li className="flex items-center gap-2 p-2 font-medium  text-blue-600 hover:bg-gray-900 hover:rounded-lg cursor-pointer">
              <MapPin className="w-7 h-7" />
              <span className="hidden sm:inline">Postcode</span>
            </li>
            <li className="flex items-center gap-2 font-medium  text-blue-600 p-2 hover:bg-gray-900 hover:rounded-lg cursor-pointer">
              <Trash className="w-7 h-7" />
              <span className="hidden sm:inline">Waste Type</span>
            </li>
            <li className="flex items-center gap-2 font-medium  text-white p-2 hover:bg-gray-900 hover:rounded-lg cursor-pointer">
              <Truck className="w-7 h-7" />
              <span className="hidden sm:inline">Select Skip</span>
            </li>
            <li className="flex items-center gap-2 font-medium  text-white p-2 hover:bg-gray-900 hover:rounded-lg cursor-pointer">
              <Badge className="w-7 h-7" />
              <span className="hidden sm:inline">Permit Check</span>
            </li>
            <li className="flex items-center gap-2 font-medium  text-white p-2 hover:bg-gray-900 hover:rounded-lg cursor-pointer">
              <Calendar className="w-7 h-7" />
              <span className="hidden sm:inline">Choose Date</span>
            </li>
            <li className="flex items-center gap-2 font-medium  text-white p-2 hover:bg-gray-900 hover:rounded-lg cursor-pointer">
              <CreditCard className="w-7 h-7" />
              <span className="hidden sm:inline">Payment</span>
            </li>
            
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
