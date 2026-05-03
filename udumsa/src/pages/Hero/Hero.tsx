import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Users, Heart, BookOpen } from "lucide-react";
import hero from "../../assets/hero.jpg";

interface CardProps {
  index: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const InfoCard: React.FC<CardProps> = ({ index, title, description, icon: Icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="group relative overflow-hidden rounded-2xl bg-white/95 backdrop-blur-sm p-4 shadow-lg md:p-4"
    >
      <div className="relative z-10 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-gradient-to-br from-pink-100 to-pink-200 p-2.5 text-pink-600 shadow-md">
            <Icon size={22} />
          </div>
          <h3 className="text-lg font-semibold text-pink-600 md:text-xl">
            {title}
          </h3>
        </div>

        <p className="text-sm leading-relaxed text-gray-600 md:text-base">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const UDUMSAHero: React.FC = () => {
  const cardData = [
    {
      title: "Academic Excellence",
      description:
        "Supporting students with resources, mentorship, guidance and opportunities to excel in medical education and research.",
      icon: BookOpen,
    },
    {
      title: "Unity & Collaboration",
      description:
        "Building unity, collaboration, and leadership among medical students across all levels through innovative programs.",
      icon: Users,
    },
    {
      title: "Healthcare Impact",
      description:
        "Driving initiatives that improve healthcare awareness, community outreach, and service to humanity.",
      icon: Heart,
    },
  ];

  return (
    <div className="relative w-full overflow-hidden font-sans">

      {/* HERO BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero}
          alt="Hero background - Medical students"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* HERO CONTENT */}
      <main className="relative z-10 px-6 pt-20 md:px-16 lg:px-24 pb-10">

        <div className="w-full">

          {/* TITLE ANIMATION */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full text-4xl font-[Montserrat] font-bold leading-tight text-white md:text-5xl lg:text-7xl"
          >
            Usmanu Danfodiyo University<br />
            Medical Students’ Association
          </motion.h1>

          {/* TAGLINE */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 max-w-2xl text-base text-gray-200 md:text-lg lg:text-xl"
          >
            Shaping the future of healthcare through excellence, unity, and service.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-4"
          >

            <a
              href="#"
              className="group relative overflow-hidden rounded-md bg-[#A01E66] px-8 py-3 text-sm font-semibold text-white shadow-lg md:px-10 md:py-4 md:text-base"
            >
              <span className="relative z-10 flex items-center gap-2">
                Membership
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>

            <a
              href="#"
              className="rounded-lg bg-[#DA1C5C] px-8 py-3 text-sm font-semibold text-white md:px-10 md:py-4 md:text-base"
            >
              <Calendar className="mr-2 inline-block h-4 w-4" />
              News & Events
            </a>

          </motion.div>
        </div>
      </main>

      {/* CARDS SECTION */}
      <section className="relative z-10 px-6 pb-10 md:px-16 lg:px-24">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
          {cardData.map((card, index) => (
            <InfoCard key={index} index={index} {...card} />
          ))}
        </div>
      </section>

    </div>
  );
};

export default UDUMSAHero;