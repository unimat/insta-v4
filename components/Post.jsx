import {
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
  BookmarkIcon,
  EmojiHappyIcon
} from "@heroicons/react/outline";

export default function Post(props) {
  const { userName, userImg, img, caption} = props

  return (
    <div className="bg-white my-7 border rounded-md">
      
      {/* Post Header */}
      <div className="flex items-center p-5">
        <img
          className="h-12 rounded-full object-cover border p-1 mr-3"
          src={userImg}
          alt={userName}
        />
        <p className="font-bold flex-1">{userName}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      {/* Post Image */}
      <img className="object-cover w-full" src={img} alt="" />

      {/* Post Buttons  */}
        <div className="flex justify-between px-4 pt-4">
          <div className="flex gap-4">
            <HeartIcon className="btn" />
            <ChatIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>

      {/* Post comments */}
      <p className="p-5 truncate">
        <span className="font-bold mr-2">{userName}</span>
        {caption}
      </p>

      {/* Post input box */}
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          className="border-none flex-1 focus:ring-0"
          type="text"
          placeholder="Enter your comment..."
        />
        <button
          className="text-blue-400 font-bold disabled:text-blue-200"
          type="submit"
        >
          Post
        </button>
      </form>

    </div>
  )
}
