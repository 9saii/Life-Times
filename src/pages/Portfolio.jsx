import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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

const Portfolio = () => {
  const featuredGalleries = [
    {
      title: "SANTORINI SUNSET",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
      link: "/gallery/santorini-sunset"
    },
    {
      title: "SWISS ALPS",
      image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&q=80",
      link: "/gallery/swiss-alps"
    },
    {
      title: "KYOTO GARDENS",
      image: "https://images.unsplash.com/photo-1558862107-d49ef2a04d72?w=800&q=80",
      link: "/gallery/kyoto-gardens"
    },
    {
      title: "VENICE CANALS",
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80",
      link: "/gallery/venice-canals"
    },
    {
      title: "MACHU PICCHU",
      image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&q=80",
      link: "/gallery/machu-picchu"
    },
    {
      title: "NORTHERN LIGHTS",
      image: "https://images.unsplash.com/photo-1579033461380-adb47c3eb938?w=800&q=80",
      link: "/gallery/northern-lights"
    },
  ];

  const latestWork = [
    {
      image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80",
      title: "Amalfi Coast",
      link: "/gallery/amalfi-coast"
    },
    {
      image: "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?w=800&q=80",
      title: "Bali Rice Terraces",
      link: "/gallery/bali-rice-terraces"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <motion.div 
        className="relative h-screen flex items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=1920&q=80" 
            alt="Portfolio Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <motion.h1 
            className="text-6xl md:text-7xl font-serif mb-6"
            variants={slideUp}
          >
            THE PORTFOLIO
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl font-light tracking-wide"
            variants={slideUp}
          >
            A curated collection of our most cherished photographic stories
          </motion.p>
        </div>
      </motion.div>

      {/* Featured Galleries */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-16">FEATURED GALLERIES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredGalleries.map((gallery, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: index * 0.2 }
                  }
                }}
              >
                <Link to={gallery.link}>
                  <div className="aspect-[3/4] overflow-hidden">
                    <img 
                      src={gallery.image} 
                      alt={gallery.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <h3 className="text-white text-xl tracking-widest">{gallery.title}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link 
              to="/contact"
              className="inline-block bg-gradient-to-r from-rose-600 to-orange-600 text-white px-10 py-4 rounded-full uppercase tracking-widest text-sm hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Work */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-16">THE LATEST</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestWork.map((work, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: index * 0.2 }
                  }
                }}
              >
                <Link to={work.link}>
                  <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src={work.image} 
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <h3 className="text-white text-2xl tracking-widest">{work.title}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link 
              to="/contact"
              className="inline-block bg-gradient-to-r from-rose-600 to-orange-600 text-white px-10 py-4 rounded-full uppercase tracking-widest text-sm hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-4 bg-neutral-100">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl font-serif italic text-gray-700">
            "So much class, beauty, grace, love,
            <br />
            and fun captured in an image"
          </blockquote>
          <p className="mt-6 text-gray-500 tracking-wide">— BRITTANY & SAM</p>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
