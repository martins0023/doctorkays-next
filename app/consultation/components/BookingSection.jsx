
// components/BookingSection.jsx
'use client';
import React, { useRef } from 'react';
import { useRouter } from "next/navigation";
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight } from '../../../constants/animations';
import Button from '../../../components/Button';
import Testimonials from '../../../components/Testimonials';
import Trustpilot from '../../../components/Feedback/TrustPilot';
import Stayintouch from '../../../components/Stayintouch';
import Pricing from './Pricing';

export default function BookingSection() {
  const bookingRef = useRef(null);

  const router = useRouter();

  const requestInfo = () => {
    router.push("/contact");
  };

  const scrollToBooking = () => {
    bookingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="text-center md:mb-10 md:hidden">
        <span className="bg-neutral-900 text-purple-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          consultation
        </span>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="pt-12 w-full lg:w-1/2">
          <motion.div initial="hidden" animate="visible" variants={slideInFromLeft}>
            <span className="bg-neutral-900 text-purple-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
              Booking & Consultation
            </span>
            <p className="font-semibold text-[30px] font-montserrat mt-2">
              Booking Details
            </p>
          </motion.div>
          <motion.p initial="hidden" animate="visible" variants={slideInFromRight} className="text-md tracking-wider text-neutral-400 mt-4">
            Booking with Doctor Kays is easy and convenient. You can book an appointment through the booking section by selecting any service. You can either have a virtual consultation for convenience or meet him in person for a more personal experience. The platform offers an easy‑to‑use interface that ensures a smooth booking process.
            <br /><br />
            You can see available time slots and book an appointment immediately after selecting the service you want. Doctor Kays’s online booking system puts accessibility and efficiency at the core for all users.
          </motion.p>
          <div className="flex justify-center mt-6">
            <Button onClick={scrollToBooking} text="Book Appointment" className="hover:bg-primarydark rounded-tl-full rounded-bl-full py-2 px-3 bg-gradient-to-r from-purple-500 to-purple-950" />
            <Button onClick={requestInfo} text="Request For More Information" className="border border-primary rounded-tr-full rounded-br-full py-2 px-3 hover:bg-gradient-to-r from-purple-400 to-primary ml-2" />
          </div>
        </div>
        <motion.div initial="hidden" animate="visible" variants={slideInFromRight} className="p-2 w-full lg:w-1/2 h-fit">
          <img src="/assets/021.jpg" alt="doctor" className="rounded-xl" />
        </motion.div>
      </div>

      <div ref={bookingRef} className="relative mt-20 border-neutral-800 min-h-[800px]">
        <Pricing />
      </div>

      <Testimonials />
      <Trustpilot />
      <Stayintouch />
    </>
  );
}