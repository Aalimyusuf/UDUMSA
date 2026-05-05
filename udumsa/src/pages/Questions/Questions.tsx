import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

const faqs = [
  {
    id: "01",
    question: "What is UDUMSA and what does it represent?",
    answer: "The Usmanu Danfodiyo University Medical Students' Association (UDUMSA) is the official representative body for all medical students at UDUS, dedicated to academic excellence and student welfare."
  },
  {
    id: "02",
    question: "Who can become a member of the association?",
    answer: "All registered medical students of Usmanu Danfodiyo University are automatically members of UDUMSA and are eligible to participate in its various activities."
  },
  {
    id: "03",
    question: "What activities does UDUMSA organize?",
    answer: "UDUMSA organizes a wide range of activities including academic seminars, medical outreach programs, quiz competitions, mentorship initiatives, and social events, all aimed at promoting learning, community service, and professional growth."
  },
  {
    id: "04",
    question: "How can I participate in upcoming events?",
    answer: "You can participate by following our official announcements, registering through our membership portal, or joining specific committee volunteer teams during orientation weeks."
  },
  {
    id: "05",
    question: "Are there opportunities for leadership and personal de...",
    answer: "Yes, UDUMSA provides numerous leadership roles through its Executive Council, Standing Committees, and judicial arms, fostering growth in management and advocacy."
  }
];

const UDUMSAFAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(2); 

  return (
    <section className="relative min-h-screen w-full bg-[#FAFAFA] py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      
      {/* Background Graphic Element */}
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-125 h-125 rounded-full bg-[#9D225E] opacity-20 blur-[150px] z-0"></div>

      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-start justify-between gap-16 relative z-10">
        
        {/* Left Column: Heading */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="w-full lg:w-2/5"
        >
          <div className="inline-block rounded-full border border-[#9D225E]/50 bg-[#9D225E]/10 px-6 py-2 mb-8">
            <span className="text-sm font-bold text-[#E91E63]">Upcoming events</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-[Montserrat] text-black leading-tight mb-8">
            Quick answers to some of the most common questions
          </h2>
          <a href="#" className="flex items-center gap-2 text-lg font-bold text-[#9D225E] hover:text-[#E91E63] transition-colors group">
            View all questions and answers 
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Right Column: Accordion */}
        <div className="w-full lg:w-3/5 flex flex-col gap-5">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            
            return (
              <motion.div
                key={faq.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-2xl bg-white transition-all duration-300 ${
                  isOpen ? 'shadow-[0_0_30px_rgba(157,34,94,0.15)]' : 'shadow-md'
                }`}
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
                >
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-4">
                        <span className={`text-lg font-bold ${isOpen ? 'text-[#9D225E]' : 'text-[#A01E66]'}`}>
                            {faq.id}
                        </span>
                        <h3 className={`text-lg md:text-xl font-bold font-[Montserrat] transition-colors ${
                            isOpen ? 'text-[#9D225E]' : 'text-black'
                        }`}>
                            {faq.question}
                        </h3>
                    </div>
                  </div>

                  {/* Icon Rotation */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className={`${isOpen ? 'text-[#9D225E]' : 'text-[#A01E66]'}`}
                  >
                    <ChevronDown size={28} />
                  </motion.div>
                  <div className={`absolute left-0 top-0 h-full w-1.5 transition-colors ${
                    isOpen ? 'bg-[#9D225E]' : 'bg-[#9D225E]/30'
                  }`} />
                </button>

                {/* Dropdown Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8 pt-0 border-t border-gray-100 mt-4">
                        <p className="text-gray-700 leading-relaxed text-lg pt-6">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UDUMSAFAQ;