import Post from "./Post"

export default function Posts() {
  const posts = [
    {
      id: 1,
      userName: 'Unimat',
      userImg: 'https://i.pravatar.cc/150?img=3',
      img: 'https://www.istockphoto.com/hu/fot%C3%B3/h%C5%91l%C3%A9gballonok-rep%C3%BClnek-a-botan-canyon-felett-t%C3%B6r%C3%B6korsz%C3%A1gban-gm1297349747-390509593',
      caption: 'Nice picture'
    },
    {
      id: 2,
      userName: 'Aqualing',
      userImg: 'https://i.pravatar.cc/150?img=8',
      img: 'https://www.istockphoto.com/hu/fot%C3%B3/alberta-vadon-banff-k%C3%B6zel%C3%A9ben-gm583809524-99903401',
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
