'use client'

import Stories from "./Stories";
import Posts from "./Posts";
import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";
import { UserAuth } from '@/app/context/AuthContext';

export default function Feed() {
  const {user} = UserAuth()

  // console.log(user);

  return (
    <main className={`grid ${user ? "grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto": "grid-cols-1 md:grid-cols-2 md:max-w-3xl mx-auto"} `}>
      <section className="md:col-span-2">
        {/* Stories */}
        <Stories />
        
        {/* Posts */}
        <Posts />
      </section>

      <section className="hiidden md:inline-grid md:col-span-1">
        <div className="fixed w-[380px]">
          {/* Mini Profile */}
          <MiniProfile />

          {/* Suggestions */}
          <Suggestions />
        </div>
      </section>
    </main>
  )
}
