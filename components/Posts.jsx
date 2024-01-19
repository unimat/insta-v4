import Post from "./Post"

export default function Posts() {
  const posts = [
    {
      id: 1,
      userName: 'Unimat',
      userImg: 'https://i.pravatar.cc/150?img=3',
      img: 'https://images.freeimages.com/images/large-previews/b79/tree-1396794.jpg?fmt=webp&w=500',
      caption: 'Nice picture'
    },
    {
      id: 2,
      userName: 'Aqualing',
      userImg: 'https://i.pravatar.cc/150?img=8',
      img: 'https://media.istockphoto.com/id/1141140794/photo/beautiful-mountain-scenery-in-summer-with-lush-green-foliage-and-rain-clouds.webp?s=612x612&w=0&k=20&c=gMKycx9wWxwoolyDmHy-qA8GJMEa2HuYG9JJdLGZvaU=',
      caption: 'Mountains landscape'
    }
  ]
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          userName={post.userName}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  )
}
