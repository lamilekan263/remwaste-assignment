"use client"

import { useSkipContext } from "../providers/SkipProvider"
import { Search } from "lucide-react"

const SearchBar = () => {
    const { searchQuery, setSearchQuery } = useSkipContext()

    return (
        <div className="relative mb-6 w-full md:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />

            <input
                type="text"
                placeholder="Search by size or postcode"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:border-none focus:ring-blue-700"
            />
        </div>
    )
}

export default SearchBar
