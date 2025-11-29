import React from 'react';
import { Star, CheckCircle2, Quote } from "lucide-react";
import { SquiggleUnderline } from './ui/Decorators';
import { testimonials } from "../constants";
// Assuming you saved the Decorators file from the previous step


const Testimonials = () => {
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4 font-grotesque">
            What people are <SquiggleUnderline>saying.</SquiggleUnderline>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-orbiter">
            Join thousands of satisfied patients who trust us with their health.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Decorative Quote Icon (Background) */}
              <div className="absolute top-6 right-8 text-blue-100 group-hover:text-blue-50 transition-colors">
                <Quote size={40} strokeWidth={0} fill="currentColor" />
              </div>

              {/* Content */}
              <div>
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={`${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`} 
                    />
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed relative z-10 mb-8 font-medium">
                  "{testimonial.text}"
                </p>
              </div>

              {/* User Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                {/* <div className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"> 
                  {testimonial.image}
                  
                </div> */}
                
                <div className="flex-1">
                  <h6 className="font-bold text-gray-900 text-sm">{testimonial.user}</h6>
                  <p className="text-xs text-gray-500">{testimonial.country}</p>
                </div>

                {/* Verified Badge */}
                <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full border border-green-100">
                  <CheckCircle2 size={12} className="text-green-600" />
                  <span className="text-[10px] font-bold text-green-700 uppercase tracking-wide">Verified</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA (Optional) */}
        {/* <div className="mt-16 text-center">
            <p className="text-gray-500 mb-4">Rated <span className="font-bold text-gray-900">4.9/5</span> by over 2,000 patients</p>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;