import React, { useEffect, useState } from 'react'

function PostList() {
    const [savedPosts, setSavedPosts] = useState([]);
    useEffect(()=>{
        const posts = JSON.parse(localStorage.getItem("posts")) || [];
        setSavedPosts(posts)
    })
  return (
    <div className='flex flex-col items-center gap-4 mt-10 bg-amber-100 h-screen w-full'>
        <h1 className='text-3xl'>Posts </h1>  
        {savedPosts.length === 0 &&  <div>
            No Posts Available
        </div>}
        {savedPosts.map((post, index)=>(
            <div key={index} className='border p-4 rounded-lg shadow-lg bg-white w-1/3'>
                <img src={post.image} alt={`Post ${index + 1}`} className='w-full h-64 object-cover rounded'/>
                <p className='mt-2 text-gray-700'>{post.caption}</p>
            </div>
            )
        )}
       
    </div>
  )
}

export default PostList