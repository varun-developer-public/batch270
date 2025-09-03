import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Post() {
    const [post, setPost] = useState({
        image: null,
        caption: ""
    });
    const [preview, setPreview] = useState(null);
    const [savedPosts, setSavedPosts] = useState([]);
    const nav = useNavigate()


    useEffect(()=>{
        const posts = JSON.parse(localStorage.getItem("posts")) || [];
        setSavedPosts(posts)
    },[])

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        const newPost = {
            image: preview,
            caption: post.caption
        }
        const updatedPost = [...savedPosts, newPost]
        localStorage.setItem("posts", JSON.stringify(updatedPost));

        setSavedPosts(updatedPost);
        
        setPost({
            image: null,
            caption: ""
        });
        setPreview(null);
        alert("Image Submitted Successfully");
        nav("/postList");
    }

    const handleCaptionChange = (e)=>{
        setPost({...post, caption: e.target.value});
    }
    const handleImageChange = (e)=>{
       const file = e.target.files[0]
       const reader = new FileReader();
       reader.readAsDataURL(file);
         reader.onloadend = ()=>{
             setPreview(reader.result);
         }
       setPost({...post, image: file});
    }
console.log(post);

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 mt-10">
        <div className="underline">Insta Post</div>

        <form onSubmit={handleSubmit}>
          <input
            type="file"
            accept="image/*"
            name="post"
            id="post"
            className="border bg-amber-200 cursor-pointer"
            onChange={handleImageChange}
          />
         { preview && (
            <div className="flex flex-col items-center justify-center mt-4">
                <img src={preview} alt="Preview" className="w-180 h-80 object-cover rounded"/>
            </div>
            )}

            <input type="text" name="caption" id="caption" placeholder="add caption" className="border m-4" onChange={handleCaptionChange} value={post.caption}/>
          <button
            type="submit"
            className="border bg-blue-400 text-white px-4 py-1 rounded mt-5 cursor-pointer disabled:opacity-50"
            disabled={!post.image}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Post;
