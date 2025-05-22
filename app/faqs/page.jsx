import React from "react";
import Navbar from "../../components/Navbar";
import FaqsContext from "./FaqsContext";

export const metadata = {
    title: "Frequently Asked Questions | Doctor Kays",
    description:
      "Know more about Doctor Kays and his mission, see frequently asked question about doctor kays.",
    openGraph: {
      title: "Frequently Asked Questions | Doctor Kays",
      description: "Know more about Doctor Kays and his mission, see frequently asked question about doctor kays.",
      url: "/faqs",
      siteName: "Doctor Kays",
    },
    twitter: {
      card: "summary_large_image",
      title: "Frequently Asked Questions | Doctor Kays",
      description: "Know more about Doctor kays.",
    },
  };

  export default function () {

  return (
    <div>
      <Navbar />
      <FaqsContext />
      <footer className="bg-primary text-white p-4 text-center">
        <div>© 2025 Doctor kays</div>
      </footer>
    </div>
  );
};
