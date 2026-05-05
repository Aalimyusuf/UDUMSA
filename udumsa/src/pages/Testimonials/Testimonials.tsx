import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";
import testimonialsImage from '../../assets/testimonial-1.png';

const testimonials = [
  {
    id: 1,
    text: "Serving as President of UDUMSA was a defining experience in my journey through medicine. It not only strengthened my leadership and organizational skills but also deepened my commitment to service and community health. UDUMSA provides a platform where students are empowered to grow, lead, and make meaningful impact.",
    name: "Usman Muhammad",
    role: "UDUMSA President - 2020",
    image: testimonialsImage
  },
  {
    id: 2,
    text: "Being part of the academic committee allowed me to help bridge the gap between junior and senior students. The collaborative environment in UDUMSA is unlike any other; it fosters a true sense of brotherhood and shared purpose that extends far beyond the classroom.",
    name: "Fatima Ibrahim",
    role: "Academic Director - 2021",
    image: testimonialsImage
  },
  {
    id: 3,
    text: "Through the medical outreaches, I saw firsthand the power of community engagement. UDUMSA didn't just teach me medicine; it taught me empathy and the importance of healthcare advocacy in rural areas. It’s been an honor to serve alongside such brilliant minds.",
    name: "Ahmed Bello",
    role: "Welfare Secretary - 2022",
    image: testimonialsImage
  }
];

const UDUMSATestimonials: React.FC = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative min-h-screen w-full bg-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Content Side */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="w-full lg:w-2/5"
        >
          <div className="inline-block rounded-full bg-[#fdf2f8] px-6 py-2 mb-6 border border-[#fce7f3]">
            <span className="text-sm font-bold text-[#9D225E]">Testimonials</span>
          </div>
          <h2 className="text-4xl font-[Montserrat] font-bold text-gray-950 leading-tight mb-8">
            Stories of Growth and Success
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-10">
            Hear from those who have led, served, and grown within UDUMSA, sharing their experiences and the impact of the association.
          </p>
          <a href="#" className="flex items-center gap-2 text-lg font-bold text-[#9D225E] hover:underline">
            View All testimonials <ArrowRight size={20} />
          </a>
        </motion.div>

        {/* Right Carousel Side */}
        <div className="w-full lg:w-3/5">
          <div className="relative">
            {/* The Quote Bubble */}
            <div className="relative rounded-[40px] bg-[#fdf2f8] p-10 md:p-16 mb-12">
              <BiSolidQuoteLeft className="absolute top-6 left-6 md:top-3 md:left-3  text-[#9D225E]" size={60} />
              <BiSolidQuoteRight className="absolute bottom-8 right-8 text-[#9D225E] " size={60} />
              <div className="relative min-h-45 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="text-xl md:text-2xl text-gray-800 leading-relaxed italic"
                  >
                    "{testimonials[index].text}"
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* The Bubble Tail (Speech bubble effect) */}
              <div className="absolute -bottom-6 left-12 w-12 h-12 bg-[#fdf2f8] rotate-45 z-[-1]"></div>
            </div>

            {/* Author and Controls Area */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-4">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex items-center gap-4"
                >
                  <img 
                    src={testimonials[index].image} 
                    alt={testimonials[index].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#9D225E]"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-gray-950">{testimonials[index].name}</h4>
                    <p className="text-sm text-gray-600 font-medium">{testimonials[index].role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex gap-4">
                <button 
                  onClick={prev}
                  className="w-14 h-14 rounded-full bg-[#9D225E] flex items-center justify-center text-white transition-all hover:bg-[#83104e] active:scale-95"
                >
                  <ChevronLeft size={28} />
                </button>
                <button 
                  onClick={next}
                  className="w-14 h-14 rounded-full bg-[#9D225E] flex items-center justify-center text-white transition-all hover:bg-[#83104e] active:scale-95"
                >
                  <ChevronRight size={28} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UDUMSATestimonials;