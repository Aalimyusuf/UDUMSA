import React from 'react';
import { motion } from 'framer-motion';
import {  Mail, Phone } from 'lucide-react';
import logo2 from '../../assets/logo2.png';
import { FaInstagramSquare, FaFacebook, FaLinkedin } from "react-icons/fa"; 
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '#' },
    { name: 'News and events', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Testimonials', href: '#' },
    { name: 'FAQs', href: '#' },
  ];

  const socialLinks = [
     { name: 'Instagram', icon: FaInstagramSquare, href: '#' },
     { name: 'Facebook', icon: FaFacebook, href: '#' },
     { name: 'LinkedIn', icon: FaLinkedin, href: '#' },
     { name: 'X (Twitter)', icon: FaSquareXTwitter, href: '#' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} 
      className="bg-[#9D225E] text-white font-['Montserrat'] px-6 md:px-12 lg:px-24 py-16 mt-20"
    >
      <div className="mx-auto max-w-7xl">
        
        {/* Main Footer content: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Logo, Mission, Socials */}
          <motion.div variants={itemVariants} className="col-span-1 lg:col-span-2 pr-0 lg:pr-10">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={logo2}
                alt="UDUMSA Logo" 
                className="h-16 w-auto" // Dimensions matched from reference image
              />
              <h1 className="text-4xl font-extrabold tracking-tight">UDUMSA</h1>
            </div>
            <p className="text-base text-gray-100/90 leading-relaxed max-w-lg mb-8">
              Committed to academic excellence, community service, leadership development, and advancing the future of healthcare.
            </p>
            {/* Social Media Links */}
            <div className="flex items-center gap-5">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center text-white/80 transition-colors hover:text-white hover:border-white"
                >
                  {social.icon ? (
                    <social.icon size={22} strokeWidth={1.5} />
                  ) : (
                    <span className="text-xl font-bold font-sans">{social.textIcon}</span>
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants} className="flex flex-col gap-5 pt-2">
            <h3 className="text-xl font-bold tracking-tight mb-3">Quick Links</h3>
            {quickLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-base text-gray-100 hover:text-white hover:underline transition-colors w-fit"
              >
                {link.name}
              </a>
            ))}
          </motion.div>

          {/* Column 3: Contact Info */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6 pt-2">
            <h3 className="text-xl font-bold tracking-tight mb-3">Contact UDUMSA</h3>
            <div className="flex items-center gap-4">
              <div className="text-white/80 shrink-0"><Phone size={24} /></div>
              <p className="text-base font-semibold tracking-wide text-gray-100">
                08088888888
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-white/80 shrink-0"><Mail size={24} /></div>
              <p className="text-base font-semibold tracking-wide text-gray-100">
                support@udumsa.com
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar (Copyright) */}
        <motion.div variants={itemVariants} className="border-t border-white/20 pt-8 mt-8 text-center md:text-left">
          <p className="text-sm font-medium text-gray-200">
            @UDUMSA, 2026. All rights reserved
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;