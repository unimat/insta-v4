import Image from 'next/image';
import { SearchIcon } from "@heroicons/react/outline";

export default function Header() {
  return (
    <div>
      <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
        {/* Left */}
        <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
          <Image 
            fill        
            src="https://www.jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png"
            alt="Instagram Logo"
            sizes='100vW'
            className="object-contain"
          />
        </div>
        <div className="cursor-pointer h-24 w-10 relative  lg:hidden">
          <Image
            fill
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png"
            alt="Instagram Logo"
            sizes='100vW'
            className="object-contain"
          />
        </div>
          
        {/* Middle */}
        <div className="relative mt-1">
          <div className="absolute top-2 left-2">
            <SearchIcon className="h-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
          />
        </div>

        {/* Right */}
        <h1>Right Side</h1>
      </div>
    </div>
  )
}
