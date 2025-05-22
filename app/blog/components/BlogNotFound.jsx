import React from 'react'
import Navbar from '../../../components/Navbar'

const BlogNotFound = () => {
  
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto md:pt-20 px-6">
        <div className="flex flex-col items-center justify-center mt-10 h-screen p-4">
          <h1 className="text-4xl font-bold text-center text-gray-300">
            404 - Blog Page Not Found
          </h1>
          <p className="text-gray-400 text-[18px] text-center mt-4">
            Oops! The blog page you are looking for does not exist, It's from our
            end. Our construction engineers are on site just because of you.
          </p>
          <img
            src="/assets/notfound1.png"
            className="object-cover w-[500px] h-[500px]"
            alt="notfound"
          />
          <button
            onClick={() => navigate("/blog")}
            className="mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primarydark transition"
          >
            Go to Blog
          </button>
        </div>
      </div>
    </div>
  )
}

export default BlogNotFound