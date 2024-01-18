import Image from 'next/image';

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
        <h1>Right Side</h1>

      {/* Middle */}

      {/* Right */}
      </div>
    </div>
  )
}
