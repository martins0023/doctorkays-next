// app/about/AboutContent.jsx
'use client';

import { useRouter } from 'next/navigation';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import Image from 'next/image'

import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import Testimonials from '../../components/Testimonials';
import Stayintouch from '../../components/Stayintouch';
import Milestones from '../../components/Milestones';

import {
  bouncex,
  slideInFromLeft,
  slideInFromRight,
  staggerContainer,
} from '../../constants/animations';
import { mission } from '../../constants';
import FooterFull from '../../components/FooterFull';

export default function AboutContent() {
  const router = useRouter();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div>
      <Navbar />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-7xl mx-auto md:pt-20 px-6"
      >
        {/* Hero / Intro */}
        <div className="flex flex-wrap justify-center">
          <div className="pt-12 w-full lg:w-1/2">
            <motion.span
              variants={slideInFromLeft}
              className="bg-neutral-900 text-purple-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase"
            >
              About Doctor Kays
            </motion.span>
            <motion.p
              variants={slideInFromRight}
              className="font-semibold text-[30px] font-montserrat mt-4"
            >
              Meet Doctor Kays
            </motion.p>
            <p className="text-md tracking-wider text-neutral-400 mt-4">
              Doctor Olayiwola Babatunde Emmanuel (Dr. Kays) is a medical doctor
              with nearly a decade of clinical experience across Ukraine,
              Nigeria, and Dubai. A tech lover, family advocate, and firm
              believer in preventive community medicine, he promotes health
              awareness through engaging content that blends storytelling and
              humor.
            </p>
            <p className="mt-3 text-md tracking-wider text-neutral-400">
              Weekly, via Health Nuggets, Clinic Series, Clinic Online, and
              Medicine on the Street with Dr. Kays, we explore lifestyle, disease
              prevention, and wellness in bite‑sized, relatable formats.
            </p>

            <p className="mt-3 text-md tracking-wider text-neutral-400">
            We align our works with the World Health Organization calendar
                  and delve into trending medical topics to ensure our audience
                  stays informed and empowered. That’s our promise - making your
                  health journey an adventure you won’t want to miss!
            </p>

            <div className="flex justify-center gap-4 mt-6">
              <Button
                onClick={() => router.push('/partnership')}
                text="Partner With Me"
                className="bg-gradient-to-r from-purple-500 to-purple-950 rounded-tl-full rounded-bl-full py-2 px-3 hover:bg-white"
              />
              <Button
                onClick={() => router.push('/contact')}
                text="Request More Info"
                className="border border-primary rounded-tr-full rounded-br-full py-2 px-3 hover:bg-primary"
              />
            </div>
          </div>

          <motion.div
            variants={slideInFromRight}
            className="p-2 w-full lg:w-1/2 mt-8 lg:mt-0"
          >
            <img
              src="/assets/010b.jpg"
              alt="Doctor Kays"
              className="rounded-xl w-full object-cover h-100"
            />
          </motion.div>
        </div>

        {/* Mission Section */}
        <section className="relative mt-20 border-b border-neutral-800 pb-16">
          <div className="text-center">
            <span className="bg-neutral-900 text-purple-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
              Our Mission
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 tracking-wide">
              Doctor Kays{' '}
              <span className="bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">
                Mission
              </span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center mt-10 lg:mt-20">
            <div className="p-2 w-full lg:w-1/2">
              <img
                src="/assets/021.jpg"
                alt="Doctor Kays Mission"
                className="rounded-xl w-full object-cover mt-5"
              />
            </div>
            <div className="pt-12 w-full lg:w-1/2">
              {mission.map((m, idx) => (
                <div key={idx} className="flex mb-12">
                  <motion.div
                    variants={bouncex}
                    className="flex items-center justify-center mx-6 bg-neutral-900 h-10 w-10 p-2 rounded-full text-purple-700"
                  >
                    {m.icon}
                  </motion.div>
                  <div>
                    <h5 className="mt-1 mb-2 text-xl font-semibold">{m.text}</h5>
                    <p className="text-md text-neutral-500">{m.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones + Counters */}
        <Milestones />

        <div className="flex flex-wrap justify-center items-center gap-10 mt-16 mb-16">
          {[
            { end: 2, label: 'Projects' },
            { end: 500, label: 'Satisfied clients' },
            { end: 10, label: 'Countries' },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div ref={ref}>
                {inView && (
                  <CountUp
                    end={item.end}
                    duration={2}
                    suffix="+"
                    className="text-3xl sm:text-5xl lg:text-6xl font-bold"
                  />
                )}
              </div>
              <p className="text-lg text-neutral-500 mt-2">{item.label}</p>
            </div>
          ))}
        </div>

        <Testimonials />
        <Stayintouch />
      </motion.div>

      <FooterFull />
    </div>
  );
}
