import React from 'react';
import { motion } from 'framer-motion';
import event1 from "../../assets/event-1.png";
import event2 from "../../assets/event-2.png";
import event3 from "../../assets/event-3.png";
import event4 from "../../assets/event-4.png";
import event5 from "../../assets/event-5.png";
import event6 from "../../assets/event-6.png";




const activities = [
  {
    title: "Medical Quiz Competitions",
    description: "Interactive quiz sessions designed to challenge knowledge, reinforce learning, and promote healthy academic competition among students.",
    image: event1
  },
  {
    title: "Medical Outreach Programs",
    description: "Community-focused initiatives delivering health education, screenings, interventions, and basic medical services to improve public health awareness.",
    image: event2
  },
  {
    title: "Lecture Presentations",
    description: "Structured academic sessions and group discussions led by experienced professionals to enhance understanding of key medical concepts and practices.",
    image: event3
  },
  {
    title: "Orientation Programs",
    description: "Introductory sessions designed to guide new and junior students, helping them adapt to medical school and understand academic expectations.",
    image: event4
  },
  {
    title: "Mentorship Programs",
    description: "Supportive networks connecting students with experienced peers, alumni and professionals for guidance, growth, networking, and career development.",
    image: event5
  },
  {
    title: "Social & Networking Events",
    description: "Engaging activities that foster connection, relaxation, and a strong sense of community among medical students, alumni, teachers and community.",
    image: event6
  }
];

const UDUMSAActivities: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#9D225E] py-20 px-6 md:px-12">
      
      {/* Background Blurry Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-250 w-250 rounded-full bg-white opacity-30 blur-[120px] z-0"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="mb-16 text-center text-white">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block rounded-full border border-white/50 px-6 py-1 text-sm font-medium mb-6"
          >
            Our Activities
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-[Montserrat] leading-tight md:text-3xl lg:text-4xl"
          >
            Academic Events and Community Engagement <br className="hidden md:block" /> Activities
          </motion.h2>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 gap-y-20 gap-x-8 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative flex flex-col items-center"
            >
              {/* Image Container */}
              <div className="w-full overflow-hidden rounded-2xl border-2 border-[#E91E63] shadow-2xl">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="h-64 w-full object-cover md:h-55"
                />
              </div>

              {/* Text Div */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="relative -mt-20 w-[90%] rounded-2xl bg-white/50 p-6 text-center shadow-xl backdrop-blur-md"
              >
                <h3 className="mb-3 text-lg font-bold text-[#E91E63]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-black">
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Footer Button */}
        <div className="mt-20 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-linear-to-r from-[#E91E63] to-black px-10 py-4 text-lg font-bold text-white shadow-2xl transition-all"
          >
            Explore more activities
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default UDUMSAActivities;