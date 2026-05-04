import React from 'react';
import { motion } from 'framer-motion';
import img1 from "../../assets/image4.jpg";
import img2 from "../../assets/image5.png";
import img3 from "../../assets/image2.jpg";
import img4 from "../../assets/image3.jpg";

// Image configuration
const images = [
  { id: 1, src: img1, alt: "UDUMSA Landmark", border: "rounded-tl-[100px] " },
  { id: 2, src: img2, alt: "Campus greenery", border: "rounded-tr-xl" },
  { id: 3, src: img3, alt: "Building facade", border: "rounded-bl-xl" },
  { id: 4, src: img4, alt: "UDUMSA Monument", border: "rounded-br-[100px] " },
];

const AboutSection: React.FC = () => {
  // LEFT SIDE animations 
  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // RIGHT SIDE animations
  const gridVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, delay: 0.2, ease: "easeOut" }
    }
  };

  return (
    <section className="relative overflow-hidden bg-white py-20 px-6 md:px-12 lg:px-24 ">
      
      {/* Background blob*/}

       <div className="absolute top-1/2 left-5/7 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-200/50 blur-[15px] pointer-events-none" />

      {/* Bottom-left quarter circle */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 max-w-lg rounded-tr-full bg-pink-200/50 z-0"></div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        
        {/*SECTION TEXT SIDE */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="flex flex-col items-start"
        >
          <span className="mb-6 rounded-full border border-[#9D225E]/30 bg-[#FCE4EC] px-6 py-2 text-sm font-[Montserrat] font-bold text-[#9D225E]">
            Section title
          </span>
          
          <h2 className="mb-8 text-4xl font-bold font-lg tracking-tight font-[Montserrat] text-gray-900 md:text-4xl">
            Where Future Doctors Grow
          </h2>
          
          <div className="space-y-6 text-md leading-relaxed text-black">
            <p>
              The Usmanu Danfodiyo University Medical Students’ Association (UDUMSA) 
              is a group of passionate and driven medical students dedicated to 
              excellence in training, research, and service. We are committed to 
              fostering academic growth, professional development, and leadership 
              among our members.
            </p>
            <p>
              Through collaboration, innovation, and community engagement, we strive 
              to make a meaningful impact on healthcare delivery while preparing 
              future doctors to serve with competence, compassion, and integrity.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 rounded-2xl font-[Montserrat] bg-[#9D225E] px-10 py-4 text-lg  text-white shadow-lg transition-all hover:bg-[#851d50]"
          >
            More About Udumsa
          </motion.button>
        </motion.div>

        {/* RIGHT SIDE (IMAGES) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={gridVariants}
          className="grid grid-cols-2 gap-4 w-full md:w-auto md:max-w-xl lg:w-lg shrink-0"
        >
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              className={`overflow-hidden  ${img.border}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                style={{ aspectRatio: '1 / 1' }}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;