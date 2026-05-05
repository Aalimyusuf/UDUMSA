import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

const UDUMSAContact: React.FC = () => {
  return (
    <section className="min-h-screen w-full bg-white py-24 px-6 md:px-12 lg:px-24 font-['Montserrat']">
      <div className="mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block rounded-full border border-[#9D225E]/50 bg-[#fdf2f8] px-8 py-2 mb-6"
          >
            <span className="text-sm font-bold text-[#9D225E]">Contact Us</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight"
          >
            Contact and Connect with UDUMSA
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          
          {/* Left Section: Info Grid with Gradient */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative overflow-hidden rounded-4xl bg-linear-to-br from-[#9D225E] to-[#E91E63] p-12 text-white"
          >
            {/* Horizontal (left side) */}
            <div className="absolute top-1/2 left-16 right-1/2 mr-4 h-0.5 bg-white/40 -translate-y-1/2 hidden md:block" />

            {/* Horizontal (right side) */}
            <div className="absolute top-1/2 left-1/2 ml-4 right-16 h-0.5 bg-white/40 -translate-y-1/2 hidden md:block" />

            {/* Vertical (top side) */}
            <div className="absolute left-1/2 top-16 bottom-1/2 mb-4 w-0.5 bg-white/40 -translate-x-1/2 hidden md:block" />

            {/* Vertical (bottom side) */}
            <div className="absolute left-1/2 top-1/2 mt-4 bottom-16 w-0.5 bg-white/40 -translate-x-1/2 hidden md:block" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 h-full relative z-10">
              {/* Phone */}
              <div className="flex flex-col items-center justify-center text-center">
                <Phone size={48} strokeWidth={1.5} className="mb-6" />
                <p className="text-lg font-semibold tracking-wide">+2348000000000</p>
              </div>

              {/* WhatsApp */}
              <div className="flex flex-col items-center justify-center text-center">
                <MessageCircle size={48} strokeWidth={1.5} className="mb-6" />
                <p className="text-lg font-semibold tracking-wide">+2348000000000</p>
              </div>

              {/* Email */}
              <div className="flex flex-col items-center justify-center text-center">
                <Mail size={48} strokeWidth={1.5} className="mb-6" />
                <p className="text-lg font-semibold tracking-wide">support@udumsa.com</p>
              </div>

              {/* Location */}
              <div className="flex flex-col items-center justify-center text-center">
                <MapPin size={48} strokeWidth={1.5} className="mb-6" />
                <p className="text-lg font-semibold tracking-wide leading-relaxed">
                  Usmanu Danfodiyo <br /> University Teaching Hospital
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Section: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 rounded-4xl bg-white shadow-2xl border border-gray-100 overflow-hidden flex flex-col"
          >
            {/* Form Header */}
            <div className="bg-[#9D225E] py-4 text-center">
              <span className="text-lg font-bold text-white tracking-wide">Send Us an Email</span>
            </div>

            <form className="p-10 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[#E91E63] font-bold text-sm ml-1">Full Name:</label>
                <input 
                  type="text" 
                  placeholder="Abdurrahman Sani"
                  className="w-full rounded-2xl border-2 border-[#9D225E]/30 px-6 py-4 outline-none focus:ring-2 ring-[#9D225E]/10 transition-all placeholder:text-gray-400"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#E91E63] font-bold text-sm ml-1">Email or Phone:</label>
                <input 
                  type="text" 
                  placeholder="abdul@gmail.com"
                  className="w-full rounded-2xl border-2 border-[#9D225E]/30 px-6 py-4 outline-none focus:ring-2 ring-[#9D225E]/10 transition-all placeholder:text-gray-400"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[#E91E63] font-bold text-sm ml-1">Message:</label>
                <textarea 
                  rows={4}
                  placeholder="Type your message..."
                  className="w-full rounded-2xl border-2 border-[#9D225E]/30 px-6 py-4 outline-none focus:ring-2 ring-[#9D225E]/10 transition-all resize-none placeholder:text-gray-400"
                />
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 w-full rounded-2xl bg-[#9D225E] py-5 text-lg font-bold text-white shadow-lg transition-colors hover:bg-[#83104e]"
              >
                Send Email
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default UDUMSAContact;