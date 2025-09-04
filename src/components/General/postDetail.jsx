import { Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function PostDetail() {
  const { index } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const storedPost = JSON.parse(localStorage.getItem("posts")) || [];
      if (storedPost[index]) {
        setPost(storedPost[index]);
      }
    }, 3000);
  }, [index]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Skeleton
          sx={{ bgcolor: "grey.900" }}
          variant="rectangular"
          width={210}
          height={118}
        />
      </div>
    );
  }
  return (
    <div>
      <h1>Post Details of {post.caption}</h1>
      <img src={post.image} alt="" />
      <Link to={"/postList"}>
        <button className="px-6 py-3 rounded-xl bg-gray-800 text-white font-medium shadow-md hover:bg-gray-900 transition">
          Back to Posts
        </button>
      </Link>
    </div>
  );
}

export default PostDetail;
