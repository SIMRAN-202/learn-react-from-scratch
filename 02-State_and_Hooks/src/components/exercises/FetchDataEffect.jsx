import React, { useEffect, useState } from 'react'

const FetchDataEffect = () => {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        const getData = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json();
            setPosts(data)
        }

        getData();
    },[])
  return (
    <div>
        <h1>First post title</h1>
        {posts.length > 0 ? <h2>{posts[0].title}</h2> : "No posts"}
        
    </div>
  )
}

export default FetchDataEffect