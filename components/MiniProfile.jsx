'use client'

import { UserAuth } from '@/app/context/AuthContext';

export default function MiniProfile() {
  const {user, logOut} = UserAuth()

  // console.log(user)

  const handleSignOut = async () => {
    try{
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img 
        // src={user?.userImg}
        src={user?.photoURL}
        // src="https://i.pravatar.cc/150?img=3"
        alt="user-image" 
        className="h-16 rounded-full p-[2px] border"
      />
        
      <div className="flex-1 ml-4">
        <h2 className='font-bold'>{user?.displayName}</h2>
        <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
      </div>
      <button
        className="font-semibold text-blue-400 text-sm"
        onClick={ handleSignOut } 
      >
        Sign out
      </button>
    </div>
  )
}
