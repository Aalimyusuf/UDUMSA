import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';
import event7 from '../../assets/event-7.png';

const events = [
  {
    id: 1,
    title: "UDUMSA Medical Outreach",
    date: "July 05 – July 10",
    location: "Sokoto Central",
    image: event7
  },
  {
    id: 2,
    title: "UDUMSA Annual Health Week",
    date: "August 12 – August 18",
    location: "Argungu, Kebbi state",
    image: event7
  },
  { id: 3, title: "Scientific Conference", date: "Sept 20 - Sept 22", location: "UDUS Auditorium", image: event7 },
  { id: 4, title: "Sports Competition", date: "Oct 01 - Oct 05", location: "University Stadium", image: event7 },
  { id: 5, title: "Blood Donation Drive", date: "Nov 10 - Nov 12", location: "Teaching Hospital", image: event7 },
  { id: 6, title: "Dinner & Awards Night", date: "Dec 15 - Dec 16", location: "Grand Ballroom", image: event7 }
    
];

const UDUMSAEvents: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Starting at 1 for the '2 of 6' logic

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  return (
    <section className="relative min-h-screen w-full bg-[#FFF5F8] py-20 px-6 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        
        {/* Top Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block rounded-full bg-[#FCE4EC] border border-[#F8BBD0] px-6 py-2">
            <span className="text-sm font-bold text-[#C2185B]">Upcoming events</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">
            Be Part of Our Next Events and Activities
          </h2>
        </div>

        {/* Carousel Card */}
        <div className="overflow-hidden rounded-4xl bg-white shadow-2xl flex flex-col md:flex-row">
          
          {/* Image Side */}
          <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={events[currentIndex].id}
                src={events[currentIndex].image}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="h-full w-full object-cover"
              />
            </AnimatePresence>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2 bg-[#FCE4EC]/50 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            
           
              {/* Smooth Counter */}
            <div className="mb-4 flex items-baseline gap-2 text-[#9D225E]">
                <AnimatePresence mode="wait">
                    <motion.span
                    key={currentIndex}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    className="text-5xl font-black"
                    >
                    {currentIndex + 1}
                    </motion.span>
                </AnimatePresence>
                <span className="text-3xl font-bold text-[#9D225E]/70">
                    of {events.length}:
                </span>
                </div>


            <h3 className="mb-8 text-2xl font-bold text-gray-800 md:text-3xl">
              {events[currentIndex].title}
            </h3>

            {/* Info Boxes */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-8">
              <div className="rounded-2xl bg-[#D81B60] p-6 text-center text-white">
                <Calendar className="mx-auto mb-3 h-10 w-10" />
                <p className="text-sm font-bold leading-tight">{events[currentIndex].date}</p>
              </div>
              <div className="rounded-2xl bg-[#D81B60] p-6 text-center text-white">
                <MapPin className="mx-auto mb-3 h-10 w-10" />
                <p className="text-sm font-bold leading-tight">{events[currentIndex].location}</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-fit rounded-xl bg-[#9D225E] px-8 py-3 font-bold text-white shadow-lg"
            >
              Learn more
            </motion.button>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="mt-12 flex items-center justify-end gap-6">
          <div className="flex items-center gap-6">
             <button 
               onClick={prevSlide}
               className="flex items-center gap-2 rounded-xl border-2 border-[#9D225E] px-6 py-2 font-bold text-[#9D225E] transition-all hover:bg-[#9D225E] hover:text-white"
             >
               <ChevronLeft size={20} /> Prev
             </button>

             {/* Pagination Dots */}
             <div className="flex gap-2">
               {events.map((_, idx) => (
                 <div 
                   key={idx}
                   className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                     idx === currentIndex ? 'w-6 bg-[#9D225E]' : 'bg-[#9D225E]/30'
                   }`}
                 />
               ))}
             </div>

             <button 
               onClick={nextSlide}
               className="flex items-center gap-2 rounded-xl border-2 border-[#9D225E] px-6 py-2 font-bold text-[#9D225E] transition-all hover:bg-[#9D225E] hover:text-white"
             >
               Next <ChevronRight size={20} />
             </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default UDUMSAEvents;