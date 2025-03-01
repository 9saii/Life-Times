import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const backgroundImages = [
  "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1554941829-202a0b2403b8?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1502759683299-cdcd6974244f?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1449495169669-7b118f960251?auto=format&fit=crop&q=80"
];

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 1 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const slideUp = {
  hidden: { y: 60, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      delay: 0.2
    }
  }
};

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section with Parallax Effect and Rotating Background */}
      <div className="relative min-h-[200vh]">
        <div className="fixed inset-0 z-0">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentImageIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          ))}
        </div>
        
        <motion.div 
          className="relative z-10 h-screen flex items-center justify-center text-center text-white"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="max-w-3xl px-4">
            <motion.h1 
              className="text-5xl md:text-7xl font-serif mb-6 text-shadow-lg"
              variants={slideUp}
            >
              Capturing Life's Beautiful Moments
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-shadow"
              variants={slideUp}
            >
              Professional photography services for all your special occasions
            </motion.p>
            <motion.div variants={scaleUp}>
              <Link
                to="/contact"
                className="inline-block bg-white text-gray-900 px-8 py-3 uppercase tracking-widest text-sm hover:bg-gray-100 transition-all duration-300 hover:px-10 hover:shadow-lg"
              >
                Explore more
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Featured Work */}
      <motion.section 
        className="relative z-10 bg-white py-20 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-serif text-center mb-12"
            variants={slideUp}
          >
            Featured Work
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {[
              "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80"
            ].map((image, index) => (
              <motion.div 
                key={index} 
                className="relative aspect-square overflow-hidden group rounded-lg shadow-md hover:shadow-xl transition-shadow duration-500"
                variants={slideUp}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <img
                  src={image}
                  alt={`Featured ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-serif">Project {index + 1}</h3>
                    <p className="opacity-80">View Gallery</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Tagline Section */}
      <motion.section 
        className="relative z-10 bg-transparent text-white py-20 px-4 flex justify-center items-center" 
        style={{ minHeight: '50vh' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="text-center max-w-3xl">
          <motion.h2 
            className="text-4xl md:text-5xl font-serif text-shadow-lg"
            variants={staggerContainer}
          >
            <motion.span 
              className="block mb-4 hover:tracking-wider transition-all duration-500"
              variants={slideUp}
            >
              Following your stories
            </motion.span>
            <motion.span 
              className="block mb-4 hover:tracking-wider transition-all duration-500"
              variants={slideUp}
            >
              Collecting your memories
            </motion.span>
            <motion.span 
              className="block hover:tracking-wider transition-all duration-500"
              variants={slideUp}
            >
              Preserving your legacy
            </motion.span>
          </motion.h2>
        </div>
      </motion.section>

      {/* Beautiful Destinations Showcase */}
      <motion.section 
        className="relative z-10 bg-gray-100 py-20 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {/* Destination 1 */}
            <motion.div 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
              variants={slideUp}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80"
                  alt="Venice, Italy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="text-center py-6">
                <h3 className="text-xl font-serif uppercase tracking-widest mb-1">VENICE</h3>
                <p className="text-sm text-gray-600 uppercase tracking-widest">CANAL GRANDE · ITALY</p>
              </div>
            </motion.div>
            
            {/* Destination 2 */}
            <motion.div 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
              variants={slideUp}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&q=80"
                  alt="Santorini, Greece"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="text-center py-6">
                <h3 className="text-xl font-serif uppercase tracking-widest mb-1">SANTORINI</h3>
                <p className="text-sm text-gray-600 uppercase tracking-widest">AEGEAN SEA · GREECE</p>
              </div>
            </motion.div>
            
            {/* Destination 3 */}
            <motion.div 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
              variants={slideUp}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&q=80"
                  alt="Tokyo, Japan"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="text-center py-6">
                <h3 className="text-xl font-serif uppercase tracking-widest mb-1">TOKYO</h3>
                <p className="text-sm text-gray-600 uppercase tracking-widest">SHIBUYA CROSSING · JAPAN</p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="text-center mt-10"
            variants={scaleUp}
          >
            <Link
              to="/portfolio"
              className="inline-block bg-gray-900 text-white px-10 py-4 uppercase tracking-widest text-sm hover:bg-black transition-all duration-300 hover:px-12 rounded hover:shadow-lg"
            >
              BROWSE PORTFOLIO
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        className="relative z-10 bg-gray-50 py-20 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl font-serif text-center mb-12"
            variants={slideUp}
          >
            Our Services
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {[
              {
                title: "Weddings",
                description: "Professional coverage for your special day with style",
                icon: "💍"
              },
              {
                title: "Portraits",
                description: "Elegant and timeless portrait sessions for individuals and families",
                icon: "👨‍👩‍👧‍👦"
              },
              {
                title: "Events",
                description: "Documenting your memorable events and special occasions",
                icon: "🎉"
              }
            ].map((service, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-500 text-center"
                variants={slideUp}
                whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-serif mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="relative z-10 bg-gray-900 text-white py-20 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-serif mb-6"
            variants={slideUp}
          >
            Ready to capture your story?
          </motion.h2>
          <motion.p 
            className="text-xl mb-10 text-gray-300"
            variants={slideUp}
          >
            Let's create beautiful memories together
          </motion.p>
          <motion.div variants={scaleUp}>
            <Link
              to="/contact"
              className="inline-block bg-white text-gray-900 px-10 py-4 rounded-full uppercase tracking-widest text-sm hover:bg-gray-100 transition-all duration-300 hover:px-12 hover:shadow-glow"
            >
              Get in touch
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}