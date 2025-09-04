import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function PostList() {
    const [savedPosts, setSavedPosts] = useState([]);
    useEffect(()=>{
        const posts = JSON.parse(localStorage.getItem("posts")) || [];
        setSavedPosts(posts)
    },[])

    const handleDelete = (index)=>{
       const updatesPost = savedPosts.filter((_,i)=> i !== index)
       setSavedPosts(updatesPost);
       localStorage.setItem("posts", JSON.stringify(updatesPost));
    }



  return (
<div className="min-h-screen w-full bg-amber-100 py-10 px-4">
  <div className="flex flex-col items-center gap-6 max-w-6xl mx-auto">
    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Posts</h1>

    {savedPosts.length === 0 && (
      <div className="text-gray-600 text-lg">No Posts Available</div>
    )}

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {savedPosts.map((post, index) => (
        <div
          key={index}
          className="border rounded-2xl shadow-md bg-white overflow-hidden transition hover:shadow-xl"
        >
          <img
            src={post.image}
            alt={`Post ${index + 1}`}
            className="w-full h-56 sm:h-64 object-cover"
          />
          <div className="p-4">
            <p className="text-gray-700 text-base">{post.caption}</p>
            <i className="fa-solid fa-trash cursor-pointer" style={{color: '#e32672'}} onClick={()=>handleDelete(index)}></i>
          </div>
          <Link to={`/postDetail/${index}`}><div className='text-right mb-3 mr-3 cursor-pointer text-blue-900 font-bold'>View Details</div></Link>
        </div>
      ))}
    </div>
  </div>
</div>

  )
}

export default PostList