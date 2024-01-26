'use client'

import minifaker from 'minifaker'
import "minifaker/locales/en";
import { useEffect, useState } from "react";
import Story from "./Story";
import { UserAuth } from '@/app/context/AuthContext';

export default function Stories() {
  const [storyUsers, setSoryUsers] = useState([]);
  const {user} = UserAuth()

  // console.log(user);

  useEffect(() => {
    const storyUsers = minifaker.array(20, (i) => ({
      username: minifaker.username({ locale: "en" }).toLowerCase(),
      img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      id: i,
    }));
    setSoryUsers(storyUsers);
    // console.log(storyUsers);
  }, []);

  return (
    <div className="flex gap-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll rounded-sm scrollbar-none">
      {user && (
        <Story img={user?.photoURL} username={user?.displayName} isUser="true"/>
      )}
      {storyUsers.map((user) => (
        <Story key={user.id} username={user.username} img={user.img} />
      ))}
    </div>
  )
}
