import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from "../../assets/logo.jpeg";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#', active: true },
    { name: 'About Us', href: '#', active: false },
    { name: 'News & Events', href: '#', active: false },
    { name: 'Contact Us', href: '#', active: false },
  ];

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full bg-white px-6 py-4 shadow-sm md:px-12"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        
        {/* Logo Section */}
        <div>
          <img 
            src={logo}
            alt="UDUMSA Logo" 
            className="h-12 w-auto md:h-16"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative text-sm font-semibold transition-colors duration-300 hover:text-[#9D225E] ${
                link.active ? 'text-[#9D225E]' : 'text-gray-800'
              }`}
            >
              {link.name}
              {link.active && (
                <motion.div 
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 h-[2px] w-full bg-[#9D225E]"
                />
              )}
            </a>
          ))}
        </nav>

        {/* Membership Button */}
        <div className="hidden items-center lg:block">
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#851d50" }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-[#9D225E] px-8 py-2.5 text-sm font-bold text-white shadow-lg transition-all"
          >
            Membership
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white p-6 shadow-xl lg:hidden"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsOpen(false)}><X size={28} /></button>
            </div>
            <div className="mt-12 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-bold text-gray-800 hover:text-[#9D225E]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="mt-4 rounded-full bg-[#9D225E] py-3 font-bold text-white">
                Membership
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;