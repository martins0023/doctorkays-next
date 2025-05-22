"use client"

import React from "react";
import Footer from "../../components/Footer";
import Stayintouch from "../../components/Stayintouch";
import Testimonials from "../../components/Testimonials";
import BlogPosts from "./BlogPosts";
import { motion } from "framer-motion";
import { slideInFromLeft, staggerContainer } from "../../constants/animations";

const BlogContext = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="max-w-7xl mx-auto md:pt-20 px-6"
    >
      <div className="text-center mt-10">
        <motion.span
          variants={slideInFromLeft}
          className="bg-neutral-900 text-purple-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase"
        >
          Blog
        </motion.span>
      </div>
      <BlogPosts />
      <Testimonials />
      <Stayintouch />
      <Footer />
    </motion.div>
  );
};

export default BlogContext;
