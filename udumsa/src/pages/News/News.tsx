import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import info1 from '../../assets/info-1.png';
import info2 from '../../assets/info-2.png';
import info3 from '../../assets/info-3.png';
import info4 from '../../assets/info-4.png';
import info5 from '../../assets/info-5.png';


const newsItems = [
  {
    id: 1,
    size: "large", // This drives the 2x2 spacing logic
    title: "Medical Students Participate in Inter-University Quiz Competition",
    image: info1,
    slug: "quiz-competition"
  },
  {
    id: 2,
    size: "small",
    title: "Annual Health Week Reaches Hundreds with Free Screenings and Education",
    image: info2,
    slug: "health-week-results"
  },
  {
    id: 3,
    size: "small",
    title: "Orientation Program Guides New Medical Students into Clinical Training",
    image: info3,
    slug: "orientation-details"
  },
  {
    id: 4,
    size: "small",
    title: "Students Celebrate Achievements at Annual Awards Night",
    image: info4,
    slug: "awards-night-gallery"
  },
  {
    id: 5,
    size: "small",
    title: "UDUMSA Welcomes New Executive Council for the Academic Year",
    image: info5,
    slug: "executive-council-announcement"
  }
];

// Staggered animation container variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, 
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const UDUMSANews: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full bg-white font-sans overflow-hidden py-24 px-6 md:px-12 lg:px-24">
      
      <div className="absolute left-1/2 top-1/2 w-50 h-50 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9D225E] blur-[100px] z-0"></div>

      <div className="mx-auto max-w-7xl z-10 relative">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 w-full max-w-3xl"
        >
          <div className="inline-block rounded-full bg-[#fdf2f8] px-6 py-2 mb-6 border border-[#fce7f3]">
            <span className="text-sm font-semibold tracking-wide text-[#9D225E]">UDUMSA News</span>
          </div>

          <h2 className="mb-6 text-5xl font-bold leading-[1.1] tracking-tighter  md:text-4xl text-[Montserrat]">
            Stay Informed with Our Latest Updates
          </h2>
          
          <motion.a
            href="/news"
            whileHover={{ x: 5, color: "#83104e" }}
            className="group flex w-fit items-center gap-2 text-lg font-bold text-[#9D225E] transition-colors"
          >
            Go to news page
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </motion.a>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8"
        >
          {newsItems.map((item) => (
            <motion.a
              key={item.id}
              href={`/news/${item.slug}`}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group relative overflow-hidden rounded-3xl shadow-lg transition-all duration-300 ${
                item.size === 'large' 
                  ? 'col-span-2 row-span-2 aspect-4/3 lg:aspect-auto'
                  : 'col-span-1 aspect-4/3'
              }`}
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Semi-transparent Overlay (Text contrast) */}
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-black/80 to-transparent"></div>
              
              {/* Text Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <h3 className={`font-semibold tracking-tight text-white ${
                    item.size === 'large' 
                      ? 'text-2xl leading-snug md:text-3xl' 
                      : 'text-base md:text-lg'
                }`}>
                  {item.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default UDUMSANews;