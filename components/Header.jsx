'use client'

import Image from 'next/image';
import { useRouter } from "next/navigation";
import { SearchIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { UserAuth } from '@/app/context/AuthContext';

export default function Header() {
  const {user, googleSignIn, logOut} = UserAuth()
  // console.log(user)
  const router = useRouter();

  // const handleSignIn = async () => {
  //   try {
  //     await googleSignIn()
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const handleSignOut = async () => {
    try{
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30">
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
        <div className="flex gap-4 items-center">
          <HomeIcon
            className="hidden md:inline-flex  h-6 cursor-pointer hover:scale-125 transition-tranform duration-200 ease-out"
          />
          {user ? (
            <>
              <PlusCircleIcon
                className="h-6 cursor-pointer hover:scale-125 transition-tranform duration-200 ease-out"
              />
              <img
                src={user?.photoURL}
                // src="https://i.pravatar.cc/150?img=3"
                alt="user-image"
                className="h-10 rounded-full cursor-pointer"
                onClick={ handleSignOut } 
              />
            </>
          ) : (
            // Redirect to my own SignIn Page
            <button onClick={() => router.push("/auth/signin")}>Sign in</button>
            // Call googleSignIn() function directly
            // <button onClick={handleSignIn}>Sign in</button>
          )}
        </div>
      </div>
    </div>
  )
}
