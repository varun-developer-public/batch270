import React from 'react'
import NavBar from '../components/Navbar/navbar'
import { Link } from 'react-router-dom'

function HomeDashboard() {
  return (
<div className="min-h-screen bg-gradient-to-br from-amber-100 to-amber-200 p-6">
  <div className="max-w-4xl mx-auto">
    {/* Card Container */}
    <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center gap-6">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
        Welcome to My Dashboard
      </h1>
      <p className="text-gray-600 max-w-md">
        Manage your posts effortlessly — create new posts or explore what you’ve already shared.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <Link to={"/postList"}>
            <button className="px-6 py-3 rounded-xl bg-amber-500 text-white font-medium shadow-md hover:bg-amber-600 transition cursor-pointer">
            View Posts
            </button>
        </Link>
        <Link to={"/createPost"}>
            <button className="px-6 py-3 rounded-xl bg-gray-800 text-white font-medium shadow-md hover:bg-gray-900 transition">
            Create Post
            </button>
        </Link>
      </div>
    </div>
  </div>
</div>

  )
}

export default HomeDashboard