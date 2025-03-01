import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 1.2, ease: "easeInOut" }
  }
};

const slideUp = {
  hidden: { y: 80, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 18,
      duration: 0.8
    }
  }
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-neutral-50 to-orange-50">
      {/* Hero Section */}
      <motion.div 
        className="relative h-screen flex items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=1920&q=80" 
            alt="Contact Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/30"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1 
            className="text-6xl md:text-7xl font-serif mb-6 drop-shadow-lg"
            variants={slideUp}
          >
            CONNECT WITH US
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl font-light tracking-wide text-rose-50"
            variants={slideUp}
          >
            YOU DESERVE A WONDERFUL WEDDING EXPERIENCE FILLED WITH JOY, 
            AND WE'RE HERE TO MAKE SURE YOUR MEMORIES ARE CHERISHED FOR A LIFETIME
          </motion.p>
        </div>
      </motion.div>

      {/* Contact Form Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left Column - Image and Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
              className="space-y-8"
            >
              <h2 className="text-3xl font-serif text-rose-900">HERE'S WHERE IT ALL BEGINS</h2>
              <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=800&q=80" 
                  alt="Professional Photography Team" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-6 text-rose-800">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <h3 className="font-serif uppercase mb-2 text-rose-900">EMAIL</h3>
                  <p className="text-rose-800">hello@lifeandtimesphotography.com</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <h3 className="font-serif uppercase mb-2 text-rose-900">MAILING</h3>
                  <p className="text-rose-800">123 Photography Lane</p>
                  <p className="text-rose-800">Studio 4B</p>
                  <p className="text-rose-800">Miami, FL 33137</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <h3 className="font-serif uppercase mb-2 text-rose-900">PHONE</h3>
                  <p className="text-rose-800">(305) 555-0123</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-xl"
            >
              <p className="text-rose-800 mb-8">Please fill out this form to get in touch or you can email us at hello@lifeandtimesphotography.com</p>
              <form className="space-y-6">
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="First Name*" 
                    className="w-full px-4 py-3 border-b border-rose-200 bg-transparent focus:outline-none focus:border-rose-500 text-rose-900 placeholder-rose-300"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name*" 
                    className="w-full px-4 py-3 border-b border-rose-200 bg-transparent focus:outline-none focus:border-rose-500 text-rose-900 placeholder-rose-300"
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address*" 
                    className="w-full px-4 py-3 border-b border-rose-200 bg-transparent focus:outline-none focus:border-rose-500 text-rose-900 placeholder-rose-300"
                  />
                  <input 
                    type="text" 
                    placeholder="Event Type*" 
                    className="w-full px-4 py-3 border-b border-rose-200 bg-transparent focus:outline-none focus:border-rose-500 text-rose-900 placeholder-rose-300"
                  />
                  <input 
                    type="text" 
                    placeholder="Event Date*" 
                    className="w-full px-4 py-3 border-b border-rose-200 bg-transparent focus:outline-none focus:border-rose-500 text-rose-900 placeholder-rose-300"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone*" 
                    className="w-full px-4 py-3 border-b border-rose-200 bg-transparent focus:outline-none focus:border-rose-500 text-rose-900 placeholder-rose-300"
                  />
                  <textarea 
                    placeholder="Message" 
                    rows="4" 
                    className="w-full px-4 py-3 border-b border-rose-200 bg-transparent focus:outline-none focus:border-rose-500 text-rose-900 placeholder-rose-300"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="bg-gradient-to-r from-rose-600 to-orange-600 text-white px-8 py-3 rounded-full uppercase tracking-widest text-sm hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Let's Begin →
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-rose-100/80 via-amber-50/90 to-orange-100/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
          >
            <p className="text-rose-800 mb-8">
              From the beginning of our journey, Evan, Tara and the entire Evan Rich Photography team was responsive...
            </p>
            <blockquote className="text-2xl font-serif italic text-rose-900 mb-6">
              "Our photos turned out breathtakingly beautiful and I can't imagine having anyone else photograph my wedding."
            </blockquote>
            <p className="text-rose-700 uppercase tracking-widest">- ROXANA</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
