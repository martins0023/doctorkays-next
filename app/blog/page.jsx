import React from "react";
import Navbar from "../../components/Navbar";
import BlogContext from "./BlogContext";

export const metadata = {
  title: "Blog | Doctor Kays",
  description:
    "Explore health insights, stories, and tips on the Doctor Kays blog.",
  openGraph: {
    title: "Doctor Kays Blog",
    description:
      "Explore health insights, stories, and tips on the Doctor Kays blog.",
    url: "/blog",
    siteName: "Doctor Kays",
  },
  twitter: {
    card: "summary_large_image",
    title: "Doctor Kays Blog",
    description:
      "Explore health insights, stories, and tips on the Doctor Kays blog.",
  },
};

const page = () => {
  return (
    <div>
      <Navbar />
      <BlogContext />
      <footer className="bg-primary text-white p-4 text-center">
        <div>© 2025 Doctor kays</div>
      </footer>
    </div>
  );
};

export default page;
