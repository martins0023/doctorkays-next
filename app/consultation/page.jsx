import React from "react";
// import { motion } from "framer-motion";
// import {
//   staggerContainer,
// } from "../../constants/animations";
import Navbar from "../../components/Navbar";
import FooterFull from "../../components/FooterFull";
import BookingSection from "./components/BookingSection";

// SEO metadata per Booking page (static info)
export function generateMetadata() {
  return {
    title: 'Booking & Consultation | Doctor Kays',
    description: 'Book your appointment with Doctor Kays: virtual or in‑person consultations made easy.',
    openGraph: {
      title: 'Booking & Consultation | Doctor Kays',
      description: 'Book your appointment with Doctor Kays: virtual or in‑person consultations made easy.',
    }
  };
}

export default function BookingPage() {
  return (
    <div>
      <Navbar />
      <div
        className="max-w-7xl mx-auto md:pt-20 pt-10 px-6"
      >
        <BookingSection />
      </div>
      <FooterFull />
    </div>
  );
}
